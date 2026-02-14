---
slug: single-cell-cellranger-count-part1-introduction
title: "Single Cell RNA-seq Analysis with Cell Ranger Count (Part 1): Introduction and Prerequisites"
authors: [river]
tags: [single-cell, cellranger, rna-seq, fastq, alignment, bioinformatics]
image: ./imgs/intro.png
draft: true
---

Single-cell RNA sequencing (scRNA-seq) has revolutionized our understanding of cellular heterogeneity. However, processing raw FASTQ files into usable single-cell count matrices is a complex pipeline that requires careful orchestration of multiple steps. This post walks through the entire process of using Cell Ranger Count—the industry-standard tool for 10x Genomics sequencing data—to transform raw FASTQ files into aligned, demultiplexed, and quantified single-cell expression matrices.

<!-- truncate -->

## 1. Prerequisites: What You Should Know Before This Blog

This blog builds on foundational bioinformatics knowledge. If you're new to any of these topics, we recommend reviewing the following resources first:

### 1.1. Basic Linux/Unix Command Line

- Working with directories and files (`cd`, `ls`, `mkdir`, `cp`, `mv`, `rm`)
- Using pipes and redirection (`|`, `>`, `<`)
- Writing simple bash scripts with loops and conditionals
- Understanding file permissions and PATH

### 1.2. How DNA Sequencing Works

Before using Cell Ranger, you need to understand how sequencing produces reads and why Cell Ranger processes them the way it does.

**The Sequencing Process:**
- DNA is fragmented into small pieces (~200bp for RNA-seq)
- Adapters are attached to both ends
- The machine reads the DNA sequence base-by-base from the 5' end
- Each base call gets a quality score (probability of correct call)
- Result: Raw reads (typically 30-150bp long) in FASTQ format

**Key Concepts:**
- **Read**: A short DNA sequence (e.g., 28bp) produced by the sequencer
- **Quality Score**: Phred quality (Q) score indicating confidence in each base call
  - Q30 = 99.9% accuracy
  - Q20 = 99% accuracy
  - Scores below Q30 are considered unreliable

- **Read Pairs**: In paired-end sequencing, you get two reads from each fragment:
  - **R1** (Read 1): Forward read from the 5' end
  - **R2** (Read 2): Reverse read from the 3' end
  - For 10x scRNA-seq: R1 contains barcode + UMI, R2 contains cDNA

### 1.3. Read Alignment and Mapping

Cell Ranger aligns reads to a reference genome. You need to understand this process:

**What is Alignment?**
- Taking a short read (e.g., 28bp) and finding where it came from in the reference genome (3 billion bp)
- Similar to searching for a phrase in a book
- Multiple reads can map to the same location (coverage)

**Why Alignment Matters:**
- Tells us *which gene* each read came from
- Enables us to count gene expression
- Detects errors or contamination

**Alignment Challenges:**
- Some reads are repetitive (appear in multiple genes)
- Some reads contain sequencing errors
- Some regions have similar sequences
- Cell Ranger uses STAR aligner to handle these intelligently

**Alignment Output: BAM Files**
- Binary format storing reads and their alignment positions
- Each read has:
  - Sequence
  - Quality scores
  - Chromosome and position where it aligns
  - Mapping quality (confidence)
  - Tags (metadata added by Cell Ranger)

**Visual Example:**
```
Reference:  ACGTACGTACGTACGTACGTACGTACGTACGTACGTACGTACGTACGTACGT
             ^^^^^^^^^^                      ^^^^^^^^^^^^^^^^
             Read 1 aligns here         Read 2 aligns here
```

### 1.4. Containers (Docker or Singularity/Apptainer)

- Why containers matter for reproducible bioinformatics
- Basic understanding of container images and how they work
- Reference: [Containers on HPC: From Docker to Singularity and Apptainer](/blog/containers-hpc-docker-singularity-apptainer)

### 1.5. HPC Clusters & Job Scheduling (Slurm or PBS)

- How to submit and monitor jobs on an HPC cluster
- Understanding resource allocation (CPUs, memory, time)
- Writing job submission scripts
- Reference: [Building a Slurm HPC Cluster Series](/blog/how-to-build-slurm-hpc-part-1)

### 1.6. Next-Generation Sequencing (NGS) Fundamentals

You should understand FASTQ files and basic sequencing concepts:

**FASTQ File Format:**

FASTQ files contain sequencing reads. Each read has 4 lines:

```
@SRR12345678.1 header_info/1
ACGTACGTACGTACGTACGTACGTACGTACGTACGTACGTACGTACGTACGTACGTACGT
+
IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
```

1. **Header**: Sequence identifier and metadata (starts with `@`)
2. **Sequence**: The actual DNA sequence
3. **Separator**: Just a `+`
4. **Quality**: Phred quality scores (one character per base, same length as sequence)

**Quality Scores Explained:**
- Quality scores represent the probability that a base call is correct
- Common conversions:
  - `I` = Q40 (99.99% accuracy)
  - `G` = Q38 (99.98% accuracy)
  - `B` = Q34 (99.96% accuracy)
  - `!` = Q0 (0% accuracy - unreliable)
- Cell Ranger filters out low-quality reads (typically < Q20)

**What to Know:**
- What FASTQ files are and how to inspect them
- Quality scores (Phred quality) and their meaning
- Read quality assessment and what low quality means
- Barcode multiplexing basics (samples can be pooled, then separated by barcode)

### 1.7. Package Management with Pixi

- Installing and managing tools reproducibly
- Creating isolated environments
- Reference: [Pixi - New conda era](/blog/pixi-is-new-conda-based-era)

### 1.8. Version Control with Git

- Tracking analysis parameters and scripts
- Reproducibility through version control
- Reference: [The Evolution of Version Control - Git's Role in Reproducible Bioinformatics (Part 1)](/blog/how-to-version-control-git-bioinformatics-part-1)

### 1.9. Workflow Management (Optional but Recommended)

- Nextflow or other workflow managers for scaling to multiple samples
- Reference: [RIVER - A Web Application to Run Nf-Core](/blog/river-platform-and-nextflow)

## 2. What You'll Learn in This Series

This 4-part series covers everything from prerequisites to running Cell Ranger Count:

- **Part 1 (This post)**: Prerequisites and pipeline overview
- **Part 2**: Installation, setup, and FASTQ file preparation
- **Part 3**: Running Cell Ranger Count with real execution
- **Part 4**: Preparing datasets with development-friendly approach (single chromosome) and scaling to real data

## 3. Overview: The Cell Ranger Count Pipeline

Cell Ranger Count takes raw FASTQ files from 10x Genomics sequencing and produces:

1. **Aligned BAM files** - Reads mapped to the genome
2. **Feature-barcode matrix** - Count of genes detected in each cell
3. **QC metrics** - Library complexity, sequencing saturation, cells detected
4. **HTML summary report** - Interactive visualization of results

### 3.1. The Complete Workflow

```
Raw FASTQ Files (Barcode + Read)
    ↓
[1] Barcode Processing
    - Extract cell barcode (16bp)
    - Correct barcode errors (match to reference)
    - Assign reads to cells
    ↓
[2] Alignment
    - Trim polyA tails and adapters
    - Align reads to reference genome (STAR)
    - Process alignments
    ↓
[3] Quantification
    - Count gene coverage per cell
    - Generate feature-barcode matrix
    ↓
[4] QC & Reporting
    - Calculate metrics (cells, UMIs, genes)
    - Generate summary report
    ↓
Output Files
- matrix.mtx.gz (sparse count matrix)
- features.tsv.gz (gene annotations)
- barcodes.tsv.gz (cell barcodes)
- aligned_sorted_dedup.bam (BAM file)
- web_summary.html (QC report)
```

## 4. Preparing Datasets: 
### 4.1 Reference genome
### 4.2 Datasets
#### 4.2.1 Small datasets

#### 4.2.2 Real dataset GSE174609

## 5. Init projects
### 5.1 Basic setup
I configure the github repository  https://github.com/riverxdata/river-scRNAseq.git 