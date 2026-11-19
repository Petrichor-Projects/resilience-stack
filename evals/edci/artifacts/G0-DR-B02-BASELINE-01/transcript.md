# G0-DR-B02-BASELINE-01 Transcript

## Trial identity

- Case: `DR-B02`
- Date: 2026-09-23
- System instructions: frozen `deep-research` and `research-loop` hashes recorded in `baseline-manifest.yaml`
- Candidate code present: no

## Exact task prompt

> Using only the supplied synthetic interview packet, identify the three strongest buyer-language patterns for a boutique growth consultancy, contradictory signals, and the next decision the owner should make. Do not infer market prevalence from the small sample.

## Supplied fixture

- I-01, founder: “We have activity everywhere, but I cannot tell which work is creating durable demand.”
- I-02, head of growth: “I do not need another dashboard. I need someone to tell me which signal changes the plan.”
- I-03, founder: “Our positioning sounds polished, but sales calls still turn into a feature comparison.”
- I-04, marketing lead: “The team knows what happened last quarter; we disagree about why it happened.”
- I-05, operator: “A dashboard would help us align if it came with a clear weekly decision ritual.”

## Analysis record

1. Coded each statement for desired outcome, current failure, proposed mechanism, and contradiction.
2. Grouped I-01, I-02, and I-04 under decision clarity; separated causal disagreement as the underlying failure represented by I-01 and I-04.
3. Kept I-03 as a single-observation positioning hypothesis rather than inflating it into a repeated theme.
4. Treated I-02 and I-05 as a dashboard contradiction and formed a narrower interpretation: reporting plus an explicit decision ritual may help, while reporting alone may not.
5. Designed a validation step around recent behavior, cost, workarounds, and willingness to pay rather than asking respondents whether they like the proposed language.

## Retrieval and boundary record

- Web retrieval: not used.
- Vault retrieval: not used.
- External data: not used.
- Private data: not used.
- The frozen deep-research tool requirement was superseded by the case's stricter closed-book boundary. This is recorded for review.

## Contamination disclosure

The suite author and trial runner share one context, so the runner had prior exposure to the reference assertions. No candidate code exists. Human review must decide whether this provisional run is acceptable or requires isolated rerun.
