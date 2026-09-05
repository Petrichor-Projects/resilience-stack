# Resilience Stack v1.5 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship Resilience Stack v1.5 — 5 priority skill kits at world-class depth, plus foundational brand assets (manifesto, skill-creator, trajectory spec), across a 6-week rolling launch ending in HN Show HN.

**Architecture:** Skill-by-skill vertical polish. Each priority skill ships with 10 artifacts (skill md, 3 evals, worked example, case study, scoring rubric, board-brief formatter, video walkthrough, quiz lead magnet, founder essay, launch copy). 13 long-tail skills stay at v1.2. Week 0 = foundational artifacts + soft repo release. Weeks 1-5 = one kit shipped per Monday. Week 5 = HN launch.

**Tech Stack:** Markdown (skills, essays, case studies), YAML (eval cases), Python (patcher scripts), reportlab (PDF outputs from scoring rubrics), Loom (video), Tally (quiz forms), Beehiiv (email capture from quizzes), git/GitHub (versioning + launch).

**Sole owner:** Philipp Rimmler. Solo execution with Claude assistance.

---

## File Structure

### Created in this plan

```
docs/
├── manifesto.md                                       # NEW Week 0
├── trajectory-logging-spec.md                         # NEW Week 0
└── superpowers/plans/2026-05-12-resilience-stack-v1.5.md  # this file

meta-skills/skill-creator/
├── skill-creator.md                                   # NEW Week 0
└── templates/
    ├── skill-template.md                              # NEW Week 0
    └── frontmatter-template.yaml                      # NEW Week 0

marketing/                                             # NEW dir (Week 0)
├── README.md
├── launch-templates/
│   ├── _template.md                                   # base template
│   ├── relevancy-audit.md                             # Week 1
│   ├── revenue-story-audit.md                         # Week 2
│   ├── competitive-narrative-stress-test.md           # Week 3
│   ├── pricing-authority-diagnostic.md                # Week 4
│   └── investor-story-forensics.md                    # Week 5
├── quizzes/
│   ├── _template.md                                   # 5-question quiz spec template
│   └── <skill>.md                                     # 5 quiz specs, weekly
├── videos/
│   ├── _shot-list.md                                  # reusable 6-shot template
│   └── <skill>.md                                     # 5 shot lists + Loom URLs
└── essays/
    ├── _template.md                                   # essay structure template
    └── <skill>.md                                     # 5 essay drafts, weekly

skills/<track>/<skill>/scoring/<skill>-rubric.md       # NEW per kit (×5)
skills/<track>/<skill>/formatters/board-brief.md       # NEW per kit (×5)

evals/<skill>/case-01-baseline.yaml                    # NEW per kit (×5, relevancy-audit exists)
evals/<skill>/case-02-when-not-to-use.yaml             # ditto
evals/<skill>/case-03-adversarial.yaml                 # ditto

examples/<skill>/input.md                              # NEW per kit (relevancy-audit exists)
examples/<skill>/trajectory.md                         # NEW per kit
examples/<skill>/deliverable-1.md ... deliverable-5.md # NEW per kit
examples/<skill>/post-engagement-notes.md              # NEW per kit

case-studies/<skill>/case-01-<slug>.md                 # NEW per kit (relevancy-audit exists)

CHANGELOG.md                                           # MODIFY each week
README.md                                              # MODIFY end of v1.5 (kit links + badges)
ROADMAP.md                                             # MODIFY end of v1.5
```

### Modified in this plan

- `README.md` — add "Polished Kits" badges + links as kits ship
- `CHANGELOG.md` — entry per kit + entry for foundational artifacts

---

## Phase 0 — Foundational Artifacts (Week 0, ~16 hours)

### Task 0.1 — Manifesto

**Files:**
- Create: `docs/manifesto.md`

- [ ] **Step 1: Write essay outline in a new file**

```markdown
# Why Frameworks Decay (And What To Do About It)

## Intent
A 3000-word founder essay anchoring Petrichor's view: strategy frameworks are not timeless wisdom — they decay against shifting markets, and the discipline of *refreshing* them is the actual moat.

## Outline
1. Hook — A famous framework that quietly stopped working (specific example)
2. The decay mechanism — why all frameworks decay
3. The three stages of framework decay (Drift → Disconnect → Displacement)
4. Why most consultants miss this
5. What Petrichor does differently
6. The Resilience Stack as the operational answer
7. Call to action — try one skill from the stack
```

- [ ] **Step 2: Expand outline into 3000-word draft**

Write each section. Aim for direct, evidence-driven, no-hedging voice (Petrichor brand). Pull 3 concrete examples (one for each decay stage). Cite Anthropic skills + Google SkillOS papers in footnotes.

- [ ] **Step 3: Self-review against Petrichor `boundaries.md`**

Check: no comment-bait, no fake urgency, no auto-reply mechanics. Em-dashes OK in essays but NOT in any future legal documents.

- [ ] **Step 4: Commit**

```bash
git add docs/manifesto.md
git commit -m "feat: add v1.5 manifesto — Why Frameworks Decay"
```

---

### Task 0.2 — Skill Creator Meta-Skill

**Files:**
- Create: `meta-skills/skill-creator/skill-creator.md`
- Create: `meta-skills/skill-creator/templates/skill-template.md`
- Create: `meta-skills/skill-creator/templates/frontmatter-template.yaml`

- [ ] **Step 1: Write `skill-creator.md` frontmatter + body**

```markdown
---
name: skill-creator
description: Walk a contributor through building a new Resilience Stack skill from scratch — interview their proprietary framework, generate the skill markdown, eval cases, worked example, and case study scaffold. Use when an external contributor or Petrichor partner wants to add a skill.
version: 1.0.0
track: meta
tier: 0
duration_hours: 2.0
prerequisites: []
composable_with: [skill-compass]
outputs:
  - new-skill-markdown
  - frontmatter-yaml
  - three-eval-cases
  - worked-example-scaffold
  - case-study-scaffold
license: CC-BY-4.0
author: Petrichor Projects
source_url: https://petrichorgrowth.com
---

# Skill Creator — New Skill Bootstrapping

You are the Resilience Stack Skill Creator. You interview a strategist or framework author, extract their proprietary diagnostic framework, and produce a complete v1.0 skill kit scaffold matching the Resilience Stack spec.

**Persona**: Patient extractor. You do not invent frameworks. You surface what the contributor already knows. You distill jargon into actionable skill protocol.

**Core question**: "What is the framework, what does it diagnose, and what 5 deliverables does it produce?"

## When NOT to use

- Contributor has not yet run the framework on at least 3 engagements — the skill needs real signal.
- Framework is generic (e.g., "SWOT", "Porter's Five Forces") — rejected per CONTRIBUTING.md.
- Contributor is not authorized to release IP under CC BY 4.0.

## FACILITATION PROTOCOL

[6-segment interview: framework name, core question, attack vectors, deliverables, when NOT to use, evidence requirements]

## Output

Produces:
- `skills/<track>/<skill>/<skill>.md` from `templates/skill-template.md`
- `evals/<skill>/case-01-baseline.yaml` scaffold
- `evals/<skill>/case-02-when-not-to-use.yaml` scaffold
- `evals/<skill>/case-03-adversarial.yaml` scaffold
- `examples/<skill>/input.md` scaffold
- `case-studies/<skill>/case-01-template.md` scaffold

[full segment-by-segment interview script — 8 segments, time-boxed]

## Facilitation Rules

- Never invent framework content. Surface contributor's own language.
- Reject frameworks without 3+ real engagements behind them.
- All output must pass `.github/workflows/validate-skill.yml` validation before commit.
```

- [ ] **Step 2: Write `skill-template.md`**

Copy `skills/positioning/positioning-under-pressure/positioning-under-pressure.md` structure with all content replaced by `{{placeholder}}` markers. Document each placeholder inline.

- [ ] **Step 3: Write `frontmatter-template.yaml`**

```yaml
name: <kebab-case-skill-name>
description: <one-sentence what + when for BM25>
version: 1.0.0
track: <positioning | brand | growth | market-definition | intelligence | investor | diagnostic | meta>
tier: <1 | 2 | 3>
duration_hours: <decimal>
prerequisites: []
composable_with: []
outputs: []
license: CC-BY-4.0
author: <Contributor Name>
source_url: <Contributor URL>
```

- [ ] **Step 4: Verify validator accepts the template**

```bash
cd /Users/philipprimmler/Downloads/Projects/resilience-stack
# Manual review against .github/workflows/validate-skill.yml field checks
grep -E "^(name|description|version|track|tier):" meta-skills/skill-creator/templates/frontmatter-template.yaml
```

Expected: 5 matches.

- [ ] **Step 5: Commit**

```bash
git add meta-skills/skill-creator
git commit -m "feat: add skill-creator meta-skill + templates"
```

---

### Task 0.3 — Trajectory Logging Spec

**Files:**
- Create: `docs/trajectory-logging-spec.md`

- [ ] **Step 1: Write spec**

```markdown
# Trajectory Logging Specification (Opt-In Only)

## Purpose
Define what skill-run trajectories look like, what gets logged, what doesn't, how users opt in, and what the logs are used for. This is a SPECIFICATION, not an implementation. Implementation deferred to v2 (Curator).

## Defaults
- Logging is OFF by default
- Users opt in per skill run with an explicit flag
- Logs stored locally; never auto-uploaded
- Petrichor never receives logs unless user explicitly shares

## Trajectory Schema (v1)
```yaml
trajectory_id: <uuid>
skill: <skill-name>
skill_version: <semver>
run_start: <iso8601>
run_end: <iso8601>
phases_completed: [pre_work, phase_2, phase_3]
deliverables_produced: [<deliverable-name>, ...]
outcome_score: <1-10>            # self-reported at end
outcome_score_reason: <string>
agent_observations: []           # facilitator's notes
user_consent_share: <bool>
```

## What Is NOT Logged
- Customer names
- Revenue numbers
- Verbatim survey responses
- Any PII

## Future Use (v2 Curator)
- Aggregated, anonymized trajectories train the v2 Curator agent
- Curator proposes Insert / Update / Delete on the SkillRepo
- See ROADMAP.md
```

- [ ] **Step 2: Commit**

```bash
git add docs/trajectory-logging-spec.md
git commit -m "feat: trajectory logging spec (no impl) for v2 Curator"
```

---

### Task 0.4 — Soft Base Release (v1.2 public)

**Files:**
- Modify: `CHANGELOG.md` (add v1.2 release entry — already exists)
- Modify: `README.md` (add install instructions + "soft launch" note)

- [ ] **Step 1: Verify CHANGELOG v1.2 entry is present**

```bash
grep -A 2 "## \[1.2.0\]" CHANGELOG.md
```

- [ ] **Step 2: Push branch to GitHub**

Pre-req: GitHub org `petrichorprojects` exists, repo `resilience-stack` created.

```bash
cd /Users/philipprimmler/Downloads/Projects/resilience-stack
git remote add origin git@github.com:Petrichor-Projects/resilience-stack.git
git push -u origin spec-v1.5-design
# Merge spec-v1.5-design into main via PR
```

- [ ] **Step 3: Publish npm package**

```bash
cd /Users/philipprimmler/Downloads/Projects/resilience-stack
npm login    # phil@petrichor account
npm publish --access public
```

Verify: `npx resilience-stack list` returns the 18 skills.

- [ ] **Step 4: Post the soft launch LinkedIn**

Use `marketing/launch-templates/_base-soft-release.md` (write in Task 0.5).

- [ ] **Step 5: Commit any README adjustments**

```bash
git add README.md
git commit -m "chore: add install instructions + v1.2 soft-launch note"
```

---

### Task 0.5 — Marketing Templates Scaffold

**Files:**
- Create: `marketing/README.md`
- Create: `marketing/launch-templates/_template.md`
- Create: `marketing/launch-templates/_base-soft-release.md`
- Create: `marketing/quizzes/_template.md`
- Create: `marketing/videos/_shot-list.md`
- Create: `marketing/essays/_template.md`

- [ ] **Step 1: Write `marketing/README.md`**

Describe purpose, structure, anonymization rules, brand voice constraints (no comment-bait, no em-dashes in legal-adjacent posts, etc.).

- [ ] **Step 2: Write `_template.md` for launch copy**

```markdown
# Launch Copy — {{skill-name}}

## X / Twitter thread (8-12 tweets)
[Hook tweet]
[Problem tweet]
[Framework intro tweet]
[3-5 deliverable / segment tweets]
[Worked-example proof tweet]
[CTA tweet — link to kit + quiz]

## LinkedIn long-form (1200-1800 words)
[Hook (1-2 sentences)]
[Story / observation that triggers the framework]
[Framework summary]
[Sample deliverable preview]
[Case study reference]
[CTA — link to kit]

## Substack / blog post (cross-post of LinkedIn + 2 expansions)
[Same as LinkedIn + 2 extra worked examples + downloads]

## Email blast (300-500 words)
[Subject line A/B options]
[Single CTA + link]
```

- [ ] **Step 3: Write `_base-soft-release.md`**

Short LinkedIn post announcing the existence of Resilience Stack v1.2. Hook on "why frameworks decay" (citing manifesto). CTA: bookmark + watch for the 5-kit drop.

- [ ] **Step 4: Write `quizzes/_template.md`**

```markdown
# Quiz Spec — {{skill-name}}

## Tool
Tally.so (free tier)

## URL
{{tally-url}}

## Title
"What's your {{skill-question}} score?"

## 5 Questions (multi-choice)
1. [Question 1 — diagnostic on dimension 1]
2. [Question 2 — diagnostic on dimension 2]
3. [Question 3 — diagnostic on dimension 3]
4. [Question 4 — diagnostic on dimension 4]
5. [Question 5 — diagnostic on dimension 5]

## Scoring Rubric
- 0-5 points: Stage 1 — recommended action: read the manifesto
- 6-10 points: Stage 2 — recommended action: download the kit
- 11-15 points: Stage 3 — recommended action: book a Petrichor call

## Email Capture
- Beehiiv list: <list-id>
- Welcome email triggers personalized kit summary based on score

## Lead Routing
- Tier 1 leads → kit download + 5-day email sequence
- Tier 2 leads → kit + Loom invite from Phil
- Tier 3 leads → manual review, Petrichor outreach within 48 hours
```

- [ ] **Step 5: Write `videos/_shot-list.md`**

```markdown
# Video Shot List Template (6 shots, 5-6 minutes total)

## Setup
- Loom record screen + camera (small webcam window bottom-right)
- Open the skill markdown in left half of screen
- Open Claude Code in right half
- No editing post-record — accept one-take quality

## 6 Shots
1. (30 sec) Hook — name the problem this skill solves
2. (45 sec) Skill structure — show frontmatter, "When NOT to use", 9 segments
3. (90 sec) Demo — run the skill on the worked example, narrate live
4. (60 sec) Walk through one deliverable
5. (45 sec) Walk through the scorecard
6. (30 sec) Where to download + next kit teaser

## Total: ~5 min 0 sec
```

- [ ] **Step 6: Write `essays/_template.md`**

```markdown
# Essay Template — {{skill-name}}

## Length
1500-2500 words

## Structure
1. Hook — a specific, surprising failure (~150 words)
2. The pattern behind the failure (~300 words)
3. The framework (1 paragraph summary + 1 paragraph mechanics) (~400 words)
4. A worked example (~400 words)
5. What goes wrong without this framework (~300 words)
6. Limits / when the framework does NOT apply (~150 words)
7. CTA — kit download + quiz link (~50 words)

## Voice
Direct. Evidence-driven. No platitudes. Pull a real example. Cite Petrichor.

## Cross-posting
- petrichorgrowth.com/blog (canonical)
- LinkedIn long-form
- Substack
- (optional) HN with edits
```

- [ ] **Step 7: Commit**

```bash
git add marketing
git commit -m "feat: marketing templates scaffold for v1.5 launches"
```

---

## Phase 1 — Kit 1: relevancy-audit (Week 1)

Existing assets: worked example partial (input.md + deliverable-5-scorecard.md), case study (case-01), eval case 1 baseline. Missing: 2 more eval cases (exist already per v1.2), full worked example, rubric, formatter, video, quiz, essay, launch copy.

Actually per v1.2 plan: 3 eval cases for relevancy-audit already exist. Verify in Task 1.1.

### Task 1.1 — Verify relevancy-audit existing assets

- [ ] **Step 1: List existing relevancy-audit files**

```bash
cd /Users/philipprimmler/Downloads/Projects/resilience-stack
ls evals/relevancy-audit/
ls examples/relevancy-audit/
ls case-studies/relevancy-audit/
ls skills/positioning/relevancy-audit/
```

Expected:
- `evals/relevancy-audit/`: case-01-baseline.yaml, case-02-when-not-to-use.yaml, case-03-adversarial.yaml
- `examples/relevancy-audit/`: input.md, deliverable-5-scorecard.md
- `case-studies/relevancy-audit/`: case-01-vertical-saas-decay.md
- `skills/positioning/relevancy-audit/`: relevancy-audit.md, scoring/ (already exists from Petrichor), templates/

- [ ] **Step 2: Identify gaps**

Write gap list to `docs/superpowers/plans/2026-05-12-resilience-stack-v1.5.notes.md`:
- Missing: examples/relevancy-audit/trajectory.md
- Missing: examples/relevancy-audit/deliverable-{1,2,3,4}.md
- Missing: examples/relevancy-audit/post-engagement-notes.md
- Verify: scoring/relevancy-rubric.md is current; may need update
- Missing: formatters/board-brief.md
- Missing: video walkthrough Loom URL
- Missing: quiz Tally URL + spec
- Missing: founder essay
- Missing: launch copy

---

### Task 1.2 — Complete worked example for relevancy-audit

**Files:**
- Create: `examples/relevancy-audit/trajectory.md`
- Create: `examples/relevancy-audit/deliverable-1.md` through `deliverable-4.md`
- Create: `examples/relevancy-audit/post-engagement-notes.md`

- [ ] **Step 1: Write `trajectory.md`**

Document phase-by-phase facilitation log for the Synthetic Co example (already established in `input.md`). Cover Phase 1 pre-work confirmation → Phase 2 segments 1-9 → Phase 3 deliverables generation. 600-1000 words.

- [ ] **Step 2: Write `deliverable-1.md` — Positioning Decay Map**

Render the Synthetic Co decay map (Stage 2 borderline 3) as a structured doc. Reference the verbatim buyer language gap noted in `input.md`.

- [ ] **Step 3: Write `deliverable-2.md` — Signal Refresh Roadmap**

90-day plan with named owners + measurable success criteria. Match `deliverable-5-scorecard.md` content but as full doc.

- [ ] **Step 4: Write `deliverable-3.md` — Stage Classification**

Show the scored evidence per stage threshold (table).

- [ ] **Step 5: Write `deliverable-4.md` — Competitive Position Snapshot**

Side-by-side map of Synthetic Co vs LegacyVendor vs NewEntrant vs InHouse.

- [ ] **Step 6: Write `post-engagement-notes.md`**

What worked, what surprised the facilitator, what to do differently next time. Match the case-study notes section.

- [ ] **Step 7: Commit**

```bash
git add examples/relevancy-audit
git commit -m "feat(kit-1): complete worked example for relevancy-audit"
```

---

### Task 1.3 — Scoring rubric for relevancy-audit

**Files:**
- Modify or Create: `skills/positioning/relevancy-audit/scoring/relevancy-rubric.md`

- [ ] **Step 1: Check existing rubric**

```bash
cat skills/positioning/relevancy-audit/scoring/relevancy-rubric.md 2>/dev/null | head -20
```

- [ ] **Step 2: Write rubric**

10-dimension scoring matrix, each scored 0-3, total 0-30 → mapped to Decay Stage. Each dimension has 4 anchor descriptions.

```markdown
# Relevancy Audit Scoring Rubric

## How to Use
Score each of the 10 dimensions 0-3 based on evidence. Sum → map to Decay Stage:
- 0-9: Drift (Stage 1)
- 10-20: Disconnect (Stage 2)
- 21-30: Displacement (Stage 3)

## Dimensions

### 1. Win Rate Trend
- 0: Win rate stable or improving (±2%)
- 1: Win rate declining 3-8% over 2 quarters
- 2: Win rate declining 9-15% over 2 quarters
- 3: Win rate declining 16%+ or 30%+ relative loss

[... 9 more dimensions]
```

- [ ] **Step 3: Score the Synthetic Co example using the rubric**

Show the computed score (~22/30 → Stage 2 borderline 3). Verify matches the case study.

- [ ] **Step 4: Commit**

```bash
git add skills/positioning/relevancy-audit/scoring
git commit -m "feat(kit-1): relevancy-audit scoring rubric"
```

---

### Task 1.4 — Board-brief formatter for relevancy-audit

**Files:**
- Create: `skills/positioning/relevancy-audit/formatters/board-brief.md`

- [ ] **Step 1: Write formatter skill**

```markdown
---
name: relevancy-audit-board-brief
description: Convert relevancy-audit deliverables into a single-page board brief — Decay Stage + top 3 actions + measurable 90-day commitments.
version: 1.0.0
track: meta
tier: 0
duration_hours: 0.5
prerequisites: [relevancy-audit]
outputs: [board-brief-pdf, board-brief-markdown]
---

# Board Brief Formatter — Relevancy Audit

You are a board-deck formatter. Take the 5 deliverables from a relevancy-audit run and compress them into a single-page board brief.

## Inputs
- Decay Stage classification + rationale
- Top 3 signal-refresh actions with owners + 90-day deadlines
- Single-sentence "what's at risk if we don't act"
- One quantified leading indicator

## Output Format
[Define exact 1-page layout: headline, 3-row action table, owner column, deadline column, signal column]
```

- [ ] **Step 2: Run the formatter on Synthetic Co deliverables**

Produce `examples/relevancy-audit/board-brief-sample.md` as proof.

- [ ] **Step 3: Commit**

```bash
git add skills/positioning/relevancy-audit/formatters examples/relevancy-audit/board-brief-sample.md
git commit -m "feat(kit-1): board-brief formatter + sample for relevancy-audit"
```

---

### Task 1.5 — Quiz spec + Tally form

**Files:**
- Create: `marketing/quizzes/relevancy-audit.md`

- [ ] **Step 1: Draft 5 questions in `marketing/quizzes/relevancy-audit.md`**

Use the `_template.md`. 5 multi-choice questions covering: win-rate trend, sales cycle trend, unknown-competitor mentions, share-of-voice trend, analyst report language.

- [ ] **Step 2: Build the quiz in Tally**

Manual. Use the markdown spec. Configure scoring + Beehiiv integration.

- [ ] **Step 3: Paste live URL into the markdown spec**

```markdown
## URL
https://tally.so/r/<id>
```

- [ ] **Step 4: Test with 3 reviewers**

Invite 3 trusted strategists (DM via LinkedIn). Collect feedback on question clarity + scoring fairness. Iterate if needed.

- [ ] **Step 5: Commit**

```bash
git add marketing/quizzes/relevancy-audit.md
git commit -m "feat(kit-1): relevancy-audit quiz spec + live Tally URL"
```

---

### Task 1.6 — Video walkthrough

**Files:**
- Create: `marketing/videos/relevancy-audit.md` (shot list + Loom URL)

- [ ] **Step 1: Write shot list from `_shot-list.md`**

Customize the 6 shots for relevancy-audit (Synthetic Co example, Decay Stage 2 highlight).

- [ ] **Step 2: Record one take in Loom**

Time-cap 6 minutes. No editing.

- [ ] **Step 3: Add Loom URL to shot list doc**

- [ ] **Step 4: Commit**

```bash
git add marketing/videos/relevancy-audit.md
git commit -m "feat(kit-1): relevancy-audit video walkthrough + Loom URL"
```

---

### Task 1.7 — Founder essay

**Files:**
- Create: `marketing/essays/relevancy-audit.md` (full essay draft)

- [ ] **Step 1: Draft essay using `_template.md`**

Title candidates:
- "When You're Solving Yesterday's Problem (And Don't Know It)"
- "The 24-Month Window Before Positioning Stops Working"
- "Why Win Rates Decay When Nothing Else Has Changed"

Pick one. 1500-2500 words. Single voice. Cite the Synthetic Co example.

- [ ] **Step 2: Send to 2 outside-Petrichor reviewers**

DM 2 strategists for read + 24-hour turnaround.

- [ ] **Step 3: Apply edits**

- [ ] **Step 4: Commit**

```bash
git add marketing/essays/relevancy-audit.md
git commit -m "feat(kit-1): relevancy-audit founder essay"
```

---

### Task 1.8 — Launch copy bundle

**Files:**
- Create: `marketing/launch-templates/relevancy-audit.md`

- [ ] **Step 1: Write X thread (8-12 tweets)**

Tweet 1 — hook (decay symptom). Tweets 2-5 — framework + 3 stages. Tweets 6-9 — sample deliverable + case study. Tweets 10-11 — CTA: kit + quiz.

- [ ] **Step 2: Write LinkedIn long-form (1200-1800 words)**

Repurpose essay opening + framework + case. Different opener than essay.

- [ ] **Step 3: Write Substack post**

LinkedIn version + footer with links.

- [ ] **Step 4: Write email blast (300-500 words)**

Subject A/B: "Your positioning has a half-life" / "The 24-month decay window."
Single CTA: kit download.

- [ ] **Step 5: Commit**

```bash
git add marketing/launch-templates/relevancy-audit.md
git commit -m "feat(kit-1): launch copy bundle for relevancy-audit"
```

---

### Task 1.9 — Update CHANGELOG + README for Kit 1

**Files:**
- Modify: `CHANGELOG.md`
- Modify: `README.md`

- [ ] **Step 1: Add CHANGELOG entry**

```markdown
## [1.5.0-kit-1] — 2026-05-19

### Added
- Kit 1: `relevancy-audit` shipped at full depth — 10 artifacts (skill md, 3 evals, worked example, case study, scoring rubric, board-brief formatter, video walkthrough, quiz, founder essay, launch copy)
```

- [ ] **Step 2: Update README — add "Polished Kits" section above 18-skill index**

```markdown
## ⭐ Polished Kits

These skills ship with the full Resilience Stack toolkit: evals, worked example, case study, scoring rubric, board-brief formatter, video walkthrough, quiz lead magnet, founder essay.

- ⭐ [relevancy-audit](skills/positioning/relevancy-audit) — Diagnose positioning decay across 3 stages
```

- [ ] **Step 3: Commit**

```bash
git add CHANGELOG.md README.md
git commit -m "docs(kit-1): update CHANGELOG + README for Kit 1 launch"
```

---

### Task 1.10 — Public launch (Week 1 Monday)

- [ ] **Step 1: Merge branch + tag**

```bash
cd /Users/philipprimmler/Downloads/Projects/resilience-stack
git checkout main
git merge --no-ff spec-v1.5-design -m "release: v1.5 Kit 1 — relevancy-audit"
git tag v1.5.0-kit-1
git push origin main --tags
```

- [ ] **Step 2: Republish npm**

```bash
npm version 1.5.0
npm publish --access public
```

- [ ] **Step 3: Schedule social posts**

- X thread: Monday 9am ET (Buffer or manual)
- LinkedIn long-form: Monday 11am ET
- Substack: Monday 12pm ET
- Email blast: Tuesday 9am ET

- [ ] **Step 4: DM the 10 friendly amplifiers**

Pre-launch list (write down 10 names). Personal DM with kit link.

- [ ] **Step 5: Monitor signal for 24 hours**

Metrics to watch: GitHub stars, npm downloads, quiz completions, inbound DMs.

- [ ] **Step 6: Decide Kit 2 cadence**

If Kit 1 lands hot (>50 stars in 24h or 3+ inbound) → keep weekly cadence.
If soft → pause, diagnose, adjust before Kit 2.

---

## Phase 2 — Kit 2: revenue-story-audit (Week 2)

Repeat Tasks 1.1 through 1.10 for `revenue-story-audit`. Specifically:

### Task 2.1 — Verify existing assets (will find: skill md only)

### Task 2.2 — Write 3 eval cases for revenue-story-audit

**Files:**
- Create: `evals/revenue-story-audit/case-01-baseline.yaml`
- Create: `evals/revenue-story-audit/case-02-when-not-to-use.yaml`
- Create: `evals/revenue-story-audit/case-03-adversarial.yaml`

Use the same schema as `evals/relevancy-audit/case-01-baseline.yaml`. Each case includes:
- case_id, skill, description, input (company context + symptoms + evidence), expected_behavior, adversarial_checks, pass_criteria.

Specific case scenarios:
- Baseline: Series B SaaS @ $20M ARR, 4 quarters of segmented data, prepping for Series C
- When-not-to-use: Pre-revenue company w/ no 4-quarter history
- Adversarial: Founder defends "the team is bullish" forecasts without evidence

### Task 2.3 — Build worked example (use synthetic Series B SaaS context)

### Task 2.4 — Write scoring rubric (10 dimensions: concentration, growth assumption integrity, channel attribution clarity, etc.)

### Task 2.5 — Build board-brief formatter for revenue audit

### Task 2.6 — Quiz: "Does your revenue story match your mechanics?" 5 questions on concentration, channel truth, growth-assumption evidence.

### Task 2.7 — Video walkthrough (Loom)

### Task 2.8 — Founder essay: "The Two Versions of Your Revenue Story (And Why You Need Both)"

### Task 2.9 — Launch copy bundle

### Task 2.10 — Update CHANGELOG + README, tag `v1.5.0-kit-2`, publish, post

Detail-level steps mirror Phase 1. Each task is 2-5 minutes per step. Total Phase 2: ~16-20 hours over the week.

---

## Phase 3 — Kit 3: competitive-narrative-stress-test (Week 3)

Same 10-task structure as Phase 1/2. Skill-specific context:

- Baseline eval: Growth-stage company losing to a single competitor on narrative
- When-not-to-use eval: True blue-ocean / no named competitors
- Adversarial eval: Sales leader provides only flattering competitor language
- Worked example: B2B SaaS losing to NewEntrant who's pitching "AI-native"
- Rubric: 10 dimensions across 5 narrative layers
- Quiz: "Can your story survive a competitor's best day?" 5 questions
- Essay: "Your Competitor's Best Pitch Is The One You Haven't Heard Yet"

---

## Phase 4 — Kit 4: pricing-authority-diagnostic (Week 4)

- Baseline eval: $30M ARR SaaS w/ rising discount %, declining NRR
- When-not-to-use eval: Pre-PMF — pricing experiments still ongoing
- Adversarial eval: Sales attributes every discount to "buyer story" — recode required
- Worked example: Synthetic vertical SaaS w/ 4 quarters of deal data
- Rubric: 10 dimensions across the Price-Value Integrity Map
- Quiz: "Do your prices signal authority — or just fit a spreadsheet?"
- Essay: "What Your Discount Pattern Tells The Buyer (That You Don't Want To Hear)"

---

## Phase 5 — Kit 5: investor-story-forensics (Week 5)

- Baseline eval: Series B prepping for Series C, 90 days out
- When-not-to-use eval: Already in LOI / due diligence (<14 days)
- Adversarial eval: CEO provides only the bull case; bear case fabricated
- Worked example: Pre-Series C SaaS w/ 4-quarter trajectory + 3 reference customers
- Rubric: 10 dimensions across the 5 claim classes
- Quiz: "Does your investor story survive forensic diligence?"
- Essay: "The Reference Call You Haven't Rehearsed Will Tank Your Round"

### Task 5.10 — HN Show HN launch (Week 5 Friday)

**This is the big launch.** Replace standard Task X.10 with:

- [ ] **Step 1: Confirm all 5 kits are public**

```bash
git tag | grep v1.5.0-kit-
```

Expected: 5 tags.

- [ ] **Step 2: Update root README with 5 kit badges + "Featured on HN" placeholder**

- [ ] **Step 3: Write HN Show HN post**

Title: "Show HN: Resilience Stack — 18 strategy frameworks as Claude skills, 5 polished"
Body: 200-word description w/ links to manifesto + first kit + repo.

- [ ] **Step 4: Submit at 9am ET Tuesday (optimal HN window per HN traffic data)**

- [ ] **Step 5: Cross-post: Product Hunt + recap LinkedIn post + recap X thread**

- [ ] **Step 6: Babysit comments for 8 hours**

Reply to every substantive comment within 30 min. Don't argue. Don't oversell. Cite the repo.

- [ ] **Step 7: Capture signal**

Write `marketing/launch-templates/_post-launch-debrief.md` 24 hours later with: stars gained, comments archived, top critiques, inbound leads.

- [ ] **Step 8: Tag final v1.5 release**

```bash
git tag v1.5.0
git push origin v1.5.0
npm version 1.5.0
npm publish
```

- [ ] **Step 9: Commit debrief**

```bash
git add marketing/launch-templates/_post-launch-debrief.md
git commit -m "docs(launch): v1.5 final launch debrief"
```

---

## Phase 6 — Final Cleanup (Week 6)

### Task 6.1 — Update ROADMAP for v1.6 + v2

**Files:**
- Modify: `ROADMAP.md`

- [ ] **Step 1: Move v1.5 items to "Shipped" section**

- [ ] **Step 2: Promote v2 Curator items based on signal from launch**

If trajectory logs were captured during kits, plan to spec v2 Curator. Otherwise, hold.

- [ ] **Step 3: Decide based on debrief: v1.6 = community contributions push, or v1.6 = polish next 5 skills**

- [ ] **Step 4: Commit**

```bash
git add ROADMAP.md
git commit -m "docs: ROADMAP update post-v1.5 launch"
```

---

### Task 6.2 — CHANGELOG final v1.5 entry

**Files:**
- Modify: `CHANGELOG.md`

- [ ] **Step 1: Add `[1.5.0]` consolidation entry**

```markdown
## [1.5.0] — 2026-06-23

### Added
- 5 priority kits fully polished: relevancy-audit, revenue-story-audit, competitive-narrative-stress-test, pricing-authority-diagnostic, investor-story-forensics
- Manifesto: "Why Frameworks Decay (And What To Do About It)"
- Meta-skill: skill-creator
- Spec: trajectory-logging-spec.md
- Marketing scaffold: templates, quizzes, videos, essays, launch copy

### Launched
- Soft repo release (Week 0)
- 5 weekly kit drops (Weeks 1-5)
- HN Show HN (Week 5)

### Metrics (90-day window)
- GitHub stars: [fill]
- npm downloads: [fill]
- Quiz captures: [fill]
- Inbound leads: [fill]
- Closed engagements: [fill]
```

- [ ] **Step 2: Commit**

```bash
git add CHANGELOG.md
git commit -m "docs: v1.5 consolidated CHANGELOG entry"
```

---

### Task 6.3 — Final review + retrospective

**Files:**
- Create: `docs/retrospectives/2026-06-23-v1.5-retro.md`

- [ ] **Step 1: Write retro doc**

Sections:
- What worked
- What surprised
- What would you do differently
- v1.6 candidate priorities ranked by signal
- v2 Curator readiness assessment

- [ ] **Step 2: Commit**

```bash
git add docs/retrospectives
git commit -m "docs: v1.5 retrospective"
```

---

## Cross-cutting Patterns

### Branch hygiene
- Each kit gets its own branch: `kit/<skill-name>`
- Merge to `main` after kit launch
- Tag at merge

### Commit cadence
- Aim for 1 commit per task step where possible
- Atomic commits, one logical change each
- Conventional commits: `feat:`, `feat(kit-N):`, `docs:`, `chore:`

### Quality gates (every kit)
Before merge to main:
- [ ] All eval cases pass manual review
- [ ] Worked example produces 5 deliverables
- [ ] Case study anonymized per `case-studies/README.md` rules
- [ ] Scoring rubric scores at least 1 historical engagement
- [ ] Video walkthrough under 6 minutes
- [ ] Quiz tested by 3 non-team reviewers
- [ ] Founder essay reviewed by 2 outside-Petrichor strategists
- [ ] Launch copy passes `boundaries.md` review

### Risk management
- Friday before each Monday launch: 24-hour buffer for fixes
- If a kit blocks at any artifact, ship without it and backfill the next week
- Manifesto must ship Week 0 — no kit launches without it (it's cited by every essay)

### Solo-operator load management
- ~16-20 hours per kit. Spread Mon-Fri. Reserve Sat-Sun for inbound + brand-management.
- Use Loom unedited — don't optimize video quality.
- Use Tally free tier — don't optimize quiz design.
- Outsource ONLY: 2 outside-Petrichor reviewers per essay (informal DMs, no cost).

---

## Self-Review Notes

After writing this plan:

**Spec coverage check:**
- §5 Kit Definition (10 artifacts) → Tasks 1.2 through 1.8 cover each artifact. ✓
- §6 Foundational Artifacts → Tasks 0.1, 0.2, 0.3. ✓
- §7 Repo structure → All paths in this plan match the spec. ✓
- §9 Quality Gates → "Quality gates (every kit)" section in cross-cutting patterns. ✓
- §10 Risk Register → "Risk management" + Task 1.10 Step 6 (cadence pause rule). ✓
- §11 Success Metrics → Task 6.2 includes metrics fill-ins. ✓
- §13 Open Decisions → Task 0.4 implicitly resolves GitHub org + domain at push time. Trademark deferred to retro. ✓
- §14 Definition of Done → Phases 1-5 each end in a public launch. Task 5.10 covers HN. ✓

**Placeholder scan:**
- Phase 2 through Phase 5 are summarized (not detail-step-listed) because they mirror Phase 1's structure. This is intentional — the engineer reading this plan can substitute the skill-specific context provided per phase. Each phase explicitly references "same 10-task structure as Phase 1".
- No "TBD" / "TODO" left in body.

**Type/naming consistency:**
- All 5 priority skills named consistently: `relevancy-audit`, `revenue-story-audit`, `competitive-narrative-stress-test`, `pricing-authority-diagnostic`, `investor-story-forensics`.
- All artifact paths consistent with the v1.2 repo structure.
- Branch naming consistent: `kit/<skill-name>` for kits, `spec-v1.5-design` for the spec branch (already exists).

Plan is complete and consistent with the v1.5 spec.

---

*Plan v1.0 — 2026-05-12 — Petrichor Projects — CC BY 4.0*
