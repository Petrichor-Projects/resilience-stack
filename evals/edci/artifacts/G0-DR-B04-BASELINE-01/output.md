# DR-B04 Baseline Output — Workflow-Risk Hypothesis

## Decision

Do not broaden automation yet. The highest-leverage failure hypothesis is that claim-level extraction errors can reach the client because source-pointer loss occurs upstream while the human reviews only the final recommendation page. The current 22% wording-correction rate cannot validate or refute that hypothesis because the workflow does not record whether a correction changes style, interpretation, or the underlying claim.

## Ranked failure hypotheses

### 1. Provenance loss creates an undetectable verification gap

Observed evidence: 8% of extracted claims lose their source pointer, and operators inspect only the final recommendation page.

Causal hypothesis: when a source pointer is lost, the operator cannot efficiently verify the extracted claim; because review happens downstream at the recommendation level, an extraction error may remain invisible and influence the delivered recommendation.

What would falsify or narrow it:

- blinded re-review finds no higher factual-error rate among claims with missing pointers than among claims with intact pointers; and
- operators can reliably recover and verify missing provenance within the existing 11-minute median review window.

The supplied data do not establish that errors are already reaching clients. They establish an observability defect that prevents the team from knowing.

### 2. Recommendation edits may conceal claim corrections

Observed evidence: operators change recommendation wording in 22% of jobs, but no field records whether the underlying claim changed.

Hypothesis: some apparent copy edits are actually evidence or interpretation corrections, so the current metric understates model error and obscures where intervention is needed.

Falsification evidence: a representative coded sample shows that virtually all edits are stylistic and none change claim meaning, evidence scope, confidence, or decision direction.

### 3. Final-page-only review encourages error propagation

Observed workflow: extraction precedes drafting, but review begins at the final page.

Hypothesis: downstream review focuses attention on plausibility and phrasing, allowing unsupported intermediate claims to inherit authority from a polished recommendation.

Falsification evidence: a blinded comparison shows final-page-only review detects consequential claim errors as reliably and efficiently as claim-level review.

## Causal chain to test

Mixed-format input → claim extraction → source pointer missing or incorrect → recommendation composed from unverified claim → operator reviews polished final page without claim evidence → unsupported or mis-scoped recommendation may be approved.

Every arrow after source-pointer loss is a hypothesis until the experiment records it. The current 8% and 22% figures must not be multiplied or interpreted as a client-error rate.

## Smallest safe experiment

Run a shadow-mode, 30-job instrumentation study without changing client delivery:

1. Assign every extracted claim a stable ID and required source span.
2. Fail the shadow record closed when the source pointer is missing; do not silently reconstruct it.
3. Ask the operator to label each correction as `style`, `claim_content`, `source_scope`, `confidence`, or `recommendation_direction`.
4. For a random half of jobs, show the claim-to-source map before final approval; keep the other half on final-page-only review.
5. Have a second reviewer adjudicate all consequential claim changes and a sample of unchanged claims.
6. Compare detection of unsupported or mis-scoped claims, review time, and disagreement by review mode.

This is a measurement experiment, not a production-routing change. Client output continues through the current human approval path.

## Stop conditions

Stop expansion and repair the evidence path if any of the following occurs:

- a consequential claim without recoverable provenance reaches the approval stage;
- missing source pointers remain above 2% after one remediation cycle;
- adjudicated claim-content or source-scope corrections occur in more than 5% of sampled jobs;
- claim-level review adds more than 25% to median review time without improving consequential-error detection; or
- the experiment cannot distinguish style edits from evidence changes reliably.

The numeric thresholds are proposed operating thresholds for this synthetic exercise, not facts derived from the four supplied observations.

## Residual risks

- A source pointer can exist but point to text that does not entail the claim.
- Mixed formats may fail unevenly; aggregate rates can hide image, table, or scanned-document defects.
- Operators may under-label substantive corrections to save time.
- A 30-job shadow sample estimates workflow behavior, not rare catastrophic errors.
- Better provenance may increase review time without improving decisions; both must be measured.

## Method and boundary

Closed-book analysis of the supplied workflow and four observations. No web search, private data, or invented telemetry was used. Proposed thresholds and sample size are explicit design choices requiring review.
