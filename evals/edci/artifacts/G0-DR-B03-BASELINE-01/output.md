# DR-B03 Baseline Output — Legal-Product Boundary Analysis

## Bounded recommendation

Proceed only as a lawyer-facing research aid that retrieves and summarizes source-linked public opinions and flags issues for a licensed lawyer to investigate. Do not launch it as a substitute for legal judgment, a source of client-specific legal advice, or an autonomous filing/recommendation system.

This is a U.S.-oriented product-risk analysis, not legal advice or a jurisdiction-specific clearance. The ABA Model Rules are models, not automatically binding law; jurisdictions modify and adopt their own rules. The company must have qualified counsel review the target jurisdiction, user, marketing, data flow, and workflow before launch. [ABA overview and implementation status](https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/) · [Jurisdiction comparison charts](https://www.americanbar.org/groups/professional_responsibility/policy/rule_charts/)

## Product boundaries

| Boundary | Safer product behavior | Why it matters |
|---|---|---|
| User | Licensed legal professional or supervised legal team | Unauthorized-practice rules are jurisdiction-specific; ABA Model Rule 5.5 prohibits practicing or assisting practice in violation of local regulation. [Model Rule 5.5](https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_5_5_unauthorized_practice_of_law_multijurisdictional_practice_of_law/) |
| Function | Retrieve, summarize, quote, compare, and flag issues | The tool should support—not replace—the lawyer's competence and judgment. Model Rule 1.1 requires competent representation, and Comment 8 addresses benefits and risks of relevant technology. [Rule 1.1](https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_1_competence/) · [Rule 1.1 comments](https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_1_competence/comment_on_rule_1_1/) |
| Output | Source-linked draft analysis with jurisdiction, date, court, precedential status, and explicit uncertainty | Lawyers remain responsible for verifying accuracy and controlling authority. ABA Formal Opinion 512 says lawyers using generative AI must consider competence, confidentiality, communication, supervision, candor, and fees. [Formal Opinion 512](https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf) |
| Human control | Lawyer must inspect cited text and approve any consequential use | Lawyers have duties concerning false statements and directly adverse controlling authority before tribunals. [Model Rule 3.3](https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_3_3_candor_toward_the_tribunal/) |
| Data | Public opinions by default; client facts require a separately approved confidential-data design | Model Rule 1.6 restricts disclosure of representation information and requires reasonable efforts against unauthorized access or disclosure. [Model Rule 1.6](https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_6_confidentiality_of_information/) |
| Supervision | Firm administrators can set source, jurisdiction, retention, and approval controls | Rule 5.3 comments require reasonable efforts to make external nonlawyer assistance compatible with professional obligations and specifically identify confidentiality and monitoring considerations. [Rule 5.3 comments](https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_5_3_responsibilities_regarding_nonlawyer_assistant/comment_on_rule_5_3/) |

Public availability does not by itself establish every reuse right for annotations, headnotes, editorial enhancements, databases, or vendor copies. The Supreme Court's government-edicts doctrine covers works created by officials empowered to speak with the force of law in their official duties, but the precise material and source still matter. [*Georgia v. Public.Resource.Org*, 590 U.S. 255 (2020)](https://www.supremecourt.gov/opinions/19pdf/18-1150_new_d18e.pdf)

## Jurisdiction and currentness controls

| Field | Required behavior | Failure state |
|---|---|---|
| Governing jurisdiction | User must select or confirm; output cannot infer silently | `jurisdiction_unresolved` |
| Court and hierarchy | Store court, level, and relationship to the target jurisdiction | `authority_role_unresolved` |
| Decision date | Display the opinion date and retrieval date | `currentness_unverified` |
| Precedential status | Distinguish published, unpublished, vacated, superseded, or unknown where available | `precedential_status_unresolved` |
| Subsequent treatment | Check later history and negative treatment through an approved authority before consequential use | `treatment_unverified` |
| Quotation | Preserve exact span, page/pinpoint, source URL, and document hash | `quotation_unverified` |
| Model-rule status | Label ABA material as model guidance and check locally adopted rules | `local_rule_unverified` |

An unresolved failure state must block definitive language. It should not be converted into a low-confidence recommendation that looks actionable.

## Evidence required before launch

1. **Jurisdictional legal review:** written analysis by qualified counsel for the initial state(s), user type, product claims, and unauthorized-practice boundary.
2. **Source-rights matrix:** source-by-source terms for official opinions, reproductions, annotations, headnotes, citator data, and bulk access.
3. **Citation-fidelity benchmark:** a representative, held-out set measuring whether every quotation, holding summary, court, date, citation, and pinpoint matches the source.
4. **Authority benchmark:** tests for jurisdiction, hierarchy, precedential status, subsequent treatment, and directly adverse authority.
5. **Human-factors test:** evidence that lawyers notice uncertainty, open the primary source, and can reject incorrect issue suggestions.
6. **Confidentiality/security review:** data-flow map, provider terms, retention, access control, logging, deletion, incident response, and client-consent analysis where relevant.
7. **Supervision and audit design:** accountable lawyer, approval event, immutable source/output record, correction path, and version history.
8. **Marketing review:** every capability and accuracy claim tied to a test; no implication of court, bar, or regulator endorsement.
9. **Failure-mode exercise:** fabricated citation, wrong jurisdiction, overruled authority, misleading quote, unavailable source, and prompt-injection scenarios.
10. **Rollback plan:** ability to disable affected sources/models, notify users, preserve audit evidence, and retract a defective output.

## Claims the product must avoid

- “Provides legal advice,” “replaces legal research,” or “replaces lawyer review.”
- “Always current,” “complete,” “error-free,” “court-approved,” “bar-approved,” or “safe in every jurisdiction.”
- “Finds all controlling or adverse authority” unless a defined benchmark supports the exact scoped claim.
- “Verifies citations” if it checks only URL existence rather than quotation, proposition, court, date, status, and subsequent treatment.
- “Confidential” or “privileged” without a reviewed data-flow and contractual basis.
- Any statement that a disclaimer alone resolves unauthorized-practice, competence, confidentiality, candor, or supervision obligations.

## Escalation conditions

Stop and obtain jurisdiction-specific counsel before launch or expansion when:

- the product is offered directly to unrepresented consumers;
- output applies law to a person's facts or recommends a legal course of action;
- a user can send output externally without lawyer approval;
- client information or nonpublic work product enters the system;
- the source includes proprietary annotations or citator data;
- controlling-authority or subsequent-treatment checks are unavailable;
- marketing seeks categorical accuracy, completeness, or compliance claims; or
- the target court, bar, regulator, or client imposes a more specific AI rule or order.

## Confidence and limits

Confidence is high that the safer initial product is a supervised, lawyer-facing research aid with primary-source fidelity and explicit failure states. Confidence is low on legal permissibility in any particular jurisdiction because no target state, user contract, data architecture, or marketed claim set was supplied. Qualified counsel must make that determination.
