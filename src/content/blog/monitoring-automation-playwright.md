---
title: "Monitoring Automation with Playwright"
description: "Generate monitoring reports automatically from a web dashboard and deliver them to WhatsApp/Telegram as images."
pubDate: 2026-01-10
tags: ["Automation", "Playwright", "Python", "NOC"]
draft: false
---

If your NOC still takes manual dashboard screenshots, it gets tiring fast — and things get missed.

## The goal

- One chat command: `monitoring AREA`
- Output: a PNG ready to send
- Suspended (isolir) customers excluded

## Pipeline

1. Log into the dashboard with Playwright
2. Grab the status table
3. Render clean HTML
4. Screenshot to PNG
5. Send to WhatsApp/Telegram

## Payoff

- Faster
- Consistent format
- Schedulable (cron)
