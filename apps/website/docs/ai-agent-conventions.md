---
title: AI-Agent Conventions
sidebar_position: 9
description: Rules for AI-assisted coding agents working in MockPit-instrumented apps.
---

# AI-Agent Conventions

MockPit is useful when AI-assisted coding produces convincing UI before the data sources are
trustworthy. Add these conventions to projects that use MockPit.

## Agent Rules

- Any API-backed UI section should define a resource key.
- Any hardcoded display value that could be mistaken for live evidence should use
  `AuditMark` or `<mockpit-mark>`.
- Capture mode must not use mock, fallback, unsupported, error, or unknown proof-critical
  records.
- Fallbacks should name their fixture source and the live integration they are waiting on.
- New routes should include at least a minimal capture policy before recorded demos.

## Good Prompt Context

Give an agent the route, the API or mock boundary, and the expected source classification.

```md
When editing the customer profile route:

- use resource key `customers.detail` for GET /api/customers/:id
- mark static empty-state copy as `ui.customers.emptyState`
- keep fallback records presentation-only unless the route is in hybrid mode
- do not treat capture mode as passing unless `customers.detail` is sourced from `api`
```

## Review Checklist

- Did the implementation introduce unmarked hardcoded business data?
- Did a fallback hide a failing live request without a remediation note?
- Are proof-critical resources grouped into the right section?
- Does capture mode block the route when source trust is not good enough?
