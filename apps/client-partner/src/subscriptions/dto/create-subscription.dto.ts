import { PaymentMethod } from '@prisma/client';

export class CardPaymentInformations {
  payerFirstName: string;
  payerLastName: string;
  cardSecirityCode: string;
  cvv: string;
}

export class CreateSubscriptionDto {
  userId: string;
  planId: string;
  paymentMethod: PaymentMethod;
  card?: CardPaymentInformations;
}
