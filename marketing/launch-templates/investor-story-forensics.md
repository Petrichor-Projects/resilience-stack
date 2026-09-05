# Launch Copy — investor-story-forensics

## Launch metadata
- Kit: investor-story-forensics
- Launch date: 2026-06-16 (Week 5 Monday — FINAL kit of v1.5)
- Quiz URL: {{tally-url}}
- Video URL: {{loom-url}}
- Essay URL: petrichorgrowth.com/blog/investor-story-forensics
- Repo path: skills/investor/investor-story-forensics

---

## X / Twitter thread (12 tweets)

**Tweet 1 (hook)**
Your deck says 130% NRR. Your trailing four-quarter NRR is 117. Both are true. Only one survives diligence. The other ends the round. Most Series C founders are pitching the 130 and have not yet had the conversation with their CFO about the 117. Here's what to do about it.

**Tweet 2 (symptom)**
Pattern across 12+ Petrichor investor-narrative engagements: the deck was written 18mo ago at the peak quarter. Trailing caught up. Reference customers rotated champions. The bear case is still unwritten. None of it visible from the inside until a partner runs the model.

**Tweet 3 (frame)**
There's a framework — the Forensic Diligence Stack. 5 protocols — Claim-Evidence Audit, Cross-Examination, Split-Room Test, Investor Archetype Calibrator, QoE Pre-Mortem. Composite Narrative Integrity 0-30. The kit forces you to face the partner's diligence before they run it.

**Tweet 4 (claim-evidence)**
Move 1 — Claim-Evidence Audit. Score every load-bearing claim 0-3. 0 = no trailing evidence. 1 = anecdotal. 2 = one source. 3 = multi-source defensible. Most decks score 12-18 of 30 on first pass. Vulnerable. The score is what the founder hands the CFO Wednesday.

**Tweet 5 (split-room)**
Move 2 — Split-Room Test. Split your leadership in half. Each half tells the story for 30 min. Note every divergence. Aperture: sales defended +95% growth, finance defended +68%. Both halves believed they were telling the truth. The partner would hear stereo.

**Tweet 6 (QoE pre-mortem)**
Move 3 — QoE Pre-Mortem. Before the data room opens, simulate the report. Where will the cohort analysis re-classify a paused pilot as churn? Where will working capital normalization surface a one-time tailwind? Read the simulated report. Make the fixes. Open the room knowing.

**Tweet 7 (case)**
Real case (anonymized composite): Aperture. Industrial QA SaaS. $42M ARR. 10-12mo from Series C targeting $1.5B. Deck claimed 130% NRR, 14/25 OEMs, +95% growth. Trailing: 117% NRR, 11/25 OEMs active (3 paused pilots), +68% growth. 38% pilot churn in non-automotive vertical.

**Tweet 8 (proof, pre)**
Pre-rebuild Narrative Integrity: 14/30. Vulnerable. NRR row 0/3 — deck and trailing told different stories. +95% growth row 0/3 — claimed J-curve, trailing was linear. 2 of 5 named references had champion changes nobody had tracked.

**Tweet 9 (proof, post)**
Post-rebuild: 21/30. Defensible. +7 lift, above the 30% threshold. NRR slide became "117% trailing-four-quarter, 130% peak-quarter, named cohort decomposition." Growth slide became "+95% run-rate, +68% trailing, J-curve thesis with named pipeline anchors." Both numbers, labeled.

**Tweet 10 (outcome)**
6 months later Aperture opened the data room to a friendly first-look partner running an informal QoE pre-mortem. The reconciliation took 11 minutes instead of 3 days because every gap was already named on the slide that created it. Same business. Different surface.

**Tweet 11 (quiz CTA)**
5 questions, 90 seconds. Returns your Narrative Integrity tier + top 3 reconstruction actions for the next 30 days. {{tally-url}}

**Tweet 12 (kit + repo CTA + v1.5 milestone)**
Investor Story Forensics — Kit 5, the final kit of Resilience Stack v1.5. CC BY 4.0. Runs in any modern AI. github.com/Petrichor-Projects/resilience-stack. v1.5 is now live — manifesto + 5 polished kits. Bookmark if you're 8-14 months from a Series B or C.

---

## LinkedIn long-form (1500 words)

A founder I know opened her Series C deck on a Tuesday morning. The NRR slide read 130 percent. Her CFO, in the same room, knew the trailing-four-quarter number was 117. Both were true. The 130 was the peak quarter from Q2 2025, driven by a marquee expansion that did not repeat. The 117 was the boring trailing average that the QoE provider would produce on day three of diligence and the conviction partner would type into the model on day five.

Her instinct was to hold the 130. It was the number the company believed about itself, the number that supported the valuation she had told her employees about. Her CFO's instinct was to caveat the 130 with a footnote and hope the footnote held. Eight months later the round closed at one and a half turns below the target valuation. The lead partner's diligence memo cited "narrative inconsistency between Section 3 of the deck and Section 4 of the data room." She read that line and recognized, retroactively, what the audit she had not run would have caught.

I have watched versions of this story play out more than a dozen times. The cast changes — vertical SaaS prepping Series B, infra company prepping Series C, application company that thought the next round would be a victory lap — but the shape is identical. A deck is written at a specific moment, against a specific peak quarter, using a specific set of reference customers and a specific bear case the team believes is the right one. It works. The company raises. Twelve to twenty months later, the same deck is still being pitched against a trailing dataset that has fully caught up with the snapshot, reference customers who have rotated champions, and a bear case the team has never bothered to write.

Three structural drifts produce the failure. Investor narratives drift toward best-quarter framing — the peak number gets pitched, lands, survives into the next deck. Reference customer arcs rot between fundraises — champions leave, contracts pause, the deck still names them. Bear cases get written by teams that hope nobody asks — the first time the founder reads the bear case is the first time the lead partner emails it.

**The Forensic Diligence Stack — 5 protocols, composite Narrative Integrity 0-30**

The Investor Story Forensics skill in our open-source Resilience Stack repo is built on five load-bearing protocols. Each closes a specific gap between the pitched narrative and the auditable narrative.

**Move 1 — Narrative Due Diligence Protocol.** Walk every load-bearing claim in the deck back to its trailing-four-quarter source. Score each claim against a 0-3 Claim-Evidence rubric. 0 means no trailing evidence. 1 means anecdotal. 2 means one verifiable source. 3 means multi-source defensible. Composite Narrative Integrity lands between 0 (every claim is folklore) and 30 (every claim survives forensic examination). Most decks score 12-18 on first pass. Vulnerable. Cracking.

**Move 2 — Cross-Examination Protocol.** The skill speaks in the partner's voice, not the founder's. It asks the questions a partner with twenty years of pattern-matching would ask. How do you reconcile NRR claimed with NRR trailing. What is the shape of the growth curve under the J-curve assumption. What happens to the multiple if the trailing number is the right one. The founder defends in real time. The defenses that hold get logged. The defenses that crumble get logged louder.

**Move 3 — Split-Room Test.** Split the leadership team in half. Each half tells the company story independently for thirty minutes — same audience, same questions. Note every divergence. Brad Feld has written that founders should write the memo their investor would write against them, before the investor writes it. Almost no founder does it. The Split-Room is the operational version — divergence is the bear case the team is collectively writing without realizing they are writing it.

**Move 4 — Investor Archetype Calibrator.** The platform-fund partner asks different questions than the growth-fund lead, who asks different questions than the conviction-driven sector specialist. The skill rehearses the narrative against each archetype. The same deck is Defensible against one archetype and Vulnerable against another. The calibration matters because the wrong room kills rounds the right room would have funded.

**Move 5 — QoE Pre-Mortem.** Before the data room opens to a real QoE provider, simulate the report. Where will the GAAP reconciliation surface a soft revenue policy. Where will the cohort analysis re-classify a churned account as paused. Where will working capital normalization surface a one-time tailwind. Read the simulated report. Make the fixes. Open the data room knowing.

**Sample deliverable — what the matrix says verbatim**

A line lifted directly from the latest forensic-audit deliverable: *"NRR Claim: 130% (deck, slide 7). Trailing-four-quarter NRR: 117% (data room, cohort tab). Verdict: 0/3 — the snapshot has been framed as steady-state; the trailing reconciliation will be Section 1 of the partner's first diligence memo."*

The deliverable is not a narrative. It is a forensic scorecard with a Claim-Evidence verdict for every load-bearing claim, a composite Narrative Integrity score, a before/after lift, and three named reconstruction actions with owners and deadlines.

**A worked case — Aperture, industrial QA SaaS, $42M ARR**

Anonymized composite. Industrial QA SaaS for automotive and aerospace manufacturers. $42M ARR. Series B closed 20 months ago, 10-12 months from Series C targeting $1.5B. The CFO requested the audit. The CEO was skeptical until the third hour.

In the room: Founder/CEO, CFO, Head of Sales, Head of Customer Success, Head of Product. Pre-work: current investor deck, trailing four quarters of operating data with cohort breakdown, the five named reference customers with last-contact dates and contract status. Engagement time: three hours.

The Claim-Evidence Matrix scored 14/30. Vulnerable.

NRR row: 0/3. Deck claimed 130%. Trailing-four-quarter, pulled from the data room cohort analysis in the meeting, was 117%. OEM row: 1/3. Deck named 14 of 25 OEM accounts as customers. Active production deployments were 11 of 25 — three of the fourteen were paused pilots, logged in the CRM as active accounts, that the head of sales had stopped reporting on. The reference for one of those three had moved to a different role five months earlier. +95% growth row: 0/3. Trailing growth was +68%. The Split-Room Test produced visible divergence on this exact line. Sales defended +95% as realistic. Finance defended +68% as the base case. Both halves of the room realized in real time that they had been telling the partner a story they could not agree on internally. Non-automotive vertical had a 38% pilot churn rate that had never been surfaced in a board meeting.

The reconstructed Investor Narrative Brief shipped at the end of the session. NRR became "117% trailing-four-quarter, 130% peak-quarter, with named cohort decomposition." OEM became "11 of 25 in active production, 3 of 25 in paused pilot, with named pipeline conversion thesis." Growth became "+95% run-rate, +68% trailing, J-curve forward thesis with five named pipeline anchors and a 12-month conversion milestone." Two reference customers with champion changes were replaced with two whose champions Aperture had actually called inside the previous 30 days.

Post-rebuild Narrative Integrity: 21/30. Defensible. +7 lift, well above the 30% rebuild threshold the skill enforces. Aperture opened the data room six months later to a friendly first-look partner. The reconciliation conversation took 11 minutes instead of 3 days because every gap had already been named on the slide that created it.

**What goes wrong without this framework**

One — founders hold the peak number. The partner runs the trailing model in week two. The reconciliation conversation becomes the framing of the entire diligence. The valuation drops one or two turns.

Two — founders let the bear case get written by the lead partner. The IC produces a memo naming weaknesses the founder has never named internally. The deal does not happen. The founder reads a polite sanitized rejection and never learns what the bear case actually said.

Three — founders walk into the QoE blind. The QoE lands on a Monday and produces the first reconciliation by Friday. By the following Monday the round is in repricing conversation. Bill Gurley has written that the only thing more expensive than a bad fundraise is a bad fundraise you did not prepare for. The QoE Pre-Mortem segment is the version of that preparation you can run before the QoE lands.

**Why most CFOs miss this**

The CFO function is structurally biased against running this audit. The CFO owns the data room. The data room produced the trailing numbers that contradict the deck. Running a forensic audit that scores the deck's claims as 0/3 is, structurally, the CFO auditing the CEO. The work has to come from outside the executive boundary — either a board member willing to push, an external facilitator whose only deliverable is the Claim-Evidence Matrix and the reconstructed brief, or a structured kit the team can run on themselves before the partner runs it on them. Self-audit is the version that almost works. Most pre-fundraise prep cycles produce prettier decks because that is what the deck designer can scope without auditing the claims underneath.

**When the framework does NOT apply**

Already inside diligence with under 14 days to a term sheet — too late, use targeted deck coaching. Pre-product companies raising on team and vision only — no narrative-versus-data gap to audit. Insider rounds with existing investors who already know the warts. Companies in the middle of restating financials — fix the financials first.

**The kit, the quiz, and the milestone**

The full Investor Story Forensics skill is in the Resilience Stack repo at github.com/Petrichor-Projects/resilience-stack under skills/investor/investor-story-forensics. CC BY 4.0. Runs in any modern AI assistant.

5-question quiz returns your Narrative Integrity tier assessment and top 3 reconstruction actions: {{tally-url}}

Full essay with worked example and framework deep-dive: petrichorgrowth.com/blog/investor-story-forensics

This is Kit 5 — the final kit — of Resilience Stack v1.5. The full release is live: manifesto plus five polished kits across positioning, pricing, and investor narrative.

*— Phil, Petrichor Projects*

---

## Substack / blog post

This is the canonical version of the essay. Published at: **petrichorgrowth.com/blog/investor-story-forensics**

**Teaser excerpt (for Substack preview):**

The CEO opened the Series C deck on a Tuesday morning. The NRR slide read 130 percent. The CFO, in the same room, knew the trailing-four-quarter number was 117. Both were true. The 130 was Q2 2025, the peak quarter, the one that closed a marquee expansion that did not repeat. The 117 was the boring trailing average that the QoE provider would produce on day three of diligence.

The CEO's instinct was to hold the 130. Eight months later the round closed at one and a half turns below the target valuation. The lead partner's diligence memo cited "narrative inconsistency between Section 3 of the deck and Section 4 of the data room" as the single largest reason the firm did not lead.

**[Read the full essay at petrichorgrowth.com/blog/investor-story-forensics →](https://petrichorgrowth.com/blog/investor-story-forensics)**

The canonical artifact lives in the repo at `marketing/essays/investor-story-forensics.md`. Substack and LinkedIn versions carry rel-canonical pointing back to petrichorgrowth.com/blog/investor-story-forensics so search consolidates on the Petrichor site.

**Footer:**
*— Phil, Petrichor Projects · Resilience Stack v1.5 Kit 5 (FINAL) · CC BY 4.0 · [github.com/Petrichor-Projects/resilience-stack](https://github.com/Petrichor-Projects/resilience-stack) · Kit path: skills/investor/investor-story-forensics · Quiz: {{tally-url}}*

---

## Email blast (415 words)

**Subject line A:** The reference call you haven't rehearsed.

**Subject line B:** When +130% NRR becomes +117%.

**Body:**

A founder I know opened her Series C deck on a Tuesday. The NRR slide read 130%. Her CFO knew the trailing-four-quarter number was 117. Both were true at the moment they were measured. The 130 was the peak quarter — Q2 2025, a marquee expansion that did not repeat. The 117 was the trailing average a QoE provider would produce on day three of diligence.

She held the 130. Eight months later the round closed one and a half turns below target. The lead partner's diligence memo cited "narrative inconsistency between Section 3 of the deck and Section 4 of the data room." She read that line and recognized, retroactively, what the audit she had not run would have caught.

This week's Resilience Stack kit — Investor Story Forensics — is the diagnostic that catches the gap between the pitched narrative and the auditable narrative ten months before the partner meetings start. It runs on five protocols. The Claim-Evidence Audit scores every load-bearing claim 0-3, producing a composite Narrative Integrity score of 0-30. The Cross-Examination Protocol asks every question a partner with twenty years of pattern-matching would ask. The Split-Room Test surfaces internal story divergence the partner would hear in stereo. The Investor Archetype Calibrator rehearses against three archetype rooms. The QoE Pre-Mortem simulates the report before the data room opens.

The skill enforces a +30% Narrative Integrity lift or it rejects the rebuild.

What you get when you open the kit:

- The full investor-story-forensics skill markdown (runs in any modern AI assistant)
- Five sample deliverables from a real anonymized engagement (Aperture, $42M ARR industrial QA SaaS, Series C prep)
- The Claim-Evidence Matrix with 0-3 scoring across the top 15 load-bearing claims
- The evals suite the skill is tested against
- A case study showing 14/30 Vulnerable lifted to 21/30 Defensible in a single 3-hour session, with the data room opening 6 months later to an 11-minute partner reconciliation

The five-question quiz returns your Narrative Integrity tier and the top three reconstruction actions for the next 30 days. It takes 90 seconds.

This is Kit 5 of Resilience Stack v1.5 — the final kit. The full v1.5 release is live: manifesto plus five polished kits across positioning, pricing, and investor narrative. If you are 8-14 months from a Series B or C raise, this is the audit to run before you open the data room.

[Take the quiz →]({{tally-url}})

*— Phil, Petrichor Projects*
