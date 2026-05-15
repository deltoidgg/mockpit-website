---
title: Introduction
sidebar_position: 1
description: Learn what MockPit records and why runtime provenance matters for prototype-driven development.
---

# Introduction

MockPit answers one question:

> What is this screen made of right now?

Prototype UI often mixes live services, MSW mocks, fallback fixtures, hardcoded copy,
derived values, empty responses, unsupported backend capabilities, and errors. MockPit
makes that mix visible at runtime so a convincing screen does not get mistaken for a
trustworthy one.

## What MockPit Gives You

- A framework-neutral browser client for recording provenance.
- Shadow DOM devtools that work with vanilla apps, React apps, and other frameworks.
- React helpers for providers, hooks, UI marks, sections, and devtools mounting.
- An MSW adapter that marks handler responses and flags critical route gaps.
- Capture policies for proof-ready routes.
- CLI audits that visit routes with Playwright and export JSON or Markdown reports.

## Source Taxonomy

| Source             | Meaning                                                              |
| ------------------ | -------------------------------------------------------------------- |
| `api`              | Data came from a live service response.                              |
| `mock`             | Data came from mock transport such as MSW.                           |
| `fallback`         | Live data failed or was absent, so a fixture fallback was used.      |
| `derived`          | Value was computed locally from other inputs.                        |
| `hardcoded`        | Value was written directly in the app.                               |
| `authoredFallback` | Human-written fallback copy appeared because source data was absent. |
| `empty`            | Live request succeeded but returned nothing usable.                  |
| `unsupported`      | Backend capability or route is not available yet.                    |
| `error`            | Request, parsing, or handler failure.                                |
| `unknown`          | MockPit could not classify the source.                               |

## Mental Model

Define resources for the data your UI depends on, group those resources into route sections,
then record source information as the app runs. The devtools panel summarizes the current
route, highlights risky records, and shows whether a route is ready for capture.

Use MockPit earliest when prototypes are still messy. It is most valuable when the UI looks
complete before its data contracts are complete.
