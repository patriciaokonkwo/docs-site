## Authentication

To access the PaymentService API, you must include a valid API key in the request headers. The API key can be obtained from the developer portal after registering your application.

### Example Header
```http
Authorization: Bearer YOUR_API_KEY
```

## Rate Limits

The PaymentService API enforces rate limits to ensure fair usage. The current limits are:
- **Requests per minute**: 100
- **Requests per hour**: 1000

If you exceed these limits, you will receive a `429 Too Many Requests` response. Please implement exponential backoff in your application to handle rate limit errors gracefully.

