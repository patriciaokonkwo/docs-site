# Quickstart

This is the updated setup documentation for quickstart.

## 1. Get your API key
Log in to the merchant portal → Settings → API Keys.

## 2. Make your first request
```bash
curl -X POST https://api.novapay.io/v1/payments \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -d '{"amount": 1000, "currency": "USD", "idempotency_key": "order_123"}'
```
