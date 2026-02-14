---
slug: docker-out-docker-bioinformatics-web-apps
title: "Docker Out of Docker: Running Interactive Web Applications for Data Analysis"
authors: [river]
tags: [docker, containers, rstudio, jupyterlab, code-server, bioinformatics, reproducibility, web-apps]
image: ./imgs/intro.png
---

Running interactive web applications like RStudio, JupyterLab, and Code Server in containers is a powerful way to provide reproducible analysis environments. However, users often need to spawn additional containerized tools from within these applications. **Docker out of Docker (DooD)** elegantly solves this by allowing containers to access the host's Docker daemon. This post explains how to set up DooD for interactive web applications and why it's the right approach for bioinformatics workflows.

<!-- truncate -->

## 1. The Scenario: Web Applications That Need to Run Containers

### 1.1. Common Use Cases in Bioinformatics

**RStudio Server with Containerized Tools**
```
User opens RStudio in browser
    ↓
Inside RStudio, run: system("docker run quay.io/biocontainers/samtools:latest samtools ...")
    ↓
Needs access to host Docker daemon
```

**JupyterLab with Cell Ranger Analysis**
```
User runs notebook cell with: !docker run cellranger:v7.0 cellranger count ...
    ↓
Needs Docker access from within JupyterLab container
    ↓
Results written back to shared volume
```

**Code Server for Pipeline Development**
```
User edits Nextflow script in Code Server
    ↓
Runs: docker exec to test containerized tools locally
    ↓
Needs full Docker CLI access
```

### 1.2. Why DooD Is Perfect for Web Applications

Web applications like RStudio, JupyterLab, and Code Server need to:
1. **Run in a container** for reproducibility and dependency isolation
2. **Access Docker** to spawn containerized bioinformatics tools
3. **Share data volumes** with host and spawned containers
4. **Maintain file permissions** so users can access results

DooD provides all of this with a simple socket mount.

## 2. Understanding Docker Out of Docker (DooD)

### 2.1. How DooD Works

**DooD** mounts the host's Docker socket (`/var/run/docker.sock`) into the container. This allows processes inside the container to communicate directly with the **host's Docker daemon**.

**Key insight:** Containers spawned from within the DooD container appear as **siblings** to the web application container, not children. They run directly on the host, giving them full access to host resources and volumes.

**Architecture:**

```
Host System
├── Docker Daemon (listening on /var/run/docker.sock)
├── Host volumes (/data, /workspace)
│
└── Web App Container (RStudio/JupyterLab/Code Server)
    ├── Mounts: /var/run/docker.sock:/var/run/docker.sock
    ├── Mounts: /data:/data, /workspace:/workspace
    │
    ├── User runs: docker run quay.io/biocontainers/bwa:latest ...
    │
    └── → Uses HOST Docker daemon to spawn sibling container
        → Spawned container has full access to host volumes
        → Results written back to shared volume
        → Web app container can access results
```

### 2.2. Why This Works So Well

**No Resource Overhead**
- No nested Docker daemon
- Minimal memory/CPU overhead
- Fast container spawning (~100ms)

**Simple Volume Sharing**
- Both web app and spawned containers can read/write shared volumes
- No complex mount layering
- Direct access to host filesystem

**Full Docker Access**
- docker ps, docker pull, docker build all work
- Can manage images and containers from within the web app

## 3. Setting Up RStudio with DooD

### 3.1. Running RStudio with Docker Socket Mount

**Basic RStudio with DooD:**

```bash
#!/bin/bash
docker run \
  --rm \
  -p 8787:8787 \
  -e PASSWORD=mypassword \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /home/user/data:/data \
  -v /home/user/workspace:/workspace \
  rocker/tidyverse:latest
```

**Explanation:**
- `-p 8787:8787`: RStudio web interface on port 8787
- `-e PASSWORD=mypassword`: Set RStudio password
- `-v /var/run/docker.sock:/var/run/docker.sock`: Mount Docker socket (enables DooD)
- `-v /home/user/data:/data`: Share data directory
- `-v /home/user/workspace:/workspace`: Share workspace directory

### 3.2. Using Docker from Within RStudio

Once RStudio is running, you can use Docker directly from the R console or shell:

**Running samtools from RStudio:**

```r
# In RStudio console
system('docker run --rm -v /data:/data quay.io/biocontainers/samtools:latest samtools view -h /data/input.bam | head')
```

**Running bwa alignment:**

```r
# Run bwa in Docker container
cmd <- 'docker run --rm -v /data:/data -v /workspace:/workspace quay.io/biocontainers/bwa:latest bwa mem /data/ref.fa /data/reads.fastq > /workspace/aligned.sam'
system(cmd)

# Read results back into R
alignment <- read.table('/workspace/aligned.sam', skip=10)
head(alignment)
```

**Running Cell Ranger from RStudio:**

```r
# In RStudio terminal or system()
system('
docker run --rm \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -v /data:/data \\
  cellranger:v7.0 \\
  cellranger count \\
    --id=sample1 \\
    --fastqs=/data/fastqs \\
    --transcriptome=/data/reference
')

# Load results
library(Seurat)
data <- Read10X_h5('/data/sample1/outs/filtered_feature_bc_matrix.h5')
```

### 3.3. Docker Compose Configuration for RStudio

**More production-ready setup with docker-compose:**

```yaml
version: '3.8'

services:
  rstudio:
    image: rocker/tidyverse:4.3.0
    container_name: rstudio-analysis
    ports:
      - "8787:8787"
    environment:
      - PASSWORD=secure_password
      - USER=researcher
    volumes:
      # Mount Docker socket for DooD
      - /var/run/docker.sock:/var/run/docker.sock
      # Mount data directories
      - ./data:/data:rw
      - ./workspace:/workspace:rw
      - ./projects:/home/rstudio/projects:rw
    restart: unless-stopped
    # Optional: limit resources
    deploy:
      resources:
        limits:
          cpus: '4'
          memory: 16G
```

**Run with:**

```bash
docker-compose up -d
# Access at http://localhost:8787
# Username: researcher
# Password: secure_password
```

## 4. Setting Up JupyterLab with DooD

### 4.1. Running JupyterLab with Docker Socket Mount

**Basic JupyterLab with DooD:**

```bash
#!/bin/bash
docker run \
  --rm \
  -p 8888:8888 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /home/user/data:/data \
  -v /home/user/notebooks:/notebooks \
  jupyter/scipy-notebook:latest \
  jupyter lab --ip=0.0.0.0 --allow-root --no-browser
```

**Get the token from logs:**

```bash
# Output will show: http://127.0.0.1:8888/lab?token=xxxxx
# Use that to access JupyterLab in browser
```

### 4.2. Using Docker from JupyterLab Notebooks

**Running bioinformatics tools in notebook cells:**

```python
# In JupyterLab cell - run samtools in Docker
import subprocess

result = subprocess.run([
    'docker', 'run', '--rm',
    '-v', '/data:/data',
    'quay.io/biocontainers/samtools:latest',
    'samtools', 'view', '-h', '/data/input.bam'
], capture_output=True, text=True)

print(result.stdout)
```

**Processing with Docker + Python integration:**

```python
# Cell 1: Run analysis in container
import subprocess
import json

# Run Cell Ranger in Docker
subprocess.run([
    'docker', 'run', '--rm',
    '-v', '/data:/data',
    'cellranger:v7.0',
    'cellranger', 'count',
    '--id=sample1',
    '--fastqs=/data/fastqs',
    '--transcriptome=/data/reference'
])

# Cell 2: Load results in Python
import scanpy as sc

adata = sc.read_h5ad('/data/sample1/outs/filtered_feature_bc_matrix.h5')
print(adata)
```

**Running FastQC on multiple samples:**

```python
import subprocess
import os
from pathlib import Path

fastq_dir = '/data/fastqs'

# Run FastQC on all FASTQ files
for fastq_file in Path(fastq_dir).glob('*.fastq.gz'):
    subprocess.run([
        'docker', 'run', '--rm',
        '-v', '/data:/data',
        'quay.io/biocontainers/fastqc:latest',
        'fastqc',
        f'/data/fastqs/{fastq_file.name}',
        '-o', '/data/qc_results'
    ])

print("FastQC analysis complete")
```

### 4.3. Docker Compose Configuration for JupyterLab

```yaml
version: '3.8'

services:
  jupyter:
    image: jupyter/scipy-notebook:latest
    container_name: jupyterlab-analysis
    ports:
      - "8888:8888"
    volumes:
      # Mount Docker socket for DooD
      - /var/run/docker.sock:/var/run/docker.sock
      # Mount analysis directories
      - ./data:/data:rw
      - ./notebooks:/notebooks:rw
      - ./output:/output:rw
    environment:
      - JUPYTER_ENABLE_LAB=yes
    command: >
      jupyter lab 
      --ip=0.0.0.0 
      --port=8888 
      --allow-root 
      --no-browser
    restart: unless-stopped
```

## 5. Setting Up Code Server with DooD

### 5.1. Running Code Server with Docker Socket Mount

**Code Server with full Docker access:**

```bash
#!/bin/bash
docker run \
  --rm \
  -p 8443:8443 \
  -e PASSWORD=mypassword \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /home/user/workspace:/home/coder/project \
  -v /home/user/data:/data \
  codercom/code-server:latest
```

**Access at:** https://localhost:8443

### 5.2. Using Docker from Code Server

**Integrated terminal for Docker commands:**

```bash
# In Code Server terminal
docker ps
docker pull quay.io/biocontainers/nextflow:latest
docker run --rm quay.io/biocontainers/nextflow:latest nextflow --version
```

**Running and debugging Nextflow workflows:**

```bash
# In Code Server terminal - edit Nextflow script
cat > /workspace/main.nf << 'EOF'
process alignment {
  container 'quay.io/biocontainers/bwa:latest'
  input:
  path reference
  path reads
  
  output:
  path "*.sam"
  
  script:
  """
  bwa mem $reference $reads > aligned.sam
  """
}
EOF

# Run workflow locally with Docker
nextflow run main.nf -with-docker
```

### 5.3. Docker Compose Configuration for Code Server

```yaml
version: '3.8'

services:
  code-server:
    image: codercom/code-server:latest
    container_name: code-server-dev
    ports:
      - "8443:8443"
    environment:
      - PASSWORD=secure_password
      - SUDO_PASSWORD=secure_password
    volumes:
      # Mount Docker socket for DooD
      - /var/run/docker.sock:/var/run/docker.sock
      # Mount workspace
      - ./workspace:/home/coder/project:rw
      - ./data:/data:rw
    restart: unless-stopped
```

## 6. Complete Multi-App Setup with Docker Compose

**Run RStudio, JupyterLab, and Code Server together:**

```yaml
version: '3.8'

services:
  rstudio:
    image: rocker/tidyverse:4.3.0
    container_name: rstudio
    ports:
      - "8787:8787"
    environment:
      - PASSWORD=rstudio_password
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./data:/data:rw
      - ./workspace:/workspace:rw
    restart: unless-stopped

  jupyter:
    image: jupyter/scipy-notebook:latest
    container_name: jupyter
    ports:
      - "8888:8888"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./data:/data:rw
      - ./notebooks:/notebooks:rw
    command: >
      jupyter lab 
      --ip=0.0.0.0 
      --allow-root 
      --no-browser
    restart: unless-stopped

  code-server:
    image: codercom/code-server:latest
    container_name: code-server
    ports:
      - "8443:8443"
    environment:
      - PASSWORD=code_password
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./workspace:/home/coder/project:rw
      - ./data:/data:rw
    restart: unless-stopped

  # Optional: shared data volume container
  data:
    image: alpine:latest
    volumes:
      - ./data:/data:rw
    command: /bin/sh -c "echo 'Data container for shared volumes'"
```

**Run all services:**

```bash
docker-compose up -d

# Access:
# RStudio: http://localhost:8787
# JupyterLab: http://localhost:8888
# Code Server: https://localhost:8443
```

## 7. Important Considerations for DooD

### 7.1. Security Considerations

**File Permissions:**

```bash
#!/bin/bash
# Files created in Docker containers may have root ownership
# Run containers with explicit user mapping

docker run \
  -u $(id -u):$(id -g) \  # Run as host user
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /data:/data \
  ubuntu:22.04 \
  touch /data/file.txt
```

**Docker Daemon Access:**

⚠️ **Warning**: Mounting `/var/run/docker.sock` allows full Docker daemon access. Only do this in:
- Development environments
- Trusted internal systems
- Your own workstation
- Controlled team environments

⚠️ **Do NOT** expose this to untrusted users or the public internet.

### 7.2. Resource Management

**Limit container resources:**

```bash
docker run \
  --cpus 4 \
  --memory 16g \
  -v /var/run/docker.sock:/var/run/docker.sock \
  rocker/tidyverse:latest
```

**In docker-compose:**

```yaml
services:
  rstudio:
    image: rocker/tidyverse:latest
    deploy:
      resources:
        limits:
          cpus: '4'
          memory: 16G
        reservations:
          cpus: '2'
          memory: 8G
```

### 7.3. Volume Management

**Best practices for shared volumes:**

```bash
#!/bin/bash
# Create named volume for data persistence
docker volume create analysis-data

# Mount in multiple containers
docker run -v analysis-data:/data rstudio
docker run -v analysis-data:/data jupyter
docker run -v analysis-data:/data code-server
```

## 8. Troubleshooting

### 8.1. Docker Socket Permission Denied

**Problem:** `Cannot connect to Docker daemon`

**Solution:**

```bash
# Check Docker socket permissions
ls -la /var/run/docker.sock

# Add current user to docker group
sudo usermod -aG docker $USER
newgrp docker

# Or run container with docker group
docker run \
  --group-add $(getent group docker | cut -d: -f3) \
  -v /var/run/docker.sock:/var/run/docker.sock \
  rocker/tidyverse:latest
```

### 8.2. File Permission Issues

**Problem:** Cannot modify files created by Docker containers

**Solution:**

```bash
# Run containers with user/group mapping
docker run \
  -u $(id -u):$(id -g) \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /data:/data \
  rocker/tidyverse:latest
```

### 8.3. Volume Mount Not Visible

**Problem:** Files in mounted volumes aren't visible from web app

**Solution:**

```bash
# Verify volume is mounted
docker inspect rstudio-container | grep Mounts

# Use absolute paths
docker run \
  -v /home/user/data:/data \  # Full path required
  -v /var/run/docker.sock:/var/run/docker.sock \
  rocker/tidyverse:latest
```

## 9. Summary

Docker out of Docker is the ideal approach for running interactive web applications that need to spawn containerized bioinformatics tools. It provides:

✅ **Performance** - No nested daemon overhead

✅ **Simplicity** - Just mount the Docker socket

✅ **Functionality** - Full Docker CLI access from within the web app

✅ **Data Sharing** - Seamless volume access between containers

**Key Points:**
- Mount `/var/run/docker.sock` to enable DooD
- Mount data volumes for file sharing
- Use for RStudio, JupyterLab, Code Server workflows
- Perfect for local development and trusted team environments
- Combine with docker-compose for multi-app setups

Start with the simple examples in this post, and scale up to complex multi-container bioinformatics workflows!

---

**Related Reading:**
- [Containers on HPC: From Docker to Singularity and Apptainer](/blog/containers-hpc-docker-singularity-apptainer)
- [Nextflow Best Practices](https://www.nextflow.io/docs/latest/container.html)
