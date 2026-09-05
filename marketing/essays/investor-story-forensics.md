# When +130% NRR Is +117%: The Cherry-Pick That Kills Series C

The CEO opened the Series C deck on a Tuesday morning. The NRR slide read 130 percent. The CFO, in the same room, knew the trailing-four-quarter number was 117. Both were true. Both had been true at the moment they were measured. The 130 was Q2 2025, the peak quarter, the one that closed a marquee expansion that did not repeat in Q3 or Q4. The 117 was the boring trailing average that the QoE provider would produce on day three of diligence and that the conviction partner would type into the model on day five.

The CEO's instinct was to hold the 130 because that is the number the company believed about itself, the number the team had earned through twelve hard months, the number that supported the valuation the founders had told their employees about. The CFO's instinct was to caveat the 130 with a footnote — "based on cohort analysis" — and hope the footnote held. The board's instinct, when the deck circulated, was to do nothing because nobody on the board was the one who had to defend the slide on a partner call.

Eight months later the round closed at one and a half turns below the target valuation. The lead partner's diligence memo cited "narrative inconsistency between Section 3 of the deck and Section 4 of the data room" as the single largest reason the firm did not lead. The CEO read that line and recognized, retroactively, what the audit they had not run would have caught.

## The pattern behind the failure

I have watched versions of this story play out more than a dozen times across Petrichor engagements and through the post-mortems founder friends share at midnight after a round has cleared or collapsed. The cast changes — vertical SaaS prepping Series B, infra company prepping Series C, application company that thought the next round would be a victory lap — but the shape is identical. Three structural drifts produce the failure.

**Investor narratives drift toward best-quarter framing.** A peak number gets pitched in a partner meeting, lands, and survives into the next deck. The team remembers the peak; the trailing data quietly catches up to the snapshot eighteen months later. Nobody is lying. Nobody is even cherry-picking on purpose. The cherry was just the number on the slide last time, and last time worked.

**Reference customer arcs rot between fundraises.** The deck names five reference customers. At the time of the last round, all five would have confirmed the story. Twelve months later, two of them have had champion changes the founder has not tracked. One has paused expansion. One has churned a use case. The deck still names them. The diligence call still places them. The reference call surfaces the rot that the founder did not surface first.

**Bear cases are written by teams that hope nobody asks.** Every credible investor narrative has, somewhere inside it, the short thesis a sophisticated partner would write against it. Most companies have never written that short thesis. The first time the founder reads the bear case is the first time the lead partner emails it, and by then it is no longer a draft, it is the deal-killing memo.

This is the failure mode the foundational thesis of the Resilience Stack — `docs/manifesto.md` — calls "the discipline of noticing decay." The investor-narrative version is the most expensive instance because the audience for the broken narrative is the audience that funds the next round. Brad Feld has written that founders should "write the memo your investor would write against you, before they write it" — every founder agrees that this is correct, and almost no founder does it. The investor-story-forensics skill is the operational version of that one sentence.

> A narrative that cannot survive the partner asking "and what is the trailing number?" is not a narrative. It is a forward-looking statement.

## The framework — the Forensic Diligence Stack

The Investor Story Forensics kit ([skills/investor/investor-story-forensics](https://github.com/Petrichor-Projects/resilience-stack)) is built on five load-bearing protocols that run in sequence. Each one closes a specific gap between the pitched narrative and the auditable narrative.

**Narrative Due Diligence Protocol.** Walk every load-bearing claim in the investor deck back to its trailing-four-quarter source. Score each claim against a 0-3 Claim-Evidence rubric — 0 means no trailing evidence, 1 means anecdotal, 2 means one verifiable source, 3 means multi-source defensible. A composite Narrative Integrity score of 30 lands between 0 (every claim is folklore) and 30 (every claim survives forensic examination). Most decks the kit is run against score between 12 and 18 on first pass. Vulnerable. Cracking.

**Cross-Examination Protocol.** The skill speaks in the partner's voice, not the founder's. It asks the questions a partner with twenty years of pattern-matching would ask — how do you reconcile NRR claimed with NRR trailing, what is the shape of the growth curve under the J-curve assumption, what happens to the multiple if the trailing number is the right one. The founder defends in real time. The defenses that hold get logged. The defenses that crumble get logged louder.

**Split-Room Test.** The leadership team splits in half. Each half tells the company story independently for thirty minutes — same audience, same questions. The facilitator notes every divergence. The Aperture case study below produced a Split-Room divergence on the +95 percent growth number — sales told the story as "realistic, the pipeline supports it" and finance told it as "stretch case, base case is +68." Both sides believed they were telling the truth. They were both telling pieces of a story the partner would hear in stereo and not believe.

**Investor Archetype Calibrator.** The platform-fund partner asks different questions than the growth-fund lead, who asks different questions than the conviction-driven sector specialist. The skill rehearses the narrative against each archetype in turn. The same deck is Defensible against one and Vulnerable against another. The calibration matters because the wrong room kills rounds that the right room would have funded.

**QoE Pre-Mortem.** Before the data room opens to a real QoE provider, the skill simulates the report. Where will the GAAP reconciliation surface a soft revenue policy. Where will the cohort analysis surface a churned account misclassified as paused. Where will the working capital normalization surface a one-time tailwind that has been pitched as recurring. The founder reads the simulated report, makes the fixes, and opens the data room knowing what the real report will say.

Marc Andreessen has argued that a founder's most important fundraise skill is "the ability to see your own company the way a hostile investor would see it on the day they wrote the check, and again on the day they have to mark it down." The kit is the operationalization of seeing both days at once.

## A worked example — the Aperture case

Aperture is an anonymized composite, not a single client. Industrial QA SaaS for automotive and aerospace manufacturers. Forty-two million ARR. Series B closed twenty months ago, ten to twelve months out from a Series C raise targeting a one-and-a-half-billion-dollar valuation. The CFO requested the audit. The CEO was skeptical until the third hour.

In the room: Founder/CEO, CFO, Head of Sales, Head of Customer Success, Head of Product. Pre-work: the current investor deck, the trailing four quarters of operating data with cohort breakdown, the five named reference customers with last-contact dates and contract status, the public competitive landscape, and the most recent board deck. Engagement time: three hours.

The Claim-Evidence Matrix scored fourteen out of thirty. **Vulnerable.** Three findings were load-bearing.

The NRR row scored zero of three. The deck claimed 130 percent. The trailing-four-quarter number, pulled from the data room cohort analysis in the meeting, was 117. The 130 was a single-quarter snapshot from Q2 2025 driven by a marquee expansion that did not repeat. Neither number was a lie. The deck had not yet acknowledged that the 117 was the number a QoE would produce.

The OEM row scored one of three. The deck named 14 of 25 named OEM accounts as customers. Active production deployments were 11 of 25. Three of the fourteen were paused pilots, logged in the CRM as active accounts, that the head of sales had stopped reporting on because the conversations had gone quiet. The reference for one of those three had been moved to a different role at the OEM five months earlier. Nobody had updated the reference list.

The +95 percent growth row scored zero of three. The trailing number was +68. The +95 was the forward-base-case the team had pitched as the actual growth rate. The Split-Room Test produced visible divergence on this exact line — sales defended +95, finance defended +68, and both halves of the room realized in real time that they had been telling the partner a story they could not agree on internally. The non-automotive vertical, which the deck pitched as the second engine of growth, had a 38 percent pilot churn rate that had never been surfaced in a board meeting.

The reconstructed Investor Narrative Brief shipped at the end of the session. The NRR slide became "117 percent trailing-four-quarter, 130 percent peak-quarter, with named cohort decomposition." The OEM slide became "11 of 25 in active production, 3 of 25 in paused pilot, with named pipeline conversion thesis." The growth slide became "+95 percent run-rate, +68 percent trailing, J-curve forward thesis with five named pipeline anchors and a 12-month conversion milestone." The two reference customers with champion changes were replaced with two whose champions Aperture had actually called inside the previous 30 days.

Post-rebuild Narrative Integrity scored twenty-one out of thirty. **Defensible.** Seven-point lift, well above the thirty-percent rebuild threshold the skill enforces. Aperture opened the data room six months later to a friendly first-look partner. The partner ran an informal QoE pre-mortem against the deck. The reconciliation conversation took eleven minutes instead of three days because every gap had already been named on the slide that had created it.

## What goes wrong without this framework

Companies do notice when the pitched story and the auditable story drift apart. They almost always notice it. What they do next is where the round, or the multiple, is lost.

**One — they hold the peak number.** The deck keeps pitching 130 NRR. The partner runs the trailing model in week two. The reconciliation conversation becomes the framing of the entire diligence. The valuation drops one or two turns. The round closes, but the founder spends the next three years explaining the gap to the new investors. This is the most common failure I see, and it is the most expensive on a dollars-per-hour-of-prevention basis.

**Two — they let the bear case get written by the lead partner.** The lead partner runs the company through their internal investment committee and produces a memo. The memo names the weaknesses the founder has never named internally. The IC passes. The deal does not happen. The founder does not see the memo. The IC was right. The founder reads a sanitized version of the rejection in a polite email and never learns what the bear case actually said.

**Three — they walk into the QoE blind.** The QoE provider lands on a Monday and produces the first reconciliation by Friday. The reconciliation includes a re-statement of NRR, a churn re-classification of three paused pilots, and a flag on the working capital normalization. The founder reads the QoE for the first time in a Saturday morning email from the banker. By Monday the round is in repricing conversation. Bill Gurley has written that "the only thing more expensive than a bad fundraise is a bad fundraise you did not prepare for." The QoE pre-mortem segment of the skill is the version of that preparation you can run before the QoE lands.

In all three failure modes, the team is working hard. They are not malicious. They are running a fundraise loop that does not include the forensic vocabulary the partners are going to use the moment the round becomes real. The thing that needs reconciling is the discipline of running the forensic audit between rounds, not the night before.

## When this framework does NOT apply

The Investor Story Forensics kit is not a universal tool. Four conditions under which running it produces noise instead of signal.

- **Already inside diligence with under 14 days to a term sheet.** The audit is too late. The right tool is targeted deck coaching, not a full forensic reconstruction.
- **Pre-product companies raising on team and vision only.** No narrative-versus-data gap exists yet, so the forensic vocabulary has nothing to audit against.
- **Insider rounds with existing investors who already know the warts.** The existing investors have already priced in the gap. Forensic vocabulary creates friction without producing new signal.
- **Companies in the middle of restating their financials.** Fix the financials first. Run the audit against clean data, not data the company itself does not yet trust.

The honesty matters. A framework that pretends to apply universally is one you cannot trust on the cases where it does apply.

## Run the diagnostic

If anything in this essay described a pattern you have been watching without naming — the NRR slide that has not been reconciled with the trailing number, the reference customers nobody has called in a quarter, the bear case sitting half-written in a Notion page nobody has opened — the next move is the Investor Story Forensics skill in the Resilience Stack repo: [github.com/Petrichor-Projects/resilience-stack](https://github.com/Petrichor-Projects/resilience-stack) — `skills/investor/investor-story-forensics`. Five-question quiz returns your tier assessment and top three actions. The Loom walkthrough shows the full forensic audit in five minutes. This is Kit 5 of the Resilience Stack v1.5 release — the final kit. The full v1.5 is live.

*— Phil, Petrichor Projects*

*Resilience Stack v1.5 Kit 5 · CC BY 4.0 · 2026-06-16*
