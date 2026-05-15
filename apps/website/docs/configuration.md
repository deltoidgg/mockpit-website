---
title: Configuration
sidebar_position: 5
description: Configure resources, sections, capture policies, scenarios, and redaction.
---

# Configuration

MockPit configuration is intentionally small. Define what your app depends on, how routes
group those dependencies, and what must be true before a route is proof-ready.

## Resources

Resources are named data dependencies.

```ts
import { defineResource } from "@mockpit/core";

defineResource({
  key: "customers.detail",
  label: "Customer detail",
  match: { method: "GET", url: "/api/customers/:id" },
  assess: (data: { id?: string; name?: string }) => ({
    empty: !data.id,
    coverage: {
      present: [data.id, data.name].filter(Boolean).length,
      total: 2,
    },
  }),
  fallbackSource: "src/fixtures/customer.ts",
  remediation: "Implement GET /api/customers/:id with id and name.",
});
```

## Sections

Sections group resources for one route area.

```ts
import { defineSection } from "@mockpit/core";

defineSection({
  route: "/customers/:id",
  id: "customers.profile",
  label: "Customer profile",
  resources: ["customers.detail", "ui.customers.summary"],
});
```

## Capture Policies

Capture policies define the minimum proof requirements for a route.

```ts
import { defineCapturePolicy } from "@mockpit/core";

defineCapturePolicy({
  route: "/customers/:id",
  name: "Customer profile proof",
  required: [
    {
      resourceKey: "customers.detail",
      allowedSources: ["api"],
      minCoverage: 0.8,
    },
  ],
  blockOn: ["mock", "fallback", "unsupported", "error", "unknown"],
});
```

## Scenarios

Scenarios describe demo context separately from whether data is live, mock, or fallback.

```ts
import { defineScenario } from "@mockpit/core";

defineScenario({
  key: "persona",
  label: "Persona",
  defaultVariant: "buyer",
  variants: [
    { key: "buyer", label: "Buyer" },
    { key: "operator", label: "Operator" },
  ],
});
```

## Redaction

Exports are metadata-only by default. If you include values, configure masking first.

```ts
import { defineRedactionPolicy } from "@mockpit/core";

defineRedactionPolicy({
  default: "metadata-only",
  allowFields: ["fieldCoverage", "sourceKind", "status", "reason"],
  maskPatterns: [/email/i, /token/i, /name/i],
});
```

## Fallback Hygiene Checklist

- Name every fallback source file.
- Add a remediation note when a fallback hides missing backend work.
- Keep fallback data out of capture-critical proof unless explicitly allowed.
- Use `authoredFallback` for human-written copy shown because source data is absent.
