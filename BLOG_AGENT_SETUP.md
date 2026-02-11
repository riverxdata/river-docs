# Blog Agent Skill Setup Guide

## Overview

The **Blog Agent skill** has been successfully created for the RiverXData documentation project. This skill enables OpenCode to intelligently create, manage, and optimize blog posts while maintaining consistency across the entire blog.

## What Has Been Set Up

### Skill Location
```
.opencode/skills/blog-agent/SKILL.md
```

### Skill Details
- **Name**: `blog-agent`
- **Description**: Create and manage blog posts for the RiverXData documentation site
- **Compatibility**: OpenCode
- **License**: MIT

## Blog Structure Reference

### Directory Organization
```
blog/
├── 2026-01/                    # January 2026 posts
│   ├── 2026-01-08.md
│   ├── 2026-01-09.md
│   └── ...
├── 2026-02/                    # February 2026 posts
│   ├── 2026-02-01.md           # Example: Deep migration guide
│   ├── 2026-02-04.md           # Example: ML education series
│   └── ...
└── imgs/                        # Shared images
    ├── intro.png               # Common cover image
    └── [other images]
```

### File Naming Convention
- Pattern: `YYYY-MM-DD.md`
- Example: `blog/2026-02/2026-02-11.md`
- Each file should be placed in the corresponding month folder

## Required Blog Post Format

### Frontmatter (YAML)
Every blog post must start with:
```yaml
---
slug: unique-slug-identifier
title: "Your Blog Post Title"
authors: [river]
tags: [tag1, tag2, tag3]
image: ./imgs/intro.png
---
```

**Field Descriptions:**
- `slug`: URL-safe identifier (lowercase, hyphens only, unique)
- `title`: Full post title (use quotes if it contains colons)
- `authors`: Author names as YAML array (e.g., `[river]`)
- `tags`: Relevant topic tags (3-8 tags recommended)
- `image`: Path to cover image (relative to post file)

### Content Structure
1. **Opening Hook** (engaging problem/solution statement)
2. **`<!-- truncate -->` marker** (defines preview cutoff)
3. **Main Content** (sections with H2/H3 headings)
4. **Code Examples** (with language-specific syntax highlighting)
5. **Summary** (key takeaways or next steps)

## Available Tags (By Category)

### Infrastructure & Deployment
- `hpc` - High-performance computing
- `cloud` - Cloud computing platforms
- `docker` - Docker containerization
- `containers` - Container technology
- `nextflow` - Nextflow workflow engine
- `snakemake` - Snakemake workflow engine
- `ci-cd` - Continuous integration/deployment

### Programming Languages
- `bash` - Bash scripting
- `python` - Python programming
- `r` - R language
- `groovy` - Groovy (for Nextflow)
- `javascript` - JavaScript
- `java` - Java

### Bioinformatics Topics
- `bioinformatics` - Bioinformatics field
- `genomics` - Genomics and sequencing
- `variant-calling` - Variant calling analysis
- `sequence-analysis` - Sequence analysis
- `machine-learning` - Machine learning applications
- `classification` - Classification algorithms
- `reproducibility` - Reproducible science
- `validation` - Data validation

### Technical Practices
- `migration` - Pipeline/code migration
- `testing` - Software testing
- `nf-test` - Nextflow testing framework
- `git` - Version control
- `enterprise` - Enterprise solutions
- `md5` - MD5 checksums/validation

## How to Use the Skill

### In OpenCode TUI/CLI

1. **Start OpenCode in the project directory:**
   ```bash
   cd /path/to/river-docs
   opencode
   ```

2. **Load the blog agent skill:**
   Ask OpenCode to use the skill by mentioning blog-related tasks:
   ```
   /skill blog-agent
   ```
   Or simply ask:
   ```
   Create a new blog post about Nextflow best practices
   ```

3. **OpenCode will now:**
   - Create files in the correct directory structure
   - Add proper frontmatter with slugs and tags
   - Organize content by date (YYYY-MM-DD)
   - Ensure formatting consistency
   - Include code examples with proper syntax highlighting

## Example Usage Scenarios

### Scenario 1: Create a New Blog Post
```
User: Create a new blog post about containerizing bioinformatics workflows.
      Make it technical but accessible to bioinformaticians. Include Nextflow examples.

OpenCode will:
- Create blog/2026-02/2026-02-11.md (or appropriate date)
- Add frontmatter with slug, title, authors, tags
- Structure with introduction → sections → code examples → summary
- Include proper markdown formatting and code blocks
```

### Scenario 2: Update Existing Post Metadata
```
User: The post at blog/2026-02/2026-02-01.md needs more descriptive tags.
      Add tags for: reproducibility, testing, validation

OpenCode will:
- Update the frontmatter tags array
- Maintain all other content unchanged
- Ensure tag consistency
```

### Scenario 3: Create a Multi-Part Series
```
User: Create a 3-part blog series on machine learning in bioinformatics.
      Part 1: Classification basics and evaluation
      Part 2: Building classifiers from scratch
      Part 3: Real-world applications

OpenCode will:
- Create three separate posts (one per date)
- Use consistent formatting and structure
- Apply appropriate tags across all posts
- Create logical progression in content
```

## Project-Specific Guidelines

### Audience
Target bioinformaticians, data scientists, and researchers who want to:
- Improve their data pipelines
- Learn workflow management tools
- Understand best practices
- Apply ML/AI to biological data

### Writing Style
- **Technical but accessible** - Explain concepts clearly
- **Code-heavy** - Include concrete examples and walkthroughs
- **Real-world focused** - Show practical applications
- **Problem-solution oriented** - Explain the "why"

### Content Themes
The RiverXData blog covers:
1. Bioinformatics infrastructure and tools
2. Workflow management (Nextflow, Snakemake)
3. Cloud and HPC deployment
4. Data pipeline migration and validation
5. Machine learning applications
6. Best practices and reproducibility

## Blog Post Validation Checklist

Before asking OpenCode to finalize a post, verify:

- [ ] Filename: `YYYY-MM-DD.md` format
- [ ] Location: `blog/YYYY-MM/` directory
- [ ] Frontmatter fields: `slug`, `title`, `authors`, `tags`, `image`
- [ ] Slug format: lowercase, hyphens, unique (e.g., `ml-classification-guide`)
- [ ] Authors format: YAML array (e.g., `[river]`)
- [ ] Tags: 3-8 relevant tags from available list
- [ ] Image path: Points to existing image (usually `./imgs/intro.png`)
- [ ] Truncate marker: `<!-- truncate -->` included
- [ ] Code blocks: All have language specified (python, bash, groovy, etc.)
- [ ] Images: Have descriptive alt text
- [ ] Structure: Clear H2 headings, logical flow
- [ ] Links: All properly formatted and working
- [ ] Grammar: Spell-checked and reviewed

## Common Commands with the Skill

### Create a Post
```
/skill blog-agent
Create a new blog post about Docker containers in bioinformatics
```

### Manage Existing Posts
```
/skill blog-agent
Update the tags in blog/2026-02/2026-02-01.md to include: [migration, testing, nf-test]
```

### List Blog Posts
```
/skill blog-agent
Show me all blog posts with the 'nextflow' tag
```

### Generate Content
```
/skill blog-agent
Create an introduction section for a post about Nextflow modules
```

## Tips for Best Results

1. **Be Specific**: Describe the blog post topic, audience, and key points you want to cover

2. **Reference Examples**: Point OpenCode to existing posts if you want similar structure
   ```
   Create a post similar in style to blog/2026-02/2026-02-01.md but about [topic]
   ```

3. **Provide Context**: Share images or references for visual content
   ```
   Create a post with this design pattern: [image]
   ```

4. **Iterate**: Ask OpenCode to refine sections or add more code examples
   ```
   The code example section is too brief. Add more detailed walkthroughs.
   ```

5. **Request Specific Sections**: Ask for particular types of content
   ```
   Add a confusion matrix table and evaluation metrics section
   ```

## Troubleshooting

### Issue: Skill Not Loading
**Solution**: Verify the skill file structure:
- Location: `.opencode/skills/blog-agent/SKILL.md`
- Filename must be exactly `SKILL.md` (all caps)
- Frontmatter must include `name` and `description`

### Issue: Posts Not Following Format
**Solution**: Ask OpenCode to validate:
```
Review this blog post and ensure it follows the RiverXData blog format
```

### Issue: Tags Not Recognized
**Solution**: Use the predefined tag list. Ask OpenCode for current tags:
```
What tags are currently used in the RiverXData blog?
```

## Next Steps

1. **Integrate with Workflow**: Add skill loading to your development workflow
2. **Create Blog Posts**: Use the skill to generate blog content regularly
3. **Maintain Consistency**: Reference existing posts when creating new ones
4. **Expand Tags**: Add new tags as your content grows
5. **Automate Publishing**: Consider CI/CD integration for blog deployment

## References

- Blog directory: `blog/`
- Docusaurus config: `docusaurus.config.ts`
- OpenCode skills documentation: https://opencode.ai/docs/skills
- Project repository: https://github.com/riverxdata/river-docs

---

**Ready to create blog posts?** Start using the skill in OpenCode with:
```
/skill blog-agent
```

Then ask it to create your first blog post!
