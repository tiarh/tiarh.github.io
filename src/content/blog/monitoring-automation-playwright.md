---
title: "Monitoring Automation dengan Playwright"
description: "Generate laporan monitoring otomatis dari web dashboard dan kirim ke WhatsApp/Telegram dalam bentuk gambar."
pubDate: 2026-01-10
tags: ["Automation", "Playwright", "Python", "NOC"]
draft: false
---

Kalau NOC masih screenshot manual dashboard, itu cepat capek dan rawan miss.

## Target

- 1 command chat: `monitoring AREA`
- Output: gambar PNG siap kirim
- Exclude pelanggan isolir

## Pipeline

1. Login dashboard dengan Playwright
2. Ambil tabel status
3. Render HTML yang rapi
4. Screenshot ke PNG
5. Kirim ke WA/Telegram

## Benefit

- Lebih cepat
- Lebih konsisten
- Bisa dijadwalkan (cron)
