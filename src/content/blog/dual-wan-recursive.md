---
title: "Setup Dual-WAN Failover dengan Recursive Routing"
description: "Implementasi failover otomatis antara dua koneksi internet menggunakan recursive routing dan health-check."
pubDate: 2026-02-20
tags: ["Routing", "Failover", "MikroTik"]
draft: false
---

Recursive routing membantu MikroTik memilih gateway berdasarkan reachability target (ping/route-check).

## Kenapa recursive?

- Lebih stabil dibanding netwatch yang “flip-flop”
- Bisa dibuat prioritas + fallback

## Pola umum

1. Default route pakai **gateway-check** (check-gateway=ping)
2. Buat route ke target IP yang “selalu hidup”
3. Routing table dan distance untuk primary/secondary

## Tips

- Pakai target yang reliable (mis. 1.1.1.1 / 8.8.8.8)
- Gunakan interval ping yang masuk akal
- Uji: cabut WAN1, lihat switching
