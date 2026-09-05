# When Three Board Members Ask The Same Question, Your Narrative Is Already Broken

The Q1 board meeting opened the way board meetings open when a company is two quarters from a Series B. The CEO ran the deck. Revenue was healthy. Pipeline was healthy. The slide that should have been celebratory — head-to-head win rate against a single new entrant — was not. Win rate had fallen from fifty-two percent in Q3 to thirty-one percent in Q1. Four of seven enterprise deals lost. The CEO had an explanation ready. The new entrant was discounting aggressively, and the cycle was about to turn.

Three board members independently asked the same question inside that meeting. None of them used the word "discounting." All three used the same word. "Why aren't we agentic?"

The CEO's instinct, when she called me the next morning, was to rewrite the narrative. The CFO's pushback, on a separate call thirty minutes later, was do not chase the language, fight on outcomes. Both of them were wrong. The narrative was not the problem. The narrative was the symptom. The problem was that nobody on the team had read the new entrant's full pitch deck in ninety days, and nobody had run a stress test against the most obvious counter-narrative the new entrant could deploy with unlimited budget. The competitive story Tessera was telling had not been pressure-tested in two quarters, and the room was now doing the pressure-testing for them, in public.

## The pattern behind the failure

I have run versions of this conversation more than fifteen times in the last two years. The cast changes — vertical SaaS facing a category re-framer, infrastructure player getting reclassified by Gartner, application company watching an AI-native entrant absorb their differentiation — but the shape is identical. The competitive narrative was written at a specific moment, against a specific set of competitors, in a specific buyer vocabulary. It worked. The company won. Twelve to eighteen months later, the same narrative is still being delivered. The competitors have shifted. The buyer vocabulary has shifted. The analyst frame has shifted. And nobody on the inside has noticed because every internal review of the narrative happens against a strawman version of the competitors that is six to twelve months stale.

Three structural drifts produce the failure.

**Narratives drift from buyer language.** Buyers stop saying "operating system" and start saying "data layer for agents." The deck keeps using "operating system" because that is what got the last round done. The buyer in the room nods politely and goes home and writes the memo against "data layer for agents." The deck never makes the buyer's shortlist because it is answering the wrong question.

**Sales-team sanitization.** Lost-deal post-mortems get optimized for sales-leader comfort. "We lost on price" gets logged when the real reason is "the new entrant's future-claim was more compelling and the rep could not defend ours past one follow-up question." Every lost-deal report that does not quote the buyer verbatim is sanitization. After two quarters of sanitization, the executive team is steering by a map that no longer matches the terrain.

**Future claims that do not survive "okay, but how."** Every competitive narrative has a future-state claim — what you are building toward, why the buyer should choose you for the next five years, not just the next twelve months. Most future claims collapse under a single follow-up question. The sales rep does not know the roadmap. The CEO has not rehearsed the answer. The buyer changes the subject. Silent disqualification has begun, and the narrative has no way to see it.

This is the failure mode the foundational thesis of the Resilience Stack — `docs/manifesto.md` — calls "the discipline of noticing decay." The competitive-narrative version is the most expensive instance because the audience for the broken narrative is the audience that funds the next round.

> A competitive narrative that has not been read against the competitor's best possible counter-narrative is not a narrative. It is a wish.

## The framework — the Narrative Attack Surface

The Competitive Narrative Stress Test ([skills/positioning/competitive-narrative-stress-test](https://github.com/Petrichor-Projects/resilience-stack)) is built on a single load-bearing concept: the Narrative Attack Surface. Every competitive story exposes five surfaces to attack — Origin Claim, Differentiation Claim, Proof Claim, Outcome Claim, Future Claim. Each surface scores one to five for attack resistance. The composite Durability Score lands between five (a narrative that cannot survive the first follow-up question) and twenty-five (a narrative that holds under hostile delivery). The audit closes the gap through three pressure mechanisms run in sequence.

The first is the Blank Check Test. The facilitator asks: if your strongest competitor had unlimited budget and the best agency in the world, what would they say about you? Write the attack ad. Three lines. This is the move that surfaces the differentiation claims and outcome claims that are quietly defenseless. Hamilton Helmer's 7 Powers framework names the structural assets that make competition unwinnable — Counter-Positioning, Cornered Resource, Process Power, and the rest — but most companies are running narratives that assume powers they have not actually built. The Blank Check Test forces the team to face the attack ad before a competitor writes it for them.

The second is the Competitor's Best Day Simulation. The facilitator delivers the competitor's strongest possible sixty-second pitch — against you, in their voice, using their verbatim language pulled from their decks and webinars. The participant defends in real time. Both versions are recorded. April Dunford has written about positioning as the work of choosing the context buyers use to evaluate you. The Competitor's Best Day forces the team to hear the context the competitor is already building in the buyer's head, in the competitor's words, before the buyer brings it to a sales call.

The third is the 60-Second Delivery Test. The participant delivers the reconstructed narrative orally, on a timer, no notes, against hostile follow-up questions. If a layer of the narrative cannot survive sixty seconds with one piece of evidence, it is a crack. The skill enforces a rule: composite Durability must improve at least thirty percent post-rebuild, or the reconstruction is rejected and the team redoes it. Vibes rebuilds do not survive the rule. Evidence rebuilds do.

## A worked example — the Tessera case

Tessera is an anonymized composite, not a single client. Retail analytics SaaS for mid-market omnichannel retailers. Fourteen million ARR. Series B closed eighteen months ago — actually, they are six to eight months out from raising one now. The competitive picture went sideways in Q1. Win rate against a single new entrant fell from fifty-two percent in Q3 to thirty-one percent in Q1. Four of seven enterprise deals lost. Gartner reframed the category to "Agentic Retail Intelligence" in March. Three board members independently asked "why aren't we agentic?" The numbers are real.

In the room: Founder/CEO, Head of Product, Head of Sales, CMO. Pre-work: Tessera's verbatim current narrative, the new entrant's full pitch deck pulled from their website and a recorded analyst webinar, five lost-deal post-mortems with buyer language quoted verbatim, and Gartner's March reframe note. Engagement time: 2.5 hours.

The Attack Surface scored thirteen out of twenty-five. **Fragile, sliding toward Cracking.** Layer One — Origin Claim — held at four out of five. Layer Two — Differentiation Claim — scored two of five, the "deepest integrations in the category" claim was no longer differentiating because the new entrant had matched the integration count. Layer Three — Proof Claim — three of five. Layer Four — Outcome Claim — two of five, and this was the mid-session discovery. The strongest customer-outcome claim Tessera was using in pitches was a twelve-million-dollar savings number from a single anchor customer. The methodology behind the number had never been published. Internally, the methodology was sketched on a single Notion page that the CMO had not opened in eight months. The number had become folklore inside Tessera and continued to be repeated externally by reps who did not know its provenance.

Layer Five — Future Claim — scored two of five. The line on the slide was "Tessera is the retail operating system for omnichannel commerce." Read against the new entrant's verbatim deck, that line was now defensive. The new entrant was claiming the agentic future and positioning Tessera as legacy. The reframe Claude produced in the Narrative Reconstruction segment — and that the room agreed to ship — was layer-by-layer specific. New Layer Five: "Tessera is the retail data layer that agents need to act — without it, every agentic retail tool is hallucinating against stale inventory." That single reframe did three things. It accepted the agentic frame the buyer was already in. It positioned Tessera as upstream of the new entrant, not in competition with it. And it surfaced a real failure mode of the new entrant — agents on stale data — that Tessera could prove with telemetry from existing customers.

Post-rebuild Durability scored nineteen out of twenty-five. **Holding.** Six-point lift, well above the thirty-percent rebuild threshold the skill enforces. The CEO walked into the next analyst briefing two weeks later with the new Layer Five and the published outcome methodology. The three board members got the answer they had been asking for, in a frame the CEO could now defend cold for sixty seconds under hostile questioning. The new entrant's win-rate advantage held for another six weeks and then started reversing. By the time Series B kickoff conversations began, win rate was back above forty percent against the same competitor.

## What goes wrong without this framework

Companies notice when the win rate slips. They almost always notice it. What they do next is where the round, or the category, is lost.

**One — they blame price.** Lost-deal reports come back logged as "lost on price." Sales leadership requests discounting authority. The discounting expands. Margin compresses. The board meeting after the next one is now a margin meeting, not a narrative meeting. The actual cause — a counter-narrative the rep could not defend — never surfaces. This is the most common failure I see, and it is the most expensive. Discounting is the cost of a narrative loss that has been mis-diagnosed as a pricing loss.

**Two — they rebrand without rebuilding the narrative.** A new agency is hired. The deck gets new visuals. The website gets a new hero line. The same hopeful claims get prettier typography. The Attack Surface is never mapped. The Blank Check Test is never run. The decay is re-skinned, not addressed. Twelve months later the same competitor is winning more of the same deals against a better-looking deck.

**Three — they let the Series B story become "incumbent losing to agentic upstart."** This is the failure mode that ends companies. The narrative drift becomes the narrative the analyst community tells about you. Once Gartner, Forrester, or the equivalent has reframed the category and slotted you on the wrong side, the cost of the rebuild stops being a 2.5-hour facilitation and becomes an eighteen-month brand-rebuild plus an analyst-relations campaign. Tessera caught it at the 2.5-hour-facilitation stage. The companies that wait catch it at the eighteen-month stage.

In all three failure modes, the team is working hard. They are not malicious. They are running a competitive-positioning loop that does not include the verbatim language of the competitor or the verbatim language of the buyer. The thing that needs reconciling is the discipline of running the stress test on a quarterly cadence before the room runs it for you in public.

## When this framework does NOT apply

The Competitive Narrative Stress Test is not a universal tool. Four conditions under which running it produces noise instead of signal:

- **Pre-PMF companies with no real competitors yet.** No verbatim competitor language to attack against. The work is `customer-truth-extraction`, not this one.
- **True blue-ocean categories.** If there is no named competitor, the right tool is `category-creation-pressure-test`. Running this skill against an imaginary competitor produces an imaginary stress test.
- **Teams that cannot collect competitor verbatim.** The skill is evidence-required. Paraphrased competitor positioning is not enough. Pull the verbatim deck, the recorded webinar, the literal sales call quote.
- **Recent positioning rewrites (under thirty days).** Give the new narrative time to gather competitive signal. Running the stress test on a narrative that has not yet been delivered to enough buyers produces noise.

The honesty matters. A framework that pretends to apply universally is one you cannot trust on the cases where it does apply.

## Run the diagnostic

If anything in this essay described a pattern you have been watching without naming — the win rate sliding against one specific competitor, the three board members asking the same question in the same week, the sales rep who cannot defend the future claim past one follow-up — the next move is the Competitive Narrative Stress Test skill in the Resilience Stack repo: [github.com/Petrichor-Projects/resilience-stack](https://github.com/Petrichor-Projects/resilience-stack) — `skills/positioning/competitive-narrative-stress-test`. Five-question quiz returns your tier assessment and top 3 actions. The Loom walkthrough shows the full stress test in five minutes. Next week's kit: `pricing-authority-diagnostic` — what happens when your pricing page has stopped describing how buyers actually evaluate willingness-to-pay in your category.

*— Phil, Petrichor Projects*

*Resilience Stack v1.5 Kit 3 · CC BY 4.0 · 2026-06-02*
