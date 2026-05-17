# Quickstart

Create your first payment in 5 minutes.

## 1. Get your API key
Log in to the merchant portal → Settings → API Keys.

## 2. Configure your environment
1. Install the necessary dependencies:
   ```bash
   npm install <dependency-name>
   ```
2. Set up environment variables:
   - Create a `.env` file in your project root and add your API key:
   ```bash
   API_KEY=your_api_key_here
   ```

## 3. Make your first request
```bash
curl -X POST https://api.novapay.io/v1/payments \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -d '{"amount": 1000, "currency": "USD", "idempotency_key": "order_123"}'
```