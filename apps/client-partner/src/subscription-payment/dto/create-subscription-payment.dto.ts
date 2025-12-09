import { PaymentMethod, SubscriptionPaymentStatus } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateSubscriptionPaymentDto {
  @IsUUID()
  @IsNotEmpty()
  subscriptionId: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  method: PaymentMethod;

  @IsEnum(SubscriptionPaymentStatus)
  @IsNotEmpty()
  status: SubscriptionPaymentStatus;

  @IsString()
  @IsNotEmpty()
  transactionId?: string;

  @IsString()
  @IsNotEmpty()
  statusReason: string;

  @IsDateString()
  @IsNotEmpty()
  paidAt: Date;

  @IsNumber()
  @IsNotEmpty()
  attempts: number;
}
