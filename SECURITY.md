# Security policy

Echo Appointments is a multi-tenant scheduling/booking Cloudflare Worker (Hono + D1 + KV +
service bindings) handling tenants, providers, services, availability, appointments, and client
PII (name/email/phone). Every route other than the public root/health/status/booking-portal
endpoints requires `X-Echo-API-Key`, compared to `env.ECHO_API_KEY` in constant time across all
11 checks in the file.

## Supported version

Security fixes target the current `main` branch and the currently deployed Worker release.
Historical commits are retained for evidence and are not patched in place.

## Report a vulnerability

Do not open a public issue for a suspected vulnerability. Send a private report to
`security@echo-op.com` with:

- affected endpoint and exact revision;
- reproduction steps and expected impact;
- whether the `X-Echo-API-Key` authentication boundary, or client PII (name/email/phone) in
  appointments/bookings, may be involved;
- safe contact details for follow-up.

Never include a live `ECHO_API_KEY` or real client contact information in a report.
