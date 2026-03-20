---
title: "Optimasi PPPoE dengan PCQ di MikroTik"
description: "Cara mengatur bandwidth management yang fair untuk pelanggan ISP menggunakan PCQ queues."
pubDate: 2026-03-15
tags: ["MikroTik", "PPPoE", "QoS", "PCQ"]
draft: false
---

PCQ (Per Connection Queue) itu salah satu cara paling “aman” buat ISP kecil/menengah supaya bandwidth kebagi rata, tanpa perlu bikin queue satu-satu per pelanggan.

## Kapan PCQ cocok?

- Banyak pelanggan PPPoE dengan profil speed yang sama
- Pola pemakaian variatif (streaming, browsing, game)
- Mau fairness tanpa ribet

## Prinsip singkat

- **PCQ downloader** membagi bandwidth per-connection/per-client.
- Biasanya dipasang di **queue tree** atau **simple queue** (tergantung desain).

## Checklist implementasi

1. Tentukan skema: simple queue vs queue tree.
2. Pastikan mangle/mark traffic rapi kalau pakai queue tree.
3. Uji skenario: 1 user vs banyak user.
4. Dokumentasikan profil + limit.

## Catatan

Kalau kamu pakai PCQ tapi masih ada keluhan “lemot”, biasanya masalahnya bukan PCQ, tapi:
- uplink memang penuh,
- bufferbloat,
- DNS,
- atau radio/last-mile.
