## Objective

Describe the scheduling/booking behavior this change adds or fixes.

## Evidence

- Exact source revision:
- Test output (`npm test`):
- Negative paths exercised (missing/invalid key):
- Hosted CI run:

## Security and release impact

- [ ] No secrets (`ECHO_API_KEY`) or real client contact information are included.
- [ ] The `X-Echo-API-Key` authentication boundary is unchanged, or the change is called out
      explicitly and applied to every protected route.
- [ ] Staging-first deployment and rollback implications are documented.
