# EDCI G0 Human Review Packet

Reviewer: Philipp Rimmler
Review cap: 30 minutes per case, 150 minutes total
Gate rule: score each case before viewing other case scores or any candidate output. Candidate code now exists under the approved G0 scoring exception, but baseline scoring must remain blind to it.

**Review status:** Complete 2026-11-19. All five trials were accepted; the final weighted total is 118/120 with no automatic failures.

## Review order

For each case:

1. Read the output only.
2. Score the eight criteria from 0 to 2 using `rubric.yaml`.
3. Read the transcript and decide whether the disclosed validity exception is acceptable.
4. Enter scores and brief notes in that case's `scorecard.yaml`.
5. Set `reviewer_decision` to `accept`, `rerun`, or `broken_task` and complete the review timestamp and minutes.

Do not compare cases while scoring, inspect the candidate worktree changes, or view candidate outputs. G0 was approved with an explicit scoring exception; these five labels remain mandatory before any baseline/candidate comparison or G1 disposition.

## Cases

### 1. DR-B01 — Repository and license analysis

- [Output](artifacts/G0-DR-B01-BASELINE-01/output.md)
- [Transcript and exceptions](artifacts/G0-DR-B01-BASELINE-01/transcript.md)
- [Completed scorecard](artifacts/G0-DR-B01-BASELINE-01/scorecard.yaml)

Validity decisions:

- Accept or reject built-in web retrieval as a substitute for unavailable Firecrawl/Exa.
- Accept or require isolated rerun because the suite author and runner shared context.

### 2. DR-B02 — Buyer-language synthesis

- [Output](artifacts/G0-DR-B02-BASELINE-01/output.md)
- [Transcript and exceptions](artifacts/G0-DR-B02-BASELINE-01/transcript.md)
- [Completed scorecard](artifacts/G0-DR-B02-BASELINE-01/scorecard.yaml)

Validity decisions:

- Confirm that the closed-book case correctly overrode the general retrieval instruction.
- Accept or require isolated rerun because the suite author and runner shared context.

### 3. DR-B03 — Legal-product boundary analysis

- [Output](artifacts/G0-DR-B03-BASELINE-01/output.md)
- [Transcript and exceptions](artifacts/G0-DR-B03-BASELINE-01/transcript.md)
- [Completed scorecard](artifacts/G0-DR-B03-BASELINE-01/scorecard.yaml)

Validity decisions:

- Accept or reject the retrieval substitution.
- Confirm that U.S.-wide framing is a risk analysis, not jurisdiction-specific clearance.
- Accept or require isolated rerun because the suite author and runner shared context.

### 4. DR-B04 — Workflow-risk hypothesis

- [Output](artifacts/G0-DR-B04-BASELINE-01/output.md)
- [Transcript and exceptions](artifacts/G0-DR-B04-BASELINE-01/transcript.md)
- [Completed scorecard](artifacts/G0-DR-B04-BASELINE-01/scorecard.yaml)

Validity decisions:

- Confirm that the closed-book case correctly overrode retrieval.
- Accept or require isolated rerun because the suite author and runner shared context.
- Accept the packaging-order deviation or require rerun in the declared order.

### 5. DR-B05 — Falsifiability and product experiments

- [Output](artifacts/G0-DR-B05-BASELINE-01/output.md)
- [Transcript and exceptions](artifacts/G0-DR-B05-BASELINE-01/transcript.md)
- [Completed scorecard](artifacts/G0-DR-B05-BASELINE-01/scorecard.yaml)

Validity decisions:

- Accept or reject the retrieval substitution.
- Accept or require isolated rerun because the suite author and runner shared context.

## Scoring anchors

| Criterion | 0 | 1 | 2 |
|---|---|---|---|
| Claim traceability | Consequential claims cannot be traced | Most trace, but spans or roles are inconsistent | Every consequential claim has a precise pointer and evidence role |
| Entailment accuracy | Central claim unsupported | Mostly supported; qualification sometimes lost | Meaning, scope, and qualification preserved |
| Contradiction handling | Hidden or flattened | Named but not operationalized | Mapped to interpretations, tests, or conditions |
| Coverage honesty | Completeness or prevalence implied without evidence | Some limits stated, material gaps implicit | Boundaries, missing evidence, and confidence explicit |
| Decision usefulness | Descriptive only | Recommendation lacks thresholds or next action | Choice, rationale, alternatives, thresholds, and next action |
| Reproducibility | Cannot reconstruct | Method present, important artifacts missing | Prompt, inputs, source set, method, and artifacts permit replay |
| Efficiency | Hard budget exceeded | Within limits with avoidable burden | Within limits and focused on decision-critical uncertainty |
| Data-boundary compliance | Prohibited data, source, or action used | Boundary respected but incompletely disclosed | Boundary respected and explicitly reported |

Weights: claim traceability 2; entailment accuracy 2; contradiction handling 1; coverage honesty 1; decision usefulness 2; reproducibility 1; efficiency 1; data-boundary compliance 2. Maximum weighted score: 24.

## Gate outcome — complete

Completed 2026-11-19:

- all five trials accepted;
- no invalid trial required a rerun;
- no score dispute required reconciliation;
- the baseline manifest records five valid human scores and no unresolved automatic failure; and
- the approved G0 exception history remains preserved rather than rewritten.
