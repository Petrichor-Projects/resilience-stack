# G0-DR-B04-BASELINE-01 Transcript

## Trial identity

- Case: `DR-B04`
- Date: 2026-09-23
- System instructions: frozen hashes in `baseline-manifest.yaml`
- Candidate code present: no

## Exact task prompt

> Analyze the supplied synthetic workflow for an AI-assisted client-delivery product. Identify the highest-leverage failure hypothesis, evidence that would falsify it, and the smallest safe experiment.

## Supplied fixture

- Workflow: mixed-format upload → claim extraction and recommendation draft → operator reviews final recommendation page only → approved output sent to client.
- Signals: 8% of extracted claims lose their source pointer; operators edit recommendation wording in 22% of jobs; no field records whether corrections change the underlying claim; median review time is 11 minutes.

## Analysis record

1. Separated observations from causal hypotheses.
2. Ranked source-pointer loss first because it combines an upstream evidence defect with a downstream review blind spot.
3. Refused to multiply the 8% and 22% rates or call either a client-error rate.
4. Defined falsification evidence for each major hypothesis.
5. Designed a shadow experiment that adds provenance and correction-reason telemetry while preserving the current human approval path.
6. Labeled proposed thresholds and sample size as design choices rather than observed evidence.

## Retrieval and boundary record

- Web retrieval: not used.
- Vault retrieval: not used.
- External or private data: not used.
- The case's closed-book boundary overrode the frozen skill's general retrieval instruction.

## Contamination disclosure

The suite author and trial runner share one context, so reference-assertion exposure is possible. The run predates all candidate code. Human review controls whether this provisional run is accepted or rerun independently.
