---
name: blog-agent
description: Create and manage blog posts for the RiverXData documentation site
license: MIT
compatibility: opencode
metadata:
  audience: content-creators
  workflow: documentation
  domain: blogging
---

## What I do

I help you create, manage, and optimize blog posts for the RiverXData documentation site. I can:

- Create new blog posts with proper frontmatter and structure
- Generate blog posts organized by date (YYYY-MM format)
- Ensure consistent formatting and styling across posts
- Add tags, authors, and metadata
- Include cover images following the project conventions
- Validate blog post structure and formatting
- Update and edit existing blog posts

## When to use me

Use this skill when you need to:

- **Create a new blog post** about bioinformatics, data infrastructure, HPC, cloud, pipelines, or related topics
- **Organize blog content** by date and topic
- **Maintain consistency** across all blog posts
- **Add metadata** like tags, authors, and images
- **Generate blog listings** with proper structure
- **Update existing posts** while maintaining formatting standards

## Blog Structure Overview

### Directory Layout
```
blog/
├── 2026-01/
│   ├── 2026-01-08.md
│   ├── 2026-01-09.md
│   └── ...
├── 2026-02/
│   ├── 2026-02-01.md
│   ├── 2026-02-02.md
│   └── ...
└── imgs/
    ├── intro.png
    └── [other images]
```

### Post Naming Convention

Blog posts follow the naming pattern: `YYYY-MM-DD.md`

Example: `2026-02-11.md` for a post created on February 11, 2026.

### Blog Post Frontmatter

Every blog post **must** start with YAML frontmatter:

```yaml
---
slug: unique-post-slug-identifier
title: "Your Blog Post Title"
authors: [river]
tags: [tag1, tag2, tag3]
image: ./imgs/intro.png
---
```

**Frontmatter fields:**
- `slug` (required): Unique URL-safe identifier (lowercase, hyphens only)
- `title` (required): Full post title (use quotes if it contains colons or special chars)
- `authors` (required): Author names as array (currently using `[river]`)
- `tags` (required): Array of relevant tags (e.g., `[nextflow, bash, migration, testing]`)
- `image` (required): Path to cover image (typically `./imgs/intro.png`)

### Existing Tags in the Project

Common tags used across posts:
- **Infrastructure**: `hpc`, `cloud`, `docker`, `nextflow`, `snakemake`
- **Languages**: `bash`, `python`, `r`, `groovy`
- **Bioinformatics**: `bioinformatics`, `genomics`, `variant-calling`, `sequence-analysis`
- **Topics**: `migration`, `testing`, `reproducibility`, `validation`, `machine-learning`, `classification`
- **Technologies**: `nf-test`, `git`, `ci-cd`, `containers`, `enterprise`

## Required Structure in Blog Posts

### 1. Opening Section (Engaging Introduction)
Start with a hook that explains the problem and the solution:
```markdown
Your opening paragraph that explains why this matters.

<!-- truncate -->

This section contains the teaser that appears before the "read more" link.
```

**Important:** Include `<!-- truncate -->` to define where the blog preview ends.

### 2. Heading Numbering Convention
All main sections and subsections should use numbered prefixes with hierarchical dot notation:

**Level 2 headings (##):** Use format `1`, `2`, `3`, etc.
```markdown
## 1. First Main Section
## 2. Second Main Section
## 3. Third Main Section
```

**Level 3 subheadings (###):** Use format `1.1`, `1.2`, `1.3` (nested under the parent section number)
```markdown
## 1. Main Section
### 1.1. First Subsection
### 1.2. Second Subsection
### 1.3. Third Subsection

## 2. Another Main Section
### 2.1. Another Subsection
```

**Level 4 subheadings (####):** Use format `1.1.1`, `1.1.2`, etc. (further nested)
```markdown
## 1. Main Section
### 1.1. Subsection
#### 1.1.1. Sub-subsection
#### 1.1.2. Another Sub-subsection
```

**Example structure:**
```markdown
## 1. Getting Started
### 1.1. Prerequisites
### 1.2. Installation

## 2. Configuration
### 2.1. Basic Setup
### 2.2. Advanced Options
#### 2.2.1. Option A
#### 2.2.2. Option B

## 3. Usage Examples
### 3.1. Simple Example
### 3.2. Complex Example
```

### 3. Main Sections
- Use clear, descriptive headings with numbered prefixes (see Heading Numbering Convention above)
- Break content into logical sections
- Include code examples with proper syntax highlighting
- Add tables, diagrams, or lists for complex information

### 4. Code Blocks
Use language-specific syntax highlighting:

```python
# Python example
def example():
    return "hello"
```

```bash
#!/bin/bash
# Bash example
echo "hello"
```

```groovy
// Groovy example (for Nextflow)
process EXAMPLE {
    script:
    """
    echo 'hello'
    """
}
```

### 4. Images
Place images in the `blog/imgs/` directory and reference them:
```markdown
![Alt text for accessibility](./imgs/your-image.png)
```

## Step-by-Step: Creating a New Blog Post

### Step 1: Choose Date and Create File
1. Use today's date in format `YYYY-MM-DD.md`
2. Place in appropriate month folder: `blog/YYYY-MM/YYYY-MM-DD.md`
3. Create the folder if it doesn't exist

### Step 2: Write Frontmatter
```yaml
---
slug: your-unique-slug
title: "Your Post Title Here"
authors: [river]
tags: [tag1, tag2, tag3]
image: ./imgs/intro.png
---
```

### Step 3: Write Introduction
```markdown
Start with an engaging paragraph explaining the problem or topic.

<!-- truncate -->

Add more introduction or context here.
```

### Step 4: Add Main Content
- Use clear section headings
- Include code examples
- Add relevant references
- Keep paragraphs focused

### Step 5: Add Summary or Conclusion
End with key takeaways or next steps.

## Code Example Formats

### Python
```python
import numpy as np

# Initialize data
data = np.array([1, 2, 3])
print(data)
```

### Bash
```bash
#!/bin/bash
set -euo pipefail

# Process data
echo "Processing..."
```

### Nextflow
```groovy
process MY_PROCESS {
    input:
    val(data)
    
    output:
    path("result.txt")
    
    script:
    """
    echo "${data}" > result.txt
    """
}
```

### R
```r
# R example
data <- c(1, 2, 3)
mean(data)
```

### YAML/Configuration
```yaml
# Configuration example
config:
  setting1: value1
  setting2: value2
```

### SQL
```sql
SELECT * FROM table WHERE condition = true;
```

## Markdown Tips for Posts

### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

### Emphasis
```markdown
**bold text** for important terms
*italic text* for emphasis
`code snippets` for inline code
```

### Lists
```markdown
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3

1. First step
2. Second step
3. Third step
```

### Blockquotes
```markdown
> This is important information
> that stands out from the main text
```

### Links
```markdown
[Link text](https://example.com)
[Internal link](/docs/path)
```

## Project-Specific Guidelines

### Topics to Cover
The RiverXData blog focuses on:
- Bioinformatics data infrastructure
- Nextflow workflow management
- Cloud and HPC solutions
- Data pipeline migration and validation
- Machine learning in bioinformatics
- Best practices for reproducibility

### Audience
Posts should be accessible to:
- Bioinformaticians
- Data scientists
- System administrators
- Researchers looking to improve their pipelines

### Writing Style
- Technical but accessible
- Use concrete examples
- Include code walkthroughs
- Explain the "why" not just the "how"
- Reference real-world use cases

## Validation Checklist

Before finalizing a blog post, verify:

- [ ] File is named `YYYY-MM-DD.md`
- [ ] File is in `blog/YYYY-MM/` directory
- [ ] Frontmatter has all required fields: `slug`, `title`, `authors`, `tags`, `image`
- [ ] `slug` is unique and URL-safe (lowercase, hyphens only)
- [ ] `authors` array includes at least one author (e.g., `[river]`)
- [ ] `tags` array has 2-8 relevant tags
- [ ] `image` path points to an existing image (usually `./imgs/intro.png`)
- [ ] Post includes `<!-- truncate -->` marker
- [ ] All code blocks have language specified
- [ ] Images have alt text
- [ ] Links are formatted correctly
- [ ] Tables are properly formatted
- [ ] Post has clear structure with H2 headings
- [ ] Grammar and spelling are correct
- [ ] No broken links or references

## Examples from the Repository

### Example 1: Technical Deep Dive
File: `blog/2026-02/2026-02-01.md`
- Topic: Pipeline migration from Bash to Nextflow
- Contains: Multiple code examples, validation frameworks, step-by-step guides
- Tags: `[nextflow, bash, migration, testing, validation]`

### Example 2: Educational Series
File: `blog/2026-02/2026-02-04.md`
- Topic: Machine learning in bioinformatics
- Contains: Code walkthroughs, confusion matrices, evaluation metrics
- Tags: `[machine-learning, bioinformatics, classification]`

Both follow the same frontmatter structure and blog conventions used across the site.

## Common Questions

**Q: Can I use custom image paths?**
A: Yes, but place images in `blog/imgs/` and reference relative to the post file.

**Q: How many tags should I use?**
A: Typically 3-8 tags. Use existing tags when possible for consistency.

**Q: Can I change the author?**
A: Yes, modify the `authors` array. Keep the format as a YAML list.

**Q: What if I want to update a post?**
A: Edit the `.md` file directly. Keep the same filename (date) unless moving to a different date.

**Q: Can I preview before publishing?**
A: Yes, run `npm run build` to generate the site locally, then `npm run serve`.

## Quick Reference

```markdown
---
slug: your-slug-here
title: "Your Title Here"
authors: [river]
tags: [tag1, tag2, tag3]
image: ./imgs/intro.png
---

Your opening hook explaining the problem.

<!-- truncate -->

## 1. Introduction Section

More detailed introduction here.

### 1.1. First Subsection

Content and details here.

### 1.2. Second Subsection

More content with code examples.

## 2. Main Section

Content with code examples.

### 2.1. Subsection

Details here.

## 3. Summary

Key takeaways.
```

---

**Need help?** Ask me to:
- Create a new blog post
- Help with formatting or structure
- Add code examples
- Organize existing content
- Update post metadata
