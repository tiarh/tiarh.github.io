---
title: "PPPoE Optimization with PCQ on MikroTik"
description: "How to set up fair bandwidth management for ISP subscribers using PCQ queues."
pubDate: 2026-03-15
tags: ["MikroTik", "PPPoE", "QoS", "PCQ"]
draft: false
---

PCQ (Per Connection Queue) is one of the safest ways for small/mid-size ISPs to share bandwidth evenly — without creating a queue for every single subscriber.

## When PCQ fits

- Many PPPoE subscribers on the same speed profile
- Mixed usage patterns (streaming, browsing, gaming)
- Fairness without per-subscriber micromanagement

## The short version

- **PCQ downloader** splits bandwidth per connection / per client.
- Usually attached to a **queue tree** or **simple queue** (depends on the design).

## Implementation checklist

1. Pick the scheme: simple queue vs queue tree.
2. Make sure mangle/marked traffic is clean if you use queue tree.
3. Test scenarios: 1 user vs many users.
4. Document profiles + limits.

## Notes

If you run PCQ and still get "slow" complaints, the culprit is usually not PCQ but:
- a saturated uplink,
- bufferbloat,
- DNS,
- or radio / last-mile issues.
