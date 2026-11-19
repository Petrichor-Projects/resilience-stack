# Petrichor Relevancy Audit — Claude Code Skill

An interactive strategy diagnostic that measures your positioning's decay rate and builds a signal refresh roadmap. Based on The Relevancy Decay Model by Petrichor Projects.

## What This Does

Instead of reading a PDF, you run `/relevancy-audit` and Claude facilitates the entire workshop interactively:

1. **Gathers your company context** — asks about your market, competitors, and positioning
2. **Runs the Customer Amnesia Test** — surfaces the gap between how you describe your company and how your market perceives you
3. **Conducts Market Archaeology** — measures how fast you detect and respond to market shifts
4. **Builds a Signal Inventory** — identifies every signal you're tracking, ignoring, or structurally suppressing
5. **Maps Competitive Relevancy** — positions you against competitors across 6 dimensions relative to where the market is heading
6. **Calculates your Decay Clock** — a measured deadline: months of relevancy capital remaining
7. **Generates a Signal Refresh Roadmap** — prioritized 30/60/90 day action plan
8. **Produces deliverables** — scorecard and full report written to disk

## Install

Copy the command file to your Claude Code commands directory:

```bash
cp relevancy-audit.md ~/.claude/commands/relevancy-audit.md
```

Or if you prefer the skills path:

```bash
mkdir -p ~/.agents/skills/relevancy-audit
cp -r . ~/.agents/skills/relevancy-audit/
```

## Usage

```
/relevancy-audit
```

Claude will walk you through 8 phases, one at a time. Budget 30-45 minutes for a thorough audit. Outputs are written to `./relevancy-audit-output/` in your current directory.

## What You Get

After the audit completes, you'll have:

```
./relevancy-audit-output/
  00-context.md                # Company context summary
  01-customer-amnesia-test.md  # Perception gap analysis with scores
  02-market-archaeology.md     # Detection/response speed analysis
  03-signal-inventory.md       # Full categorized signal list
  04-competitive-relevancy-map.md  # 6-dimension competitive map
  05-decay-rate.md             # Decay Clock calculation
  06-signal-refresh-roadmap.md # Prioritized 30/60/90 day plan
  SCORECARD.md                 # One-page executive summary
  FULL-REPORT.md               # Comprehensive report
```

## Tips

- **Be specific.** Generic answers produce generic diagnoses. When Claude pushes back, give real examples.
- **Don't soften.** If your win rate dropped 20%, say so. The audit is only as good as your inputs.
- **Run it on a real company.** This works best with a company you know deeply — your own, a client's, or one you're evaluating.
- **Share the scorecard.** It's designed to brief people who weren't in the conversation.
- **Run the Monthly Decay Check.** The 15-minute protocol at the end is where the long-term value lives.

## Model Recommendation

Works best with Claude Opus or Sonnet. The diagnostic quality scales with model capability — Opus will push harder on follow-up questions and produce more nuanced scoring.

## License

This is proprietary intellectual property of Petrichor Projects. For personal or internal team use only. Do not redistribute.

---

*Petrichor Projects — petrichorgrowth.com*
