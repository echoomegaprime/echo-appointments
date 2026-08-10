# Changelog

All notable changes to this project are documented here. Format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Security

- Replaced 11 raw `key !== validKey` comparisons (every `X-Echo-API-Key` check in the file,
  covering tenants/providers/services/availability/appointments/analytics/dashboard) with a
  single shared constant-time `timingSafeEqual` helper, closing a timing side-channel present at
  every protected route. This is the fourth repository in this consolidation campaign found with
  this exact pattern (after `cf-dns-manager`, `echo-affiliate`, `echo-analytics-engine`) -- here
  it was the most widely duplicated instance yet, at 11 call sites instead of 1.
- Bumped `hono` `^4.6.0` -> `^4.13.1` preemptively for the same known vulnerable-range issue
  found in two prior repos this campaign; `npm audit` now reports 0 vulnerabilities.
- Fixed three real `tsc` errors surfaced by bumping `@cloudflare/workers-types`: two
  `env.ECHO_API_KEY` (typed optional) values passed directly into a `Headers`-shaped object
  requiring `string` (now `?? ''`), and `D1Result.changes` (moved under `.meta.changes` in
  current Workers types).

### Added

- `package.json` `test` script (`tsc --noEmit && node --test`) and
  `tests/pure-functions.test.mjs`: 5 real unit tests executing `timingSafeEqual` directly from
  `src/index.ts` via Node's native TypeScript support.
- `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`.
- Hosted CI (`.github/workflows/ci.yml`): runs `npm test` on every push and pull request.
- Issue templates (bug report, feature request) and a pull-request template.
- `.echo/{apps.json,certification.json,sdk.json}` for ECHO Certification Forge and GitHub App
  Suite enrollment; `sdk.json` declares the 24 real `echo.appointments.*` capabilities matching
  this repo's actual routes (explicitly excludes 2 registered under the same prefix --
  `tenants.admin_delete`, `chat_book` -- with no matching route in this file).
  `scripts/certforge_journey.py` critical journey counts all 11 `timingSafeEqual` call sites and
  is verified locally to fail even if only ONE of the 11 regresses to the old comparison, then
  restored.
- This CHANGELOG and a README (the repository previously had no README at all).

## [Prior history]

- Sync local changes to GitHub.
- Add security response headers (HSTS, X-Content-Type-Options, X-Frame-Options).
- Add root route handler for GET /.
- Sync deployed changes (auth hardening, D1 error handling, service bindings).
- Add error handlers (onError + notFound) for hardened error responses.
- v1.0.0 -- scheduling SaaS Worker.
