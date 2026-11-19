# G0 Baseline Runbook

## Preconditions

1. Verify the two installed skill hashes match `suite.yaml`.
2. Verify the worktree is on `feature/edci-evidence-baseline` at the recorded base revision or record the new revision.
3. Confirm the case permits web retrieval before using it. DR-B02 and DR-B04 are closed-book.
4. Create the trial artifact directory named in `baseline-manifest.yaml`.
5. Start a wall-clock timer. Stop at 90 minutes even if the answer is incomplete.

## Trial procedure

For each case, in the fixed order DR-B01 through DR-B05:

1. Copy the case prompt and its permitted fixture into a fresh context.
2. Apply the frozen `deep-research` and `research-loop` instructions without editing them.
3. Save the exact prompt, tool/retrieval transcript, cited-source snapshot or stable source metadata, and final output.
4. Record elapsed time, retrieval count, source count, and any failure or fallback.
5. Mark any unavailable source, provider outage, corrupted artifact, or ambiguous task instruction as a possible broken task. Do not silently rerun.
6. Have the reviewer score the output without exposing future candidate identity or aggregate results.
7. Reconcile only disputes that meet the rubric's reconciliation rule. Preserve both the original score and the reconciled score.

## Output contract

Every baseline output must include:

- the decision or answer first;
- consequential claims tied to precise evidence;
- contradictions or competing interpretations;
- coverage, confidence, and unresolved questions;
- method and source-boundary disclosure; and
- a concrete next action when the case is decision-oriented.

## Scorecard contract

Each scorecard records:

- trial and case IDs;
- 0–2 score and note for every rubric criterion;
- weighted total out of 24;
- automatic failures;
- broken-task status and reason;
- elapsed and reviewer time; and
- reviewer identity and timestamp.

## Stop conditions

Stop the trial and preserve the partial artifacts when:

- the 90-minute cap is reached;
- a prohibited source or private-data boundary would need to be crossed;
- the task is demonstrably broken;
- a source required for a consequential conclusion is unavailable; or
- proceeding would require paid external spend.

## G0 exit

G0 may be signed only after five valid outputs, five scorecards, and any required reconciliation are complete. Candidate implementation begins after that signature; it must not alter these baseline artifacts.
