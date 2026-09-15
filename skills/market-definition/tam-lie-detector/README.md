# Petrichor TAM Lie Detector — Claude Code Skill

An interactive strategy diagnostic that pressure-tests your addressable market claim across 8 integrity dimensions and produces a validated TAM your team can defend in investor diligence. Based on The TAM Integrity Test by Petrichor Projects.

## What This Does

Instead of guessing whether your TAM is credible, you run `/tam-lie-detector` and Claude facilitates the entire diagnostic interactively:

1. **Gathers company context** — current TAM claim, source, competitors, and the sales-plan-implied market size
2. **Runs the TAM Archaeology Dig** — traces your number back to its original source and exposes every modification, caveat removal, and definition drift along the way
3. **Builds the 1,000-Customer Ceiling Test** — constructs a bottom-up TAM from your actual customer profile and compares it to the stated TAM
4. **Applies the Willingness-to-Pay Haircut** — three sequential buying filters (affordability, organizational capability, problem acuity) that most market sizing ignores
5. **Conducts the Competitive Absorption Audit** — sums competitor revenues to establish the empirical market floor
6. **Runs the Churn Forensics Reversal** — uses your own churn data as market intelligence, reclassifying churned customers to refine TAM boundaries
7. **Executes the Fundraise vs. Operate Divergence Test** — produces the fundraise TAM and the operations-implied market size simultaneously and measures the gap
8. **Benchmarks penetration plausibility** — compares your implied growth trajectory to Salesforce, Workday, ServiceNow, and other enterprise SaaS benchmarks
9. **Scores team alignment** — simultaneous scoring across leadership to surface where the team disagrees about market reality
10. **Calculates the TAM Integrity Score** — composite 0-80 score with dimensional breakdown and classification
11. **Builds the Recalibration Plan** — four-component plan for updating the investor deck, board communication, and sales plan
12. **Produces deliverables** — scorecard and full report written to disk

## Install

Copy the command file to your Claude Code commands directory:

```bash
cp tam-lie-detector.md ~/.claude/commands/tam-lie-detector.md
```

Or copy the entire skill:

```bash
mkdir -p ~/.agents/skills/tam-lie-detector
cp -r . ~/.agents/skills/tam-lie-detector/
```

## Usage

```
/tam-lie-detector
```

Claude will walk you through 9 phases, one at a time. Budget 45-60 minutes for a thorough diagnostic. Outputs are written to `./tam-lie-detector-output/` in your current directory.

## What You Get

After the diagnostic completes, you will have:

```
./tam-lie-detector-output/
  00-context.md                       # Company context summary
  01-tam-archaeology.md               # Citation chain + Source Integrity score
  02-customer-ceiling-test.md         # Bottom-up TAM build + ratio analysis
  03-willingness-to-pay-haircut.md    # Three-filter cascade + Haircut TAM
  04-competitive-churn-analysis.md    # Competitive floor + churn classification
  05-fundraise-operate-divergence.md  # Two-mode TAM comparison + ratio
  06-penetration-team-alignment.md    # Benchmark comparison + simultaneous scores
  07-integrity-score-recalibration.md # TAM Integrity Score + recalibration plan
  SCORECARD.md                        # One-page executive summary
  FULL-REPORT.md                      # Comprehensive report
```

## The TAM Integrity Score

The diagnostic produces a composite score from 8 dimensions (each scored 1-10):

| Score | Classification | What It Means |
|-------|---------------|---------------|
| 65-80 | HIGH INTEGRITY | TAM is defensible. Minor recalibration may be needed but the methodology survives diligence. |
| 40-64 | MODERATE INTEGRITY | Real opportunity, but stated TAM overstates it by 3-10x. Recalibrate before next fundraise. |
| Below 40 | LOW INTEGRITY | TAM does not survive any integrity test. Every downstream decision is built on a fiction. Rebuild immediately. |

## Who This Is For

- Pre-fundraise companies whose TAM slide hasn't been rebuilt from the bottom up in 12+ months
- Companies that have missed revenue targets 2+ consecutive quarters and continue presenting the same TAM number to the board
- Any team whose CEO uses phrases like "we're barely scratching the surface" or "less than 1% of a $50 billion market" without being able to explain why the other 99% hasn't bought
- Any CEO or CFO who cannot walk an investor's associate through the TAM methodology in 5 minutes

**The quick test**: Multiply your total targetable accounts by your ACV. Compare that number to your TAM slide. If the ratio is above 5:1, run this diagnostic before your next investor meeting.

## Tips

- **Be specific with numbers.** This diagnostic is math-heavy. Have your customer list, account count, ACV, churn data, and competitor names ready.
- **Don't soften the filters.** The Willingness-to-Pay Haircut only works if the percentages are honest. The growth rate that contradicts your optimistic filter estimates is sitting in your quarterly board deck.
- **Run it with your operations team.** The Fundraise vs. Operate Divergence Test is most revealing when VP Sales builds the operations number without seeing what the CEO built for investors.
- **Share the scorecard.** It is designed to brief board members who were not in the diagnostic.
- **Use the validated TAM.** The validated number produced by this diagnostic is smaller than what is on your slide. That is almost universal. The companies that benefit most are the ones that adopt the validated number for all planning immediately — not just for the investor deck.

## Gumroad

Available as a standalone product for $497: [GUMROAD_LINK_TBD]

## Model Recommendation

Works best with Claude Opus or Sonnet. The mathematical exercises and cross-phase synthesis scale with model capability — Opus will push harder on the filter percentages in the WTP Haircut and produce more precise scoring rationale.

## License

This is proprietary intellectual property of Petrichor Projects. For personal or internal team use only. Do not redistribute.

---

*Petrichor Projects — petrichorgrowth.com*
