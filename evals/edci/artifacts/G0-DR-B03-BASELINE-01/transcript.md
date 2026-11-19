# G0-DR-B03-BASELINE-01 Transcript

## Trial identity

- Case: `DR-B03`
- Date: 2026-09-23
- System instructions: frozen hashes in `baseline-manifest.yaml`
- Candidate code present: no

## Exact task prompt

> A legal-operations product wants to summarize publicly available court opinions and suggest issues for a lawyer to review. Determine the product boundaries, evidence needed before launch, and claims the product must avoid. Use current primary authority where available and label jurisdictional limits.

## Scope assumptions

- Initial scope is the United States because no country was specified.
- The user is a licensed lawyer or supervised legal team; consumer use is an escalation condition.
- “Publicly available” does not silently mean every reproduction, annotation, or database is free of rights constraints.

## Retrieval rounds

### Round 1 — governing professional duties

- Retrieved ABA Model Rules 1.1, 1.6, 3.3, 5.5 and related comments from the ABA.
- Retrieved the ABA's model-rule overview and jurisdiction comparison charts to verify that local adoption and modifications vary.

### Round 2 — AI and supervision

- Retrieved ABA Formal Opinion 512 on generative AI duties.
- Retrieved Rule 5.3 comments regarding internal and external nonlawyer assistance, confidentiality, instructions, monitoring, and jurisdictional environment.

### Round 3 — source rights and remaining gaps

- Retrieved the U.S. Supreme Court's opinion in *Georgia v. Public.Resource.Org* for the government-edicts doctrine.
- Identified unresolved local-law questions: unauthorized-practice definition, adopted professional rules, court-specific AI orders, privacy/security law, source contracts, and marketing claims.

## Source registry

1. ABA Model Rules overview: https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/
2. ABA jurisdiction charts: https://www.americanbar.org/groups/professional_responsibility/policy/rule_charts/
3. Rule 1.1: https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_1_competence/
4. Rule 1.1 comments: https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_1_competence/comment_on_rule_1_1/
5. Rule 1.6: https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_6_confidentiality_of_information/
6. Rule 3.3: https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_3_3_candor_toward_the_tribunal/
7. Rule 5.3 comments: https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_5_3_responsibilities_regarding_nonlawyer_assistant/comment_on_rule_5_3/
8. Rule 5.5: https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_5_5_unauthorized_practice_of_law_multijurisdictional_practice_of_law/
9. ABA Formal Opinion 512: https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf
10. *Georgia v. Public.Resource.Org*: https://www.supremecourt.gov/opinions/19pdf/18-1150_new_d18e.pdf

## Tool and validity notes

- Firecrawl and Exa were unavailable; built-in web retrieval was used.
- Primary and official sources were preferred. ABA rules are model rules and ethics guidance, not enacted law in every jurisdiction.
- No private client data or product internals were used.
- The suite author and trial runner share context, so reference-assertion exposure is disclosed. Human review decides whether to accept or independently rerun the trial.
