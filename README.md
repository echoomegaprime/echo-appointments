# Echo Appointments

Multi-tenant scheduling and appointments SaaS -- a Cloudflare Worker (Hono + D1 + KV + service
bindings) covering tenants, providers, services, availability, appointments, reminders,
analytics, AI no-show-risk analysis, and a public booking portal.

## Endpoints

| Access | Method | Path | Description |
|---|---|---|---|
| Public | GET | `/`, `/health`, `/status` | Service info / health / D1 connectivity |
| Public | GET/POST | `/book/:tenant_id` | Public booking portal |
| Authenticated | GET/POST/PUT/PATCH | `/tenants`, `/providers`, `/services`, `/availability`, `/appointments` | Tenant/provider/service/availability/appointment management |
| Authenticated | GET | `/slots/:provider_id`, `/analytics`, `/dashboard` | Availability lookup, analytics, dashboard |
| Authenticated | POST | `/appointments/:id/{confirm,complete,no-show,reschedule,analyze}` | Appointment lifecycle + AI risk analysis |

## Authentication

Every route other than `/`, `/health`, `/status`, and the public `/book/:tenant_id` booking
portal requires `X-Echo-API-Key`, compared to `env.ECHO_API_KEY` in constant time -- all 11
checks in the file share one `timingSafeEqual` helper.

## Verify

```powershell
npm install
npm test
```

## Security

See [SECURITY.md](SECURITY.md) to report a vulnerability -- never as a public issue. This
service holds client PII (name/email/phone) in appointments and bookings.

## License

See [LICENSE](LICENSE). Contributions: see [CONTRIBUTING.md](CONTRIBUTING.md).
