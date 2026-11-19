# DR-B01 Baseline Output — Repository Copy Decision

## Decision

Do not copy this repository into a commercial internal workflow on the present evidence. Use it only to understand observable behavior, then implement the needed capability independently from Phil's requirements and evaluation cases. If copying remains desirable, obtain a clear license grant from the rights holder or have qualified counsel assess the specific use.

This is a risk-management recommendation, not legal advice.

## Verified facts

1. The pinned commit is `f2f2c0fa4e7617ca84c86b63f4bb40f77a746933`, committed on 2026-04-11. Its complete, non-truncated Git tree lists source, templates, tests, and documentation but no file named `LICENSE`, `LICENCE`, or `COPYING`. [Git tree at the pinned commit](https://api.github.com/repos/199-biotechnologies/claude-deep-research-skill/git/trees/f2f2c0fa4e7617ca84c86b63f4bb40f77a746933?recursive=1)
2. GitHub's repository license endpoint returned `Not Found` and no detected license during this check. This is supporting metadata, not conclusive legal analysis. [GitHub license endpoint](https://api.github.com/repos/199-biotechnologies/claude-deep-research-skill/license)
3. The pinned README says `MIT - modify as needed for your workflow.` It does not reproduce the full MIT license text or name a copyright holder. [Pinned README](https://raw.githubusercontent.com/199-biotechnologies/claude-deep-research-skill/f2f2c0fa4e7617ca84c86b63f4bb40f77a746933/README.md)
4. GitHub's licensing guidance says that repositories need a license to grant permission to use, change, and distribute code; absent a license, default copyright applies. The same guidance notes that a README may mention a license but recommends a license file as best practice. [GitHub licensing guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
5. The standard MIT text includes a permission grant, a condition requiring the copyright and permission notices to accompany substantial copies, and a warranty disclaimer. Those terms are not present in the pinned tree as a license file. [Open Source Initiative: MIT License](https://opensource.org/license/mit)

## Inferences

- The README line is evidence of an apparent MIT intent, but the pinned repository does not provide a complete, unambiguous license instrument or detected license metadata. Treating the shorthand as sufficient permission would accept avoidable rights uncertainty.
- A private internal copy can still reproduce copyrighted material. “Internal” does not by itself resolve whether copying, modification, or derivative work is permitted.
- A clean-room implementation is the lowest-risk path because the desired behaviors—claim traceability, contradiction handling, evaluation gates, and reproducible artifacts—can be specified from independent product requirements without reproducing expressive prompts, templates, tests, or code.

## Unresolved questions

- Did the repository owner intend the README line to incorporate the standard MIT terms?
- Does the owner control all contributions and have authority to license them?
- Was a license file present in another revision, release artifact, or distribution package, and if so, does it apply to the pinned material?
- Would the intended use copy expressive material or only implement independently derived functional requirements?

## Recommended path

1. Continue the current clean-room implementation. Preserve a record of the pinned commit and the no-copy boundary.
2. Do not copy or adapt the upstream code, prompts, templates, tests, report language, or distinctive structure.
3. Build against independently written EDCI requirements and frozen evaluation cases.
4. If upstream reuse would materially reduce cost, request a complete license file and provenance confirmation from the owner before reconsidering.
5. Obtain qualified legal review before a consequential commercial reuse decision; neither GitHub's detector nor this analysis is legal clearance.

## Coverage and confidence

Confidence is high for the repository-state facts and the conservative clean-room recommendation. Confidence is intentionally limited on the ultimate legal interpretation because authorship, contribution provenance, jurisdiction, and intended use were not independently established.

## Method

The review inspected the pinned README, the recursive Git tree, commit metadata, GitHub's license endpoint, GitHub's official licensing guidance, and the Open Source Initiative's MIT text. Firecrawl and Exa were unavailable; the run used built-in web retrieval and direct public GitHub API reads. No repository material was copied into the implementation.
