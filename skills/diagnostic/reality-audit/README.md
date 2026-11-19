# Petrichor Reality Audit — Claude Code Skill

An interactive strategy diagnostic that surfaces the gap between what your company believes and what is actually true — and measures the trust exposure those gaps create. Based on The 4 Reality Gaps framework by Petrichor Projects.

## What This Does

Instead of reading a framework document, you run `/reality-audit` and Claude facilitates the entire workshop interactively:

1. **Gathers company context** — asks about your market, stakeholders, forecast history, and the assumptions you privately doubt
2. **Runs the Belief-Truth Gap** — inventories every core belief your strategy is built on and tests each against external evidence
3. **Runs the Assumption-Validation Gap** — identifies which assumptions have actually been tested and which are hypotheses your team is treating as facts
4. **Runs the Forecast-Reality Gap** — examines 4 quarters of forecast vs. actual, identifies whether misses are execution failures or assumption failures, and surfaces whether stated board reasons match real root causes
5. **Runs the Trust-Reality Gap** — maps which stakeholders are trusting you based on beliefs the audit has now questioned, and scores the exposure if those gaps are discovered
6. **Calculates your Reality Gap Score** — an overall severity rating (Controlled / Accelerating / Critical) with dimension scores for all 4 gaps
7. **Builds the Reality Reconciliation** — forces Defend/Revise/Abandon decisions for every major gap, with named owners and specific timelines
8. **Produces deliverables** — scorecard and full report written to disk

## Install

Copy the command file to your Claude Code commands directory:

```bash
cp reality-audit.md ~/.claude/commands/reality-audit.md
```

Or install the full skill:

```bash
mkdir -p ~/.agents/skills/reality-audit
cp -r . ~/.agents/skills/reality-audit/
```

## Usage

```
/reality-audit
```

Claude will walk you through 8 phases, one at a time. Budget 30-45 minutes for a thorough audit. Outputs are written to `./reality-audit-output/` in your current directory.

## What You Get

After the audit completes:

```
./reality-audit-output/
  00-context.md                  # Company context summary
  01-belief-truth-gap.md         # Belief inventory with scores and evidence
  02-assumption-validation-gap.md # Assumption map with validation status
  03-forecast-reality-gap.md     # 4-quarter analysis with root cause classification
  04-trust-reality-gap.md        # Stakeholder trust exposure assessment
  05-gap-severity-scoring.md     # Overall Reality Gap Score and classification
  06-reconciliation-roadmap.md   # Defend/Revise/Abandon decisions + 90-day plan
  SCORECARD.md                   # One-page executive summary
  FULL-REPORT.md                 # Comprehensive report
```

## Tips

- **Be specific.** Generic answers produce generic diagnoses. When Claude pushes back, give real examples with real numbers.
- **Give the private answer.** The audit is designed to surface what you privately believe, not what you would say to your board. The gap between those two things is often the most important finding.
- **Use real forecast data.** Bring actual quarterly numbers if you can. Estimated ranges still work but reduce diagnostic precision.
- **Run it on a real company.** This works best with a company you know deeply — your own, a client's, or one you are evaluating.
- **Share the scorecard.** It is designed to brief people who were not in the conversation — board members, advisors, or team members who need the finding without the full context.
- **Run the Monthly Reality Check.** The 15-minute protocol at the end is where the long-term value lives.

## When to Use It

- Before a major strategy shift
- After two or more consecutive forecast misses
- When the board is questioning the current strategy
- When leadership is divided on strategic direction
- Pre-fundraise, when the narrative needs to be airtight
- When a post-acquisition company's heritage narrative is breaking down

## Model Recommendation

Works best with Claude Opus or Sonnet. The diagnostic quality scales with model capability — Opus will push harder on the public-private divergence, surface more cross-phase connections, and produce more specific scoring rationale.

## Get the Full Workshop

This skill is based on Workshop #4: Reality Audit from the Petrichor Strategy Workshop Series. The facilitated version runs 2.5 hours with pre-session diagnostic interviews, anonymous scoring, physical decision walls, and commitment architecture.

Purchase the complete workshop kit: [GUMROAD_LINK_TBD] — $497

## License

This is proprietary intellectual property of Petrichor Projects. For personal or internal team use only. Do not redistribute.

---

*Petrichor Projects — petrichorgrowth.com*
