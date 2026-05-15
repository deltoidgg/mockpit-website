---
title: Modes
sidebar_position: 6
description: Understand MockPit trust modes and when to use each one.
---

# Modes

Modes are trust policies, not feature flags. They describe how the current route should
treat mock transport, fallbacks, highlights, and proof requirements.

| Mode      | Transport              | Fallback                  | Best For                           |
| --------- | ---------------------- | ------------------------- | ---------------------------------- |
| `mock`    | Mock transport allowed | Not needed                | Fixture-driven prototyping.        |
| `hybrid`  | Live first             | Explicit fallback allowed | Partial backend integration.       |
| `live`    | Live only              | No fallback               | Integration testing.               |
| `audit`   | Live only              | No fallback               | Visual source review.              |
| `capture` | Live only              | Blocked by default        | Recorded demos and customer proof. |

## Switch Modes

```ts
const transition = mockpit.setMode("audit");
```

When leaving or entering mock mode, the transition may include:

```ts
{
  requiresReload: true,
  transportCleanupRequired: true
}
```

Use this to prompt for a reload or clean up MSW workers before trusting the route.

## Capture Readiness Checklist

- Required resources have records for the current route.
- Required records use allowed sources, usually `api`.
- Field coverage meets the configured minimum.
- Blocked source kinds such as `mock`, `fallback`, `unsupported`, `error`, or `unknown`
  are absent from proof-critical records.
- Presentation-only UI marks are marked with `criticality: "presentation"` when they should
  not block proof.
