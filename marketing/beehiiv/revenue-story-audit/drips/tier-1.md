# Tier 1 Drip — Drifting (4–7)

**Publication:** Category Gravity (Beehiiv) — Series 01 Resilience Stack
**Trigger:** subscriber tagged `taken-revenue-story-audit-tier-1`
**Audience profile:** revenue narrative starting to slip, fixable internally, no engagement needed yet
**Goal:** ship kit, walk $1 Trace + Lie Detector, NorthStack case, 30-day re-test

---

## Email 1 — Day 2

**Subject:** Kit + the 9 audit segments, in order
**Preview:** Open it Monday. The audit works the same week.

Hi {{first_name}},

Tier 1 Drifting is the cheapest stage to close. One or two of the five mechanics moved. The pattern is not yet visible in the boardroom. The team has not raised a flag. You have 60–90 days to reset before the next board cycle locks in the drift.

The kit — [revenue-story-audit kit](https://github.com/Petrichor-Projects/resilience-stack/tree/main/skills/growth/revenue-story-audit). Block 2.5 hours. Bring the CEO, the CFO, and the head of sales. The audit does not work without all three in the room because the disconnect at Tier 1 usually lives between functional views of the same revenue.

The 9 segments, in order:

1. Forecast reconciliation (deck vs trailing-four-quarter)
2. Customer concentration trend (top-1, top-3, top-5, last 4 quarters)
3. Channel attribution audit (verifiable source data per channel)
4. NRR cohort breakdown (claimed vs cohort-anchored)
5. Single-points-of-failure inventory (named, with mitigation plans and owners)
6. Revenue mix decomposition ($1 Trace at the segment level)
7. Expansion-vs-renewal-vs-new classification (rev-rec rules audit)
8. Forecast-vs-trailing variance decomposition (where the variance is coming from)
9. Board deck claim-evidence audit (Lie Detector applied to every numbered claim)

Each segment is 15–20 minutes if the inputs are pre-staged. The kit's first page is the inputs checklist. Pre-stage before the session starts. Teams that skip this lose the first hour reconstructing data.

Tomorrow: how to run the $1 Trace in 30 minutes.

— Phil

---

## Email 2 — Day 4

**Subject:** $1 Trace in 30 minutes
**Preview:** Every dollar, walked to its source. The gap is the diagnostic.

Hi {{first_name}},

The $1 Trace is the single most diagnostic segment in the audit. It also fails most often in implementation because teams skip the verification step.

The protocol, 30 minutes:

**Minutes 0–10: pull the data.** Last quarter's revenue, broken down by customer × channel × product × motion (new / expansion / renewal). One row per customer-product-motion combination. Most CRM and rev-rec systems export this in 10 minutes. If yours does not, that is itself a finding — write it down.

**Minutes 10–20: walk every dollar.** Sum the rows. Compare to the reported quarter revenue. The difference is the trace gap. Investigate the gap in three places:

- Phantom expansion. Look for customers where the parent account shows expansion but the child account is a new logo on the same contract. This is one of the most common rev-rec errors and inflates expansion-as-percent-of-growth.
- Attribution collapse. Filter for customers tagged to a channel that does not match the actual source. Outbound-tagged customers who came through a partner referral are the common case.
- Renewal-vs-expansion conflation. Filter for "expansion" rows where the customer did not add seats, modules, or units. A pure price increase counted as expansion is the third common error.

**Minutes 20–30: write the trace report.** One page. Trace gap as % of revenue. Three rows describing the largest contributors to the gap. One recommended fix per row.

Anything above 5% of revenue in the trace gap is a flag. Above 10% means the rev-rec layer needs to be rebuilt before the next board reporting cycle.

Tomorrow: the Board Deck Lie Detector, line-by-line.

— Phil

---

## Email 3 — Day 7

**Subject:** The Board Deck Lie Detector — line-by-line classification rules
**Preview:** Three dimensions per claim. Three flags = Tier 1. Five flags = Tier 2.

Hi {{first_name}},

The Lie Detector is mechanical. The point is not to call anything a lie. The point is to surface which claims would not survive a QoE reconstruction, before someone external reconstructs them.

Pull the most recent deck you presented to the board, investors, or executives. For every claim that contains a number — every percentage, every dollar figure, every multiple — apply three dimensions.

**Dimension 1: Source.**

- Trailing four-quarter. Defensible.
- Best-quarter snapshot. Survivable if explicitly labeled. Flag if framed as steady-state.
- Projection. Survivable if explicitly labeled as forward and the methodology is documented. Flag otherwise.
- Estimate. Flag.

**Dimension 2: Method.**

- Written down somewhere a different team member can find. Defensible.
- Lives in someone's head. Flag.
- Spreadsheet that has been edited 11 times this year. Flag.

**Dimension 3: Survivability.**

- Would survive a QoE provider's reconstruction. Defensible.
- Would survive with caveats explained on the call. Survivable.
- Would not survive. Flag.

Score the deck. Anything flagged on two or three dimensions is a hard flag. Three hard flags in a 15-slide deck is Tier 1 Drifting. Five hard flags is Tier 2 Inflated. Seven hard flags is Tier 3.

Two operational rules:

1. The audit should be done by the person who did not build the slide. Self-coding fails because the author already knows the answer and unconsciously translates "best-quarter" into "trailing-four-quarter."
2. The flagged claims are the work, not the report. Each flag becomes either a reconciliation (rewrite the claim to its defensible version) or an explicit label (add "best quarter, March" or "estimated, methodology in appendix"). Do not delete claims to clear flags — that is sanitization, not reconciliation.

Friday: NorthStack at Tier 1.

— Phil

---

## Email 4 — Day 10

**Subject:** How NorthStack caught Tier 1 drift 60 days before Series C kickoff
**Preview:** Two segments flagged. Two leadership conversations. Five working days.

Hi {{first_name}},

NorthStack (fintech ops layer, $20M ARR, Series B + 14 months) ran the full audit 60 days before kickoff on a Series C planning cycle. Tier 1 going in. The team was confident in the forecast and uncertain about the NRR.

The audit found two flagged segments.

**Segment 1: NRR cohort breakdown.**

The deck claimed trailing-quarter NRR of 115%. The cohort-anchored number, rebuilt from raw customer data, was 96%. The 19-point gap was not deceptive — it was three things compounded.

- The deck NRR used a 12-month rolling window that included a two-month re-pricing initiative that had inflated revenue per customer temporarily.
- Cohort definitions used "customers active 12 months ago" rather than "customers signed in the cohort window," which double-counted churned customers.
- The denominator excluded a segment of customers that had been re-categorized as "professional services" mid-window.

Rebuilding the NRR claim under clean cohort definitions, with a clearly labeled window, took six working hours. The new claim was defensible to a QoE provider. The deck was updated. The NRR number presented at kickoff was the cohort-anchored 96%, not the deck's 115%. The board saw the reset. The leadership team had the reconciliation conversation with the board before the diligence team forced it.

**Segment 2: Single-points-of-failure inventory.**

The team listed three SPOFs from memory. The audit added two more they had forgotten — one customer at 22% of revenue with no named mitigation plan, and one channel partner whose contract was renewing in 90 days without an internal owner.

Both got named owners and 60-day mitigation plans. The Series C diligence call later that quarter started with the SPOF list, framed as "here are the five risks, here is the plan for each." Partners surfaced no new risks the team had not already named.

Total cost of catching Tier 1 60 days before kickoff: ~16 hours of senior team time over a two-week window. The Series C closed clean.

Tuesday: how to know your reconciliation actually closed the gap.

— Phil

---

## Email 5 — Day 14

**Subject:** How to tell whether your reconciliation actually closed the gap
**Preview:** The 30-day re-test is the only honest measure.

Hi {{first_name}},

Last email in the welcome arc.

The reconciliation feels good in the room. The team aligns on the new numbers. The deck gets updated. Everyone moves on. Two months later the same drift reopens because the underlying rev-rec rules or cohort definitions never got rewritten.

Re-test protocol, 30 days after reconciliation:

**1. Same five questions, same scoring.** Use the quiz form: [tally.so/r/aQAkJE](https://tally.so/r/aQAkJE). The point is the comparison to the original score, not the absolute number.

**2. Same data inputs, fresh window.** Pull forecast variance, concentration, channel attribution, NRR, and SPOF awareness from the 30 days after reconciliation. Not the week the team shipped — that window is too noisy.

**3. Score honestly.** If two or more mechanics improved versus your original, the reconciliation worked. The Tier 1 Drifting is closed. Resume the quarterly self-check.

**4. If less than two improved.** Two possibilities:

- The team rebuilt the deck without rebuilding the underlying rules. Rev-rec rules and cohort definitions live below the deck. If you fix the deck without fixing the rules, the same drift reopens in 90 days. Diagnostic: do you have a written rev-rec rules document, and was it updated as part of the reconciliation? Yes / no.
- The drift was at the data infrastructure layer, not the narrative layer. Your CRM and your rev-rec system have different definitions of "expansion" and the audit cannot close that gap with narrative work. Diagnostic: does your $1 Trace fail in the same place after the reconciliation? If yes, the work is data infrastructure, not narrative.

If less than two improved, escalate. Reply to this email or book the call — {{calendly-url}}.

Otherwise: keep the quarterly self-check on the calendar. Hear from me when I have something specific worth your inbox.

— Phil
Petrichor Projects · [petrichorgrowth.com](https://petrichorgrowth.com)

---

*Resilience Stack · Category Gravity Series 01 · CC BY 4.0 · Petrichor Projects*
