---
title: CLI
sidebar_position: 7
description: Use mockpit init, doctor, and audit from the command line.
---

# CLI

The CLI package provides setup scaffolding, configuration checks, and route audits.

## Install

```sh
pnpm add -D @mockpit/cli
```

The `audit` command uses Playwright as an optional peer dependency:

```sh
pnpm add -D playwright
```

## Initialize Files

```sh
mockpit init
```

This creates `mockpit.config.mjs` and `src/mockpit/client.ts` if they do not already exist.

## Check Setup

```sh
mockpit doctor --config mockpit.config.mjs
```

`doctor` validates the config, checks redaction policy risk, warns about empty resource
arrays, and can check for the MSW worker file.

## Audit Routes

```sh
mockpit audit \
  --base-url http://localhost:5173 \
  --routes /,/customers,/customers/123 \
  --out mockpit-report \
  --fail-on-capture-fail
```

Output:

```txt
mockpit-report/
  manifest.json
  summary.md
  routes/
    index.json
    customers.json
    customers-123.json
```

The CLI reads `window.__MOCKPIT__`, collects route exports, writes JSON and Markdown, and can
fail CI if capture policies are blocked.
