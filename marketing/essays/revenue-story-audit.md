# When +120% Means +47%: Forecast Integrity Before Series C

The CEO opened the board deck the way every CEO opens a Series C kickoff deck. Slide one: company name. Slide two: the number. Plus one hundred twenty percent year-over-year. The room nodded. The investors on the line — two existing backers, three new logos in diligence — nodded. The CFO did not nod. The CFO knew the trailing four quarters said plus forty-seven. He knew the plus one twenty was extrapolated from one strong quarter that had been driven, in part, by a single customer renewal that was unlikely to repeat. He did not raise it. Nobody did. The deck moved to slide three.

That gap — the gap between the number on the slide and the number in the data — is what kills Series C rounds. Not in the meeting. In diligence. Six weeks later, when a junior associate at the lead fund runs a cohort analysis and finds that the company's stated NRR of one hundred fifteen is actually ninety-six, and that the top customer is twenty-two percent of revenue, and that the partner referral channel claimed in the deck has gone silent for ninety days. The associate writes a memo. The memo costs one to two turns of valuation. Sometimes it costs the round.

This essay is about why that gap forms, why nobody in the building catches it before diligence does, and what to do about it before the deck goes external.

## The pattern behind the failure

I have run versions of this conversation more than twenty times across Petrichor engagements heading into raises and board resets. The cast changes — Series B fintech, growth-stage vertical SaaS, marketplace approaching IPO — but the shape is the same.

A revenue narrative is written at a specific moment. A board deck, an investor update, a sales pitch. The narrative is calibrated to a real moment, with real trailing numbers, real channel mix, real cohort behavior. It works. The company grows. Twelve months in, the team has rebuilt the deck three times but never re-derived the underlying assumptions. Outbound, which was thirty percent of pipeline at the time the narrative was written, is now claimed at sixty percent because the sales leader's gut says it is — and the dashboards are not granular enough to contradict the gut. Eighteen months in, the forecast on the board deck has been carried forward as a target, then defended as a baseline, then quoted as a fact. Twenty-four months in, the NRR number on slide twelve is whatever number "feels right" given the customers leadership has been talking about most often in the all-hands.

Nothing in the system fires an alarm. Revenue-narrative decay does not crash. The CFO's model still opens in Excel. The CRM still runs. The numbers still get reported in the board meeting. And nobody in the building has put the trailing data and the forward narrative side by side on the same page in nine months.

This is the failure mode the foundational thesis of the Resilience Stack — `docs/manifesto.md` — calls "the discipline of noticing decay." The revenue-narrative version is the most expensive instance because the audience for the broken narrative is the audience that controls the next valuation event.

> The most expensive sentence in fundraising is "the deck is locked." What it usually means is "the deck is locked in a shape the trailing data no longer supports."

## The framework — the Revenue Narrative Gap

The Revenue Story Audit ([skills/growth/revenue-story-audit](https://github.com/Petrichor-Projects/resilience-stack)) is built on a single load-bearing concept: the Revenue Narrative Gap. Distance between the story you tell — the deck, the investor update, the sales pitch — and the mechanics of how revenue actually works inside the business. The gap is measurable. It closes through a reconciled two-version artifact: the Internal-Honest version (full mechanics, including the parts that are uncomfortable) and the Externally-Defensible version (everything in the first version that survives diligence). The two versions are not aspirational and operational. They are honest and survivable.

April Dunford has written about positioning as the work of choosing the context buyers use to evaluate you. The revenue-narrative version is the same move applied to the investor and board audience: the context the buyer of your equity uses to evaluate the trajectory. When that context is off, every downstream conversation is corrupted.

The audit runs nine segments. Three are load-bearing.

**The $1 Trace.** Pick a single dollar from last quarter. Trace it from origin to recognition. Document every assumption along the way. Most narratives die here. The dollar you trace is "outbound" on the channel sheet and turns out to be a partner-sourced renewal where the partner stopped returning emails three months ago. One dollar surfaces a dead referral channel that the deck still claims as active.

**The Board Deck Lie Detector.** Line by line, classify each revenue claim in the deck as verified, extrapolated, hopeful, or wrong. No claim survives without a traceable dollar. Forecasts based on "the team is bullish" are downgraded to hopeful until evidence is supplied. The output is a marked-up deck where every line carries one of four labels.

**The Uncomfortable Metric Anonymous Reveal.** Each member of leadership writes, anonymously, the one metric they hope nobody asks about in the next investor conversation. The reveal is anonymous because the answer matters more than who said it. In three of every four NorthStack-shape engagements I run, three of four leaders write the same metric. That metric is the diagnosis.

The output of the audit is the two-version reconciliation. Internal-Honest is the full picture, including the partner channel that died, the NRR that is actually ninety-six, and the customer concentration nobody had named out loud. Externally-Defensible is the subset that survives diligence questioning — every number documented, every assumption sourced, every risk surfaced before the associate writes the memo. The reconciliation is not a softening. It is a clarification.

> A revenue narrative that has not survived a $1 Trace is not a narrative. It is a hope.

## A worked example — the NorthStack case

NorthStack is an anonymized composite, not a single client. Fintech operations layer for mid-market neobanks. Twenty million ARR. Series B closed eighteen months ago, prepping Series C in ninety days. The numbers are real.

In the room: Founder/CEO, CFO, Head of Sales, Head of Product. Pre-work: four quarters of revenue by customer, channel, product, geography, and cohort. The two most recent board decks. The current sales pitch. Top 5 expansion deals and top 5 churn losses with reasons. Engagement time: 2.5 hours.

The audit classified NorthStack at **Tier 2 — Inflated, borderline Tier 3 Critical.** Four findings were load-bearing.

1. **The forecast was extrapolated, not derived.** The deck claimed plus one hundred twenty percent year-over-year, anchored on one strong quarter. Trailing four quarters delivered plus forty-seven. Classified by the Lie Detector as hopeful, not verified. The plus one twenty was carried forward across three board meetings without anyone re-running the math against trailing data.

2. **The top customer was twenty-two percent of revenue.** Top ten customers were sixty-four. The deck described the customer base as "diversified across mid-market neobanks." The concentration heat map showed otherwise. Without a mitigation plan, this line would appear as a key-customer-dependency risk factor in any term sheet.

3. **Outbound was claimed at sixty percent, actual was forty.** The sales leader had been quoting sixty for four quarters. When channel attribution was recoded against source data — actual call logs, actual inbound form submissions, actual partner-sourced opportunities — the real number was forty. The other twenty percent the deck called "outbound" was partner referral and inbound that had been miscoded by reps.

4. **NRR claimed bullish at one hundred fifteen, actual cohort math was ninety-six.** Three champion accounts had expanded sharply. The deck pointed at them. The cohort across all customers told a different story. The Uncomfortable Metric reveal: three of four leadership members wrote "NRR" as the metric they hoped no one asked about.

The two-version reconciliation closed the gap. The Externally-Defensible version went into the deck with the forecast revised to a defensible plus sixty-five, the concentration risk surfaced with a named twelve-month mitigation plan, the channel mix recoded against source data, and NRR re-stated against cohort math with a quarter-over-quarter trend line.

Series C closed at the target valuation. The associate's memo flagged concentration and noted that the company had identified and mitigated it pre-diligence. The narrative that survived the room was the one that had already survived the audit.

## What goes wrong without this framework

Companies notice when something feels off in the deck. They almost always notice it. What they do next is where the round is lost.

**One — they paper over the gap.** The CFO knows. The CEO knows. Neither raises it because the deck is "locked" and changing it now would signal weakness to the board. The deck ships externally. Six weeks later the associate's memo arrives. Valuation drops. The cost of not raising it internally is paid externally by everyone in the cap table.

**Two — they "tighten the story" without re-deriving the mechanics.** A new VP Finance is hired or a fractional CFO is brought in to "clean up the metrics." The deck gets new charts. The same hopeful numbers get prettier visualizations. The $1 Trace is never run. The Lie Detector is never applied. The decay is re-skinned, not addressed. This is the revenue-narrative version of "rebrand season."

**Three — they raise on the inflated narrative and pay later.** The round closes. Twelve months in, the trailing data still does not match the forecast that closed the round. The next board meeting becomes a postmortem. The CEO spends the next two quarters defending instead of building. The cost of the gap shows up not in valuation but in CEO calendar — months of meetings re-explaining numbers that should have been reconciled before they were promised.

In all three failure modes, the team is working hard. They are not malicious. They are running a planning loop that does not include the actual gap between story and mechanics. The thing that needs reconciling is the reconciliation discipline itself.

## When this framework does NOT apply

The Revenue Story Audit is not a universal tool. Three conditions under which running it produces noise instead of signal:

- **Pre-revenue companies.** No story-vs-mechanics gap to audit yet. You have a hypothesis and a model. The work is `customer-truth-extraction` and `pricing-authority-diagnostic`, not this one.
- **No 4-quarter segmented data.** The audit is evidence-required. Without revenue segmented by customer, channel, product, geography, and cohort across four quarters, the $1 Trace cannot be run honestly. Build the data layer first.
- **Public companies bound by Reg FD.** Narrative reconciliation may create disclosure obligations. The reconciliation work still gets done, but it is run by securities counsel, not by an open-source audit framework.

The honesty matters. A framework that pretends to apply universally is one you cannot trust on the cases where it does apply.

## Run the diagnostic

If anything in this essay described a pattern you have been watching without naming — the trailing numbers diverging from the deck, the NRR claim nobody is willing to defend in detail, the channel breakdown that has become a sentence instead of a spreadsheet — the next move is the Revenue Story Audit skill in the Resilience Stack repo: [github.com/Petrichor-Projects/resilience-stack](https://github.com/Petrichor-Projects/resilience-stack) — `skills/growth/revenue-story-audit`. Five-question quiz returns your tier assessment and top 3 actions. The Loom walkthrough shows the full audit in five minutes. Next week's kit: `competitive-narrative-stress-test` — what happens when you take your reconciled story and run it head-to-head against the strongest counter-narrative in your category.

*— Phil, Petrichor Projects*

*Resilience Stack v1.5 Kit 2 · CC BY 4.0 · 2026-05-26*
