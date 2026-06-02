## Key Concepts

### PaymentRequest
A `PaymentRequest` object contains the necessary information to initiate a payment, including:
- **amount**: The amount to be charged.
- **currency**: The currency for the transaction.
- **paymentMethod**: The method of payment (e.g., credit card, PayPal).

### Payment Status
The payment status can be one of the following:
- **Pending**: The payment is being processed.
- **Completed**: The payment was successful.
- **Failed**: The payment could not be completed.
- **Refunded**: The payment has been refunded.

### Error Types
Common error types include:
- **PaymentException**: General errors related to payment processing.
- **GatewayTimeoutException**: Errors due to timeouts when communicating with payment gateways.

