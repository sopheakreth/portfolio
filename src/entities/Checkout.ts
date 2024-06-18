
export default interface CheckoutData {
  edcTransactionId: string;
  returnUrl: string;
  callbackUrl: string;
  paymentStatus: string;
  channel: string;
  coreBankingReference: string;
  transactionFeeAmount: string;
  transactionAmount: string;
  totalAmount: string;
  transactionCurrency: string;
  merchantName: string;
  merchantNameKh: string;
  transactionDate: string;
  transactionExpiredInSecond: string | number;
  qrContentBase64: string;
}

export default interface Checkout {
  code: string;
  data: CheckoutData;
  description: string;
}