---
title: "Dual-WAN Failover with Recursive Routing"
description: "Automatic failover between two internet links using recursive routing and health checks on MikroTik."
pubDate: 2026-02-20
tags: ["Routing", "Failover", "MikroTik"]
draft: false
---

Recursive routing lets MikroTik pick a gateway based on real reachability (ping/route-check) instead of just link state.

## Why recursive?

- More stable than netwatch setups that "flip-flop"
- Supports priority + fallback chains

## The common pattern

1. Default routes with **gateway-check** (check-gateway=ping)
2. A route to a target IP that is "always up"
3. Routing tables + distance for primary/secondary

## Tips

- Use reliable targets (e.g. 1.1.1.1 / 8.8.8.8)
- Pick a sensible ping interval
- Test it: unplug WAN1 and watch the switch-over
