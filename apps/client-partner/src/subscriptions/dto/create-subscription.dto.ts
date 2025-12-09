import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { PaymentMethod } from '../enums/payment-method.enum';

export class CardPaymentInformations {
  @IsString()
  @IsNotEmpty()
  cardHolderName: string;

  @IsString()
  @IsNotEmpty()
  cardNumber: string;

  @IsString()
  @IsNotEmpty()
  holderCpf: string;

  @IsString()
  @IsNotEmpty()
  cardSecurityCode: string;

  @IsDateString()
  @IsNotEmpty()
  dueDate: Date;

  @IsString()
  @IsNotEmpty()
  cvv: string;
}

export class CreateSubscriptionDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsUUID()
  @IsNotEmpty()
  planId: string;

  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  paymentMethod: PaymentMethod;

  @IsOptional()
  @ValidateNested()
  @Type(() => CardPaymentInformations)
  card?: CardPaymentInformations;
}
