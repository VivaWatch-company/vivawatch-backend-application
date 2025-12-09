import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { CardPaymentInformations } from '../../subscriptions/dto/create-subscription.dto';
import { PaymentMethod } from '../../subscriptions/enums/payment-method.enum';

export class PixPaymentOptions {
  expires_at: number;
}

export class PaymentIntentDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  paymentMethod: PaymentMethod;

  @IsOptional()
  @ValidateNested()
  @Type(() => CardPaymentInformations)
  cardPaymentOptions?: CardPaymentInformations;

  @IsOptional()
  @ValidateNested()
  @Type(() => PixPaymentOptions)
  pixPaymentOption?: PixPaymentOptions;
}
