# Public Launch Checklist — Resilience Stack

Run top-to-bottom before flipping `Petrichor-Projects/resilience-stack` from private to public.

---

## §1 — GitHub Account (you, @rimmler44)

- [ ] **2FA on** w/ authenticator app (not SMS)
  - Settings → Password & Auth → 2FA → Authenticator
- [ ] **Recovery codes saved offline** (1Password vault + printed backup)
- [ ] **SSH keys audited** — revoke any old laptop/device keys
  - Settings → SSH and GPG keys
- [ ] **Personal Access Tokens audited** — revoke any >90 days unused
  - Settings → Developer settings → Personal access tokens
  - Use fine-grained PATs only going forward
- [ ] **Sessions audited** — revoke all-but-current
  - Settings → Sessions
- [ ] **Email visibility** — set to private + use noreply for commits
  - Settings → Emails → "Keep my email addresses private"
- [ ] **Secondary recovery email configured**
  - Settings → Emails → add backup
- [ ] **Account-level audit log review** (Settings → Security log) — check for unfamiliar entries

## §2 — Organization (petrichorprojects)

- [ ] **Org-level 2FA required** for all members
  - Org settings → Authentication security → Require 2FA
- [ ] **Member visibility default** — set to private unless promoting
  - Org settings → Member privileges
- [ ] **Org-level base permissions** — set to "None" (members can't read all repos by default)
  - Org settings → Member privileges → Base permissions: None
- [ ] **Org profile photo + bio** — professional, brand-aligned
- [ ] **Org public email** — set to `phil@petrichorgrowth.com` (or hide)
- [ ] **Org TOTP recovery codes saved**

## §3 — Repository Settings (resilience-stack)

### General
- [ ] Description filled: "18 strategy frameworks for positioning that holds under pressure. By Petrichor Projects."
- [ ] Topics added (5-10): `claude-code`, `claude-skills`, `strategy`, `petrichor`, `frameworks`, `positioning`, `workshops`, `cc-by-4.0`
- [ ] Social preview image uploaded (Petrichor brand artwork — 1280×640 PNG)
- [ ] Website URL: `https://petrichorgrowth.com`
- [ ] License visible: CC BY 4.0
- [ ] Features:
  - [x] Issues (for bug reports)
  - [x] Discussions (for Q&A) — enable Week 0 of soft launch
  - [ ] Projects (disable — not needed)
  - [ ] Wiki (disable — README + docs/ is canonical)
- [ ] Pull Requests: allow squash + rebase, **disable merge commits** (clean history)
- [ ] Allow auto-merge: **off** (manual merge for control)
- [ ] Automatically delete head branches: **on**
- [ ] Always suggest updating pull request branches: **on**

### Branches
- [ ] `main` is default branch
- [ ] Branch protection rule on `main`:
  - [ ] Require pull request before merging (1 approval)
  - [ ] Require status checks: `validate-skill` (after first PR with the workflow runs)
  - [ ] Require branches up-to-date
  - [ ] Require conversation resolution before merging
  - [ ] Do not allow bypassing the above settings
  - [ ] Restrict who can push to matching branches: maintainers only
  - [ ] **Block force pushes**
  - [ ] **Block deletions**

### Code Security
- [ ] **Secret scanning** — enabled
- [ ] **Secret scanning push protection** — enabled
- [ ] **Dependabot alerts** — enabled
- [ ] **Dependabot security updates** — enabled
- [ ] **Dependabot version updates** — enabled (configure `.github/dependabot.yml`)
- [ ] **Code scanning (CodeQL)** — enable + set up default workflow for JS

### Webhooks / Integrations
- [ ] Audit any third-party app access (Settings → Integrations) — remove unused

## §4 — Repository Content (one-time pre-public scans)

Run these locally before flipping to public. Each must return clean.

- [ ] **No hardcoded paths**
```bash
grep -rE "/Users/[a-z]+" . --exclude-dir=.git --exclude-dir=.claude --exclude-dir=docs/.claude
```
- [ ] **No secrets in history**
```bash
git log --all --full-history -p | grep -iE "(api[_-]?key|secret.*=|password.*=|bearer|sk-[a-zA-Z0-9]{20}|ghp_|ghs_)"
```
- [ ] **No env / credential files**
```bash
git ls-files | grep -iE "(\.env|credentials|\.pem|\.key$|secrets)"
```
- [ ] **Verify .gitignore catches local dirs**
```bash
git check-ignore .claude/ docs/.claude/
```
- [ ] **Verify no real client data leaked into synthetic case studies**
  - Synthetic Co, NorthStack, Tessera, Helix, Aperture — confirm none match a real Petrichor client
- [ ] **Verify all `petrichorprojects` references match the actual org slug** (no hyphenated stragglers)

## §5 — Files Required Before Public

- [x] `README.md` (with badges + polished kit table)
- [x] `LICENSE` (CC BY 4.0)
- [x] `CONTRIBUTING.md`
- [x] `CODE_OF_CONDUCT.md`
- [x] `CONTRIBUTORS.md`
- [x] `SECURITY.md`
- [x] `CHANGELOG.md`
- [x] `ROADMAP.md`
- [x] `.github/CODEOWNERS`
- [x] `.github/PULL_REQUEST_TEMPLATE.md`
- [x] `.github/workflows/validate-skill.yml`
- [ ] Add `.github/ISSUE_TEMPLATE/bug.md` + `feature.md` (optional but adds polish)
- [ ] Add `.github/dependabot.yml` (after public)

## §6 — Pre-Flip Smoke Test

- [ ] Clone the repo fresh into a temp directory as if you were a new user
- [ ] Verify README install instructions work
- [ ] Verify `npx resilience-stack list` works once npm package is published (can wait until first kit drop)
- [ ] Verify one skill markdown renders cleanly when opened by Claude
- [ ] Verify quiz / Loom URLs are clearly marked `{{tally-url}}` / `{{loom-url}}` placeholders (not broken links)

## §7 — Flip to Public

- [ ] Final review of repo at `https://github.com/Petrichor-Projects/resilience-stack/settings`
- [ ] Settings → Danger Zone → Change visibility → Public
- [ ] Wait 24 hours, monitor:
  - Secret scanning alerts (should be 0)
  - Dependabot alerts (should be 0 — only ships markdown + minimal JS)
  - Issues / discussions

## §8 — npm Publish (after first kit ready to ship)

- [ ] `npm login` from terminal
- [ ] `npm view resilience-stack` — verify name is free
- [ ] `npm publish --access public --provenance`
  - Provenance = signs npm package via GitHub Action, supply chain hardening
- [ ] Verify install: `npx resilience-stack list` from a different machine / clean shell

## §9 — Post-Launch Monitoring (rolling)

- [ ] Watch repo (so notifications fire)
- [ ] Subscribe to security alerts
- [ ] Weekly: review any new issues, PRs, discussions
- [ ] Monthly: rotate any PATs / SSH keys that touch this repo

---

## High-Risk Patterns Already Mitigated

| Risk | Status |
|------|--------|
| Hardcoded `/Users/philipprimmler/` paths | Fixed in `docs/*.py` (now `__file__`-relative) |
| `petrichor-projects` org-slug typo | Normalized to `petrichorprojects` across 30+ files |
| Personal email in commit author | Currently Petrichor brand email (`rimmler@petrichorgrowth.com`) — intentional, public-safe |
| `.claude/` + `docs/.claude/` local cache dirs | Untracked, never staged |
| API keys / tokens in any file | None present (skills are pure markdown) |
| Synthetic case study names | All clearly synthetic — verify none match real Petrichor clients |

---

*Run this checklist top to bottom. The repo does NOT flip to public until every box in §1-§7 is checked.*

*Petrichor Projects · CC BY 4.0 · 2026-05-12*
