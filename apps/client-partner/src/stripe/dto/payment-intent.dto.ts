import { CardPaymentInformations } from '../../subscriptions/dto/create-subscription.dto';
import { PaymentMethod } from '../../subscriptions/enums/payment-method.enum';

export class PixPaymentOptions {
  expires_at: number;
}

export class PaymentIntentDto {
  amount: number;
  paymentMethod: PaymentMethod;
  cardPaymentOptions?: CardPaymentInformations;
  pixPaymentOption?: PixPaymentOptions;
}
