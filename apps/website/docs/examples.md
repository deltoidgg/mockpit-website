---
title: Examples
sidebar_position: 8
description: Explore the example apps in the MockPit repository.
---

# Examples

The MockPit repo includes three Vite examples that map directly to the docs paths.

| Example        | Path                        | What It Shows                                                               |
| -------------- | --------------------------- | --------------------------------------------------------------------------- |
| Vanilla + Vite | `examples/vite-basic`       | Custom elements, audited fetch, mode switching, and all source kinds.       |
| React + Vite   | `examples/vite-react-basic` | Provider, hooks, `AuditMark`, `AuditSection`, and devtools.                 |
| MSW + Vite     | `examples/vite-msw`         | `setupMockPitWorker`, `withMockPitHandler`, scenarios, and critical routes. |

## Run An Example

```sh
git clone https://github.com/deltoidgg/mockpit.git
cd mockpit
pnpm install
pnpm build
pnpm --filter @mockpit/example-vite-basic dev
```

Swap the filter for another example:

```sh
pnpm --filter @mockpit/example-vite-react-basic dev
pnpm --filter @mockpit/example-vite-msw dev
```

## What To Try

- Switch from `mock` to `audit` and watch warnings change.
- Trigger fallback, empty, unsupported, and error records.
- Open the Capture tab and compare the route against its policy.
- Export JSON or Markdown from the devtools panel.
