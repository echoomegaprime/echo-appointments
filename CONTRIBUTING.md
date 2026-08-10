# Contributing

Thank you for improving Echo Appointments. This is a public, proprietary infrastructure project:
contributions are welcome for review, but repository visibility does not grant a general use or
redistribution license.

## Development path

1. Open an issue describing the scheduling/booking behavior being changed.
2. Create a focused branch from current `main`.
3. Add a failing test before changing authentication.
4. Validate before opening a pull request:

   ```powershell
   npm install
   npm test
   ```

5. Open a pull request using the repository template and include exact test output.

## Pull-request requirements

- No secrets (`ECHO_API_KEY`) or real client contact information are included.
- No stubs, placeholders, skipped security checks, or self-asserted readiness.
- Changes to the `X-Echo-API-Key` authentication boundary are called out explicitly, and applied
  consistently across all protected routes.
