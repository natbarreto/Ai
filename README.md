# AI at Terry

A responsive, dependency-free decision hub for Terry College faculty and staff. Open `index.html` directly or serve this folder with any static web server.

## Content maintenance

Fast-changing product information is isolated in `tools-data.js`:

- `reviewed` and `fiscalYear`
- EITS price source
- annual license prices
- model-access descriptions
- platform/harness, agent, and API notes
- vendor capability links

Stable Terry guidance, routes, use cases, and page structure live in `app.js`. Visual design lives in `styles.css`.

Suggested review cadence:

1. Check the EITS AI Licensing Purchasing Program at the start of each fiscal year and before publishing any price.
2. Quarterly, review the four linked vendor capability sources and revise only confirmed material changes.
3. Review Terry recommendations when UGA contracts, data guidance, Microsoft 365 integration, or local support capacity changes.
4. Update the visible `reviewed` date only after completing the checks.

## Source basis

- EITS AI Licensing Purchasing Program and AI Tools Knowledge Base
- UGA AI Acceptable Use Guidelines
- CAES AI Tool Comparison
- Official product documentation linked in `tools-data.js`
- Three supplied university session transcripts, used to ground the practical patterns: spreadsheet analysis, document intelligence, meeting summaries, ticket triage, onboarding, knowledge retrieval, agents, data-steward approval, human review, and measurable value

The site is intentionally a single page. Navigation links jump to the Staff, Faculty,
License, Comparison, Use Cases, and Responsible Use sections.
