# LinkedIn Posts for Blog Series

## Post: Testing GitHub Actions Locally with act
**For Blog**: Running GitHub Actions Locally with act: 5x Faster Development
**URL**: Will be published at https://river.engineering/docs/cicd-bioinformatics-act-local-github-action

---

You push your workflow to GitHub.

Wait 5 minutes.

Fails.

Fix it. Push again.

More waiting.

Repeat 5 times.

**You've lost an hour.**

/1

This is the real cost of GitHub Actions.

Most developers test CI/CD the hard way: write → push → wait → fail → fix → repeat.

It's painful.

/2

There's a better way: **`act`**.

It runs your GitHub Actions workflows locally on your machine in 10-30 seconds.

Not 5 minutes. Seconds.

/3

Here's what changes:

**Before `act`:**
Write workflow → Push → Wait 5 min → Fails → Fix → Push

**With `act`:**
Write workflow → Run locally → Instant feedback → Debug → Iterate

/4

Feedback loop: 30+ minutes vs 5 minutes.

**6-7x faster.**

For 10 iterations? You save 48 minutes.

/5

But speed isn't the real win.

The real win: **you catch bugs before they leave your machine.**

Not on GitHub. Not in production.

Locally.

/6

Some workflows run in seconds locally but take minutes on GitHub.
Some Docker images need rebuilds you didn't anticipate.
Some secrets work differently than expected.

**`act` finds these before you push.**

/7

The setup is three commands:

```bash
pixi global install act
docker --version
act push
```

That's it.

/8

Now you have confidence.

Not "I hope it works on GitHub."

**You know it works before it leaves your machine.**

/9

Here's what teams do wrong:

They treat CI/CD as a black box. Push and pray. Let GitHub tell them if something broke.

But workflows aren't magic.

They're reproducible. Testable. **Local-friendly.**

/10

Use defaults—but don't worship them.

The default Docker image? Large, slow.
The default runner? Works, but takes forever.

Ask yourself: *Can I test this locally first?*

The answer is usually yes.

/11

Your workflow is just a recipe.

Docker, Python, bash—all local things.

`act` runs that recipe locally instead of in the cloud.

Nothing magic. Nothing mysterious.

You understand exactly what happens.

/12

Bioinformatics workflows are complex.

50+ steps. Multiple validations. Different Python versions.

You can't afford to wait 5 minutes per iteration.

With `act`, you iterate in seconds.

/13

This isn't about speed.

This isn't about saving minutes (though you will).

**It's about confidence.**

Knowing your workflow will work when colleagues use it.
Knowing bugs are caught on your machine, not in production.

/14

CI/CD isn't a black box.
Workflows aren't mysterious.
Testing isn't optional.

Use `act`. Test locally. Iterate fast. Push confident code.

This is how production teams actually work.

/15

Read the full guide on setting up `act`, optimizing Docker images, and running bioinformatics pipelines locally: [blog link]

Subscribe for more bioinformatics engineering patterns.

---
