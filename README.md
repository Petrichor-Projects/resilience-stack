# Resilience Stack

**18 strategy frameworks for positioning that holds under pressure.**

Curated by [Petrichor Projects](https://petrichorgrowth.com). Built from our workshop catalog. Each skill = 50+ hours of framework engineering, packaged as a Claude Code skill you can run in 2.5 hours.

Not comprehensive. Curated. No filler.

---

## Quick Install

```bash
git clone https://github.com/Petrichor-Projects/resilience-stack
cd resilience-stack
./install.sh
```

Or install one skill from the inspected checkout:

```bash
node bin/resilience-stack.js add positioning-under-pressure
```

The npm package has not been published yet. Do not run the unscoped `npx resilience-stack` command. The installers above copy only the files in the checkout and make no network requests.

Skills run inside [Claude Code](https://claude.com/claude-code) or the [Claude Agent SDK](https://docs.claude.com). Bring your own API key — nothing phones home.

---

## ⭐ Polished Kits

These skills ship with the full Resilience Stack toolkit: 3 eval cases, worked example, anonymized case study, scoring rubric, board-brief formatter, 5-min video walkthrough, quiz lead magnet, founder long-form essay, and launch copy bundle.

| Kit | Skill | Status | Quiz | Video | Essay |
|-----|-------|--------|------|-------|-------|
| 1 | [⭐ relevancy-audit](skills/positioning/relevancy-audit) | Week 1 (2026-05-19) | [marketing](marketing/quizzes/relevancy-audit.md) | [shot list](marketing/videos/relevancy-audit.md) | [essay](marketing/essays/relevancy-audit.md) |
| 2 | [⭐ revenue-story-audit](skills/growth/revenue-story-audit) | Week 2 (2026-05-26) | [marketing](marketing/quizzes/revenue-story-audit.md) | [shot list](marketing/videos/revenue-story-audit.md) | [essay](marketing/essays/revenue-story-audit.md) |
| 3 | [⭐ competitive-narrative-stress-test](skills/positioning/competitive-narrative-stress-test) | Week 3 (2026-06-02) | [marketing](marketing/quizzes/competitive-narrative-stress-test.md) | [shot list](marketing/videos/competitive-narrative-stress-test.md) | [essay](marketing/essays/competitive-narrative-stress-test.md) |
| 4 | [⭐ pricing-authority-diagnostic](skills/growth/pricing-authority-diagnostic) | Week 4 (2026-06-09) | [marketing](marketing/quizzes/pricing-authority-diagnostic.md) | [shot list](marketing/videos/pricing-authority-diagnostic.md) | [essay](marketing/essays/pricing-authority-diagnostic.md) |
| 5 | [⭐ investor-story-forensics](skills/investor/investor-story-forensics) | Week 5 (2026-06-16) + HN | [marketing](marketing/quizzes/investor-story-forensics.md) | [shot list](marketing/videos/investor-story-forensics.md) | [essay](marketing/essays/investor-story-forensics.md) |

[Read the manifesto](docs/manifesto.md) · [v1.5 roadmap](ROADMAP.md) · [CHANGELOG](CHANGELOG.md)

---

## The 18 Frameworks

### Positioning (Tier 1)
| Skill | Framework | Core Question |
|-------|-----------|---------------|
| [relevancy-audit](skills/positioning/relevancy-audit) | Relevancy Decay Model | Is your positioning still relevant — or solving yesterday's problem? |
| [positioning-under-pressure](skills/positioning/positioning-under-pressure) | Pressure Test Protocol | When the market shifts, does positioning hold or crack? |
| [competitive-narrative-stress-test](skills/positioning/competitive-narrative-stress-test) | Narrative Attack Surface | Can your competitive story survive scrutiny? |

### Diagnostic (Tier 1)
| Skill | Framework | Core Question |
|-------|-----------|---------------|
| [reality-audit](skills/diagnostic/reality-audit) | Reality Audit | What's actually true vs what the team believes? |

### Brand Infrastructure (Tier 2)
| Skill | Framework | Core Question |
|-------|-----------|---------------|
| [false-familiarity](skills/brand/false-familiarity) | Familiarity Trap Map | Does the market know you, or just recognize you? |
| [brand-as-memory-system](skills/brand/brand-as-memory-system) | Brand Memory Architecture | How does your brand actually live in minds? |
| [legacy-brand-relevance-reset](skills/brand/legacy-brand-relevance-reset) | Heritage-Innovation Bridge | When does heritage become a constraint? |
| [brand-permission-boundaries](skills/brand/brand-permission-boundaries) | Permission Frontier Map | What is the market willing to let you become? |

### Growth Architecture (Tier 1-2)
| Skill | Framework | Core Question |
|-------|-----------|---------------|
| [revenue-story-audit](skills/growth/revenue-story-audit) | Revenue Narrative Gap | Does your revenue story match your mechanics? |
| [pricing-authority-diagnostic](skills/growth/pricing-authority-diagnostic) | Price-Value Integrity Map | Do prices signal authority or fit a spreadsheet? |

### Market Definition (Tier 2)
| Skill | Framework | Core Question |
|-------|-----------|---------------|
| [category-creation-pressure-test](skills/market-definition/category-creation-pressure-test) | Category Viability Matrix | Are you creating a category or claiming one? |
| [tam-lie-detector](skills/market-definition/tam-lie-detector) | TAM Lie Detector | Is your TAM real or rounded up? |

### Market Intelligence (Tier 2-3)
| Skill | Framework | Core Question |
|-------|-----------|---------------|
| [competitive-blind-spot-mapping](skills/intelligence/competitive-blind-spot-mapping) | Blind Spot Taxonomy | What don't you see that competitors see? |
| [signal-vs-noise-audit](skills/intelligence/signal-vs-noise-audit) | Signal Integrity Framework | Which market signals deserve a response? |
| [customer-truth-extraction](skills/intelligence/customer-truth-extraction) | Customer Belief Audit | What do customers actually believe vs what you think? |

### Investor & Stakeholder (Tier 3)
| Skill | Framework | Core Question |
|-------|-----------|---------------|
| [investor-story-forensics](skills/investor/investor-story-forensics) | Narrative Due Diligence Protocol | Does your investor story survive forensic exam? |
| [board-narrative-alignment](skills/investor/board-narrative-alignment) | Board-Market Coherence Test | Is your board hearing the same story your market is? |
| [exit-narrative-architecture](skills/investor/exit-narrative-architecture) | Acquirer's Lens Protocol | Does your story survive acquirer scrutiny? |

---

## How To Run A Skill

Inside Claude Code:

```
> /skill positioning-under-pressure
```

Or invoke directly via the `Skill` tool with `skill: "positioning-under-pressure"`.

Each skill is an interactive facilitator. It runs the workshop phase-by-phase, asks pressure-test questions, scores responses, writes deliverables to `./<skill-name>-output/`.

Typical session: 2-3 hours. Output: 5 deliverables per workshop.

---

## Meta-Skills

| Skill | Use when |
|---|---|
| [skill-compass](meta-skills/skill-compass/skill-compass.md) | You need to choose the right Resilience Stack skill before starting. |
| [skill-creator](meta-skills/skill-creator/skill-creator.md) | You are authoring or accepting a new strategy diagnostic skill. |
| [interface-hardening](meta-skills/interface-hardening/interface-hardening.md) | You need to harden a UI surface, form, workflow, dashboard, or API-bound interface against production edge cases. |

---

## What You Need First

Each skill lists pre-work in its `PHASE 1`. Common requirements:

- 4 quarters of revenue data (segment, channel, cohort)
- Win/loss interview transcripts
- Customer survey verbatims
- Current positioning statement / pitch deck / board deck
- Competitor narratives (verbatim from sites + decks)

Skills will refuse to run on speculation. They demand evidence.

---

## Roadmap

- **v1** (now): 18 facilitator skills
- **v1.5** (60 days): scoring rubrics, executive summary generators, deliverable formatters
- **v2** (120 days): industry variants (SaaS / DTC / B2B Services), meta-selector skill, CLI runner

---

## Contributing

PRs welcome. Strict template. See [CONTRIBUTING.md](CONTRIBUTING.md).

The bar: each skill must include framework, core question, 8-9 segments, 5 deliverables, adversarial facilitation rules. Generic frameworks rejected. PRs that don't match the template auto-close.

---

## License

[CC-BY 4.0](LICENSE). Free to use, modify, distribute — including commercially. Attribution required: credit **Petrichor Projects** with a link to https://petrichorgrowth.com.

---

## Why This Exists

Strategy advice on the internet is mostly platitudes. Real strategy work is adversarial — pressure tests, forensic audits, evidence demands. These 18 frameworks are what Petrichor runs for paying clients.

Open-sourced because reputation engineering is a network effect. The frameworks travel. The credit travels with them.

If you want the full workshop run by a Petrichor partner, scoring rubrics, slide deck, and post-workshop reports — see [petrichorgrowth.com/stack](https://petrichorgrowth.com/stack).
