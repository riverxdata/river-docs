# Blog Agent Skill - Quick Start Guide

## Setup Complete ✅

The **blog-agent** skill is now available in your OpenCode configuration.

## Location
```
.opencode/skills/blog-agent/SKILL.md
```

## Use the Skill

In OpenCode, load the skill:
```
/skill blog-agent
```

Or ask directly:
```
Create a new blog post about [topic]
```

## Key Facts

| Item               | Details                                 |
| ------------------ | --------------------------------------- |
| **Blog Directory** | `blog/YYYY-MM/`                         |
| **File Pattern**   | `YYYY-MM-DD.md` (e.g., `2026-02-11.md`) |
| **Cover Image**    | `./imgs/intro.png`                      |
| **Current Posts**  | 20+ posts from 2026-01 to 2026-02       |

## Required Frontmatter

```yaml
---
slug: unique-url-safe-slug
title: "Your Blog Post Title"
authors: [river]
tags: [tag1, tag2, tag3]
image: ./imgs/intro.png
---
```

## Content Template

```markdown
---
slug: your-slug
title: "Your Title"
authors: [river]
tags: [tag1, tag2, tag3]
image: ./imgs/intro.png
---

Opening paragraph with hook explaining the problem.

<!-- truncate -->

## Section 1

Content here with examples.

## Section 2

More content...

## Summary

Key takeaways.
```

## Popular Tags

- **Infrastructure**: `hpc`, `cloud`, `docker`, `nextflow`, `snakemake`
- **Languages**: `bash`, `python`, `r`, `groovy`
- **Topics**: `bioinformatics`, `machine-learning`, `testing`, `reproducibility`
- **Tools**: `nf-test`, `git`, `ci-cd`

## Example Posts

See existing posts for reference:
- **Migration Guide**: `blog/2026-02/2026-02-01.md` (Bash → Nextflow)
- **ML Series**: `blog/2026-02/2026-02-04.md` (Classification & evaluation)

## Quick Commands

```bash
# View the blog directory
ls blog/2026-02/

# Check existing tags
grep "tags:" blog/**/*.md

# Count posts
find blog -name "*.md" | wc -l

# View a recent post
cat blog/2026-02/2026-02-11.md
```

## Next Steps

1. Open OpenCode: `opencode`
2. Load the skill: `/skill blog-agent`
3. Create a post: `Create a new blog post about [your-topic]`
4. The skill will handle:
   - ✅ File creation with correct date/location
   - ✅ Proper frontmatter generation
   - ✅ Content structure and formatting
   - ✅ Code syntax highlighting
   - ✅ Image integration
   - ✅ Tag consistency

## Need Help?

Check `BLOG_AGENT_SETUP.md` for detailed guidance on:
- Complete blog format specifications
- All available tags by category
- Example usage scenarios
- Validation checklist
- Troubleshooting

---

**Happy blogging!** The skill is ready to help you create great content for RiverXData. 🚀
