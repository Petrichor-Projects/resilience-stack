# When Your Win-Rate Drops 14 Points And No Single Deal Explains It, Your Positioning Is Already Broken

A mid-market vertical SaaS company — $30M ARR, legal operations, four years past product-market fit — walked into the room with a problem nobody could explain. Win rate had moved from 38% to 24% in two quarters. Sales cycles had stretched from 47 days to 62. Marketing spend had doubled and share of voice had not moved. In the last quarter, three lost-deal reviews had named the same competitor — a competitor the sales team did not know existed.

Nobody had done anything wrong. The product hadn't regressed. The team hadn't shrunk. The pricing was the same. The category was still growing.

What had happened — and what nobody in the room had a vocabulary for yet — was that the positioning written in 2022 had quietly stopped describing the market the buyers were actually living in. The deck was still being read out loud in every QBR. The win rate was being lost in every Friday demo. Both sentences were true and neither sentence was being connected to the other.

This essay is about why that gap forms, how to detect it, and what to do about it before the win rate stops being recoverable.

## The pattern behind the failure

I have run versions of this conversation more than thirty times across Petrichor engagements. The cast changes — Series B SaaS, growth-stage marketplace, vertical fintech, services firm — but the shape is the same.

A founding team writes a positioning artifact at a specific moment: a deck, a one-liner, a category narrative, a website hero. The artifact is calibrated to a real moment, with real buyers, real competitors, real buyer-language. It works. The company grows on top of it. Twelve months in, the team has internalized the artifact so completely that nobody re-reads it. Eighteen months in, three of the five "main competitors" the artifact named no longer matter and three new ones have appeared. Twenty-four months in, the verbatim words buyers use to describe the problem have drifted by 5–8 terms out of a vocabulary of roughly 12. The artifact is being defended internally and overridden externally, simultaneously, in the same building.

The reason this is hard to catch is that nothing in the system fires an alarm. Decay does not crash. It does not throw an exception. The deck still opens in PowerPoint. The website still loads. The sales team still pitches it — most of the time. And the win rate moves on a slope shallow enough that no single deal explains it.

This is the failure mode the foundational thesis of the Resilience Stack — `docs/manifesto.md` — calls "the discipline of noticing decay." It is the single most expensive blind spot in modern strategy work because nothing in the standard operating cadence is built to detect it.

> The most expensive sentence in B2B strategy is "we already did our positioning." What it usually means is "we did our positioning in 2022 and stopped looking at it."

## The framework — the Relevancy Decay Model

The Relevancy Audit skill ([skills/positioning/relevancy-audit](https://github.com/Petrichor-Projects/resilience-stack)) is built on a three-stage decay model — Drift, Disconnect, Displacement — with measurable thresholds for each stage. The diagnostic is not a vibe check. Each stage has signals you can read off four quarters of pipeline data, win/loss reviews, and one round of buyer interviews.

**Stage 1 — Drift.** The framework still mostly works, but the world has moved 5–15% off the assumptions baked into it. Measurable signal: win rate down 10–20% year-over-year, no single deal explains why; 2–4 of the top 12 buyer-verbatim terms do not appear in your positioning; the competitive set in your internal battlecards differs from the competitive set named in 50%+ of recent lost-deal reviews. Drift is dangerous precisely because it does not feel like a problem.

**Stage 2 — Disconnect.** The framework now actively misrepresents the market. 5–8 of the top 12 buyer-verbatim terms are missing from your positioning. Sales is winning deals "off-script" — the wins no longer match the playbook. New hires read the strategy doc and quietly ignore it within 60 days. Each individual loss is explainable as a "weird deal." In aggregate they are a structural signal that the model has stopped being load-bearing.

**Stage 3 — Displacement.** 9+ of the top 12 buyer-verbatim terms do not appear in your positioning. Buyers refuse the noun you use for your category and substitute one of their own. Analysts make you "translate" before they understand you. This is terminal if untreated. The companies that fail to refresh in time do not lose to a better product; they lose to a better description of the same problem.

The operator running the audit makes five moves: pull four quarters of structured win/loss data, run 6–10 buyer interviews with both customers and lapsed prospects, extract verbatim language from both, classify the gap against the three-stage thresholds, and produce a 90-day refresh roadmap with named owners and measurable deadlines. The output is a scorecard, not a story.

> A diagnostic that doesn't produce a stage assignment is a workshop. A workshop is what people do instead of strategy.

## A worked example — the legal-ops case

The vertical SaaS company in the opening scene is anonymized — this is a composite, not a single client — but the numbers are real. $30M ARR. Legal operations vertical. Win rate 38% → 24%. Sales cycle 47d → 62d. Three lost-deal reviews citing a competitor (call them "NewEntrant") that did not appear in any internal battlecard.

In the room: Founder/CEO, VP Marketing, Head of Sales, Head of Product. Pre-work: four quarters of coded win/loss data, 18 customer interviews with verbatim NPS comments, three competitor positioning statements pulled from public sites, the Q4 2025 analyst quadrant that had downgraded them from "Leader" to "Established Player." Engagement time: 2.5 hours.

The audit classified the company at **Stage 2 — Disconnect, borderline Stage 3.** Three insights from the deliverable were load-bearing:

1. **Buyer language had completely drifted.** Of the top 12 terms buyers used to describe the problem in surveys, *zero* appeared in the company's positioning statement. The positioning read: "The leading legal operations platform for modern firms." Buyers were saying "AI workflow," "matter intake automation," "compliance defensibility," "associate leverage." None of those nouns were on the website.

2. **Sales had no structured competitive intel on NewEntrant.** Win/loss reasons were rep-coded freeform. NewEntrant's name appeared zero times in the loss-reason field. It appeared three times in raw interview transcripts that nobody had read end-to-end.

3. **The "AI-native" claim from NewEntrant might be marketing, not capability.** The audit could not confirm. It punted to a follow-on skill — `customer-truth-extraction` — to validate. *(Petrichor's discipline: the audit names what it cannot answer and routes it, instead of guessing.)*

Day 30: positioning rewrite using buyer-verbatim language. 6 of the top 12 terms now appeared in the deck. Net-new pipeline +18% month-over-month. Day 60: sales playbook references NewEntrant explicitly, win/loss recoded retroactively for 12 months. Loss rate to NewEntrant cut from 60% to 35%. Day 90: `competitive-narrative-stress-test` run as the follow-on, sales-led narrative re-recorded, analyst briefing scheduled.

Composite Relevancy Decay Score on intake: **4.2 / 10 (FRAGILE).** Composite on the 90-day re-score: above 7.0, classification dropped from Stage 2 back into mid-Stage-1. The diagnostic is on a quarterly cadence now. It will be run again in Q3.

## What goes wrong without this framework

Companies notice the win-rate drop. They almost always notice it. What they do *next* is where the money is lost.

The three failure modes I have seen most often:

**One — they hire a new VP Marketing and call it "rebrand season."** New colors, new typography, new website, same positioning. The verbatim language buyers actually use never enters the artifact. Six months and roughly $200K later, the win rate has continued sliding because the diagnosis was never made. The artifact was re-skinned, not re-derived. A drifting framework in nicer packaging is still a drifting framework.

**Two — they spend their way out of it.** Marketing budget doubles. Paid acquisition triples. The funnel is louder; conversion does not move; CAC payback stretches; the board starts asking questions the team cannot answer with the existing strategy doc. *The legal-ops case in the worked example had already done this — 2× marketing spend, share of voice flat for 18 months.* Spend amplifies whatever message is in the system. If the message has decayed, more spend is just a faster way to lose money.

**Three — they "wait for the next funding round" to re-do strategy.** This is the most expensive choice and the most common one. The unstated assumption is that strategy work is a once-per-round activity and that the deck written at Series B will hold through Series C. Three of every five companies I diagnose at Stage 2 are operating on a strategy doc written at the *previous* funding round — by definition 18 to 24 months stale. Roger Martin has written about this lag, and Christensen's "performance overshoot" work touches the same shape from a different angle. The market does not wait for your fundraise cycle.

In all three failure modes, the team is *working hard.* They are not lazy or incompetent. They are running a diagnostic loop that does not include the actual gap. The thing that needs refreshing is the diagnostic itself.

## When this framework does NOT apply

The Relevancy Audit is not a universal tool. There are three conditions under which running it produces noise instead of signal:

- **Pre-PMF.** If you have not yet achieved product-market fit, you have no positioning to decay yet. You have a hypothesis. The work is `customer-truth-extraction`, not `relevancy-audit`.
- **Single-customer enterprise.** If 60% of your revenue comes from one buyer, "market relevancy" is the wrong frame. The work is account strategy, not positioning strategy.
- **True category creation.** If you are coining a new category that genuinely does not exist yet, the verbatim-language test will return false negatives — buyers have not learned the language yet. Run the diagnostic 12 months in, not at launch.

The honesty matters. A framework that pretends to apply universally is a framework you cannot trust on the cases where it does apply.

## Run the diagnostic

If anything in this essay described a pattern you have been watching for two quarters without naming, the next move is the Relevancy Audit skill in the Resilience Stack repo: [github.com/Petrichor-Projects/resilience-stack](https://github.com/Petrichor-Projects/resilience-stack) — `skills/positioning/relevancy-audit`. Five-question quiz returns your stage assessment and top 3 actions. The Loom walkthrough shows the full audit in 12 minutes. Next week's kit: `revenue-story-audit` — what happens to your revenue narrative when positioning decays underneath it.

*— Phil, Petrichor Projects*

*Resilience Stack v1.5 Kit 1 · CC BY 4.0 · 2026-05-12*
