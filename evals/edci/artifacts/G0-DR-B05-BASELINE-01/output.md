# DR-B05 Baseline Output — Falsifiability and Product Experiments

## Concise explanation

Falsifiability is best understood as a rule for making empirical claims take real risk: a theory or hypothesis should exclude some observable outcomes, and investigators should sincerely try to expose it to those outcomes. Popper developed it principally as a demarcation proposal—an account of what distinguishes empirical science from non-science or pseudoscience—not as a claim that scientific theories become proven true after passing tests. Surviving a test is corroboration, not verification. [Stanford Encyclopedia of Philosophy: Scientific Method](https://plato.stanford.edu/entries/scientific-method/) · [Internet Encyclopedia of Philosophy: Popper](https://iep.utm.edu/pop-sci/)

In Popper's own formulation, scientific status depends on falsifiability, refutability, or testability. The practical point is not merely that a claim is logically capable of being contradicted; researchers must specify risky predictions and expose them to serious tests rather than continually protecting the claim with after-the-fact exceptions. [Popper, “Science: Conjectures and Refutations” excerpt](https://joelvelasco.net/teaching/hum9/popper-conjecturesrefutations.pdf)

## The common oversimplification

The slogan “one failed observation falsifies a theory” is too mechanical.

An empirical prediction normally depends on the focal hypothesis plus auxiliary assumptions about instruments, data, implementation, background theory, and test conditions. When a prediction fails, the result shows that something in that system is wrong; it may not identify which component failed. The Duhem tradition makes this ambiguity explicit: hypotheses are not always tested in isolation. [Stanford Encyclopedia of Philosophy: Pierre Duhem](https://plato.stanford.edu/entries/duhem/)

Popper's mature methodological position also leaves room to test auxiliary explanations rather than instantly discard a productive theory. The relevant distinction is whether a modification creates new, independently testable consequences or merely immunizes the favored claim from criticism. The Stanford account notes that an apparently ad hoc outer-planet hypothesis used to address Uranus's motion generated further falsifiable predictions; not every response to anomaly is intellectually dishonest. [Stanford Encyclopedia of Philosophy: Scientific Method](https://plato.stanford.edu/entries/scientific-method/)

## Meaningful criticisms and limits

1. **Underdetermination:** a failed prediction does not uniquely locate the error because the focal claim is tested with auxiliary assumptions. [Stanford Encyclopedia of Philosophy: Pierre Duhem](https://plato.stanford.edu/entries/duhem/)
2. **Scientific practice is historically messier:** scientists often retain theories through anomalies, especially when no better alternative exists, and some productive experiments are exploratory rather than direct attempts at falsification. [Internet Encyclopedia of Philosophy: Popper](https://iep.utm.edu/pop-sci/)
3. **Demarcation is not a complete quality test:** a claim can be falsifiable yet trivial, poorly measured, unethical to test, or supported by a broken instrument. Falsifiability tells us whether a claim takes empirical risk; it does not by itself establish importance, truth, good measurement, or a complete scientific method.
4. **Observations are not neutral atoms:** deciding what counts as an accepted observation involves methods, instruments, replication, and community judgment. Popper's own use of basic statements recognizes that testing must stop provisionally at observations investigators agree to accept. [Internet Encyclopedia of Philosophy: Popper](https://iep.utm.edu/pop-sci/)

The durable lesson is disciplined exposure to error, not ritual rejection after the first surprising datapoint.

## Applied AI-product experiment

### Product claim

Adding claim-level source spans and a fail-closed verification step to the research workflow reduces unsupported consequential claims without making review operationally unusable.

### Risky prediction

On a frozen, independently scored set of representative research cases, the candidate workflow will:

- reduce the rate of unsupported consequential claims by at least 50% relative to the frozen baseline;
- produce zero fabricated citations;
- maintain at least 95% correct claim-to-source entailment on consequential claims; and
- increase median end-to-end review time by no more than 25%.

### Observable disconfirmation condition

Treat the product claim as not supported if any preregistered condition occurs:

- the unsupported-claim reduction is below 50%;
- any fabricated citation appears;
- entailment accuracy falls below 95%;
- review time rises more than 25% without a separately approved tradeoff; or
- the improvement disappears on the untouched holdout or under independent human review.

Do not redefine “consequential,” remove a difficult case, lower the threshold, or change the grader after seeing the results. A change to an auxiliary assumption requires a documented new hypothesis and a new evaluation run; it does not retroactively turn the failed prediction into success.

### Auxiliary assumptions to test

- The cases represent the decisions the product is meant to support.
- Human reviewers can reliably identify consequential claims and entailment.
- Source access and snapshots are stable enough to reproduce judgments.
- Added review time is measured consistently.
- Baseline and candidate receive equivalent inputs and authority.

If the experiment fails, first diagnose whether the focal mechanism or one of these assumptions failed. Preserve the original result either way.

## Practical takeaway

Use falsifiability in product work to force a pre-commitment: state what result would make the team stop, narrow, or revise the belief. Combine it with representative tasks, reliable measurement, independent review, ethical constraints, and explicit auxiliary assumptions. That makes the experiment informative even when the favored idea loses.

## Method and confidence

This synthesis used a university-hosted excerpt from Popper and scholarly reference works from the Stanford and Internet Encyclopedias of Philosophy. Confidence is high on the central distinction between demarcation, corroboration, and naïve one-observation falsification; philosophical disputes about the adequacy of Popper's broader program remain genuinely open.
