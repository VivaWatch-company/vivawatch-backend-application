import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { DocumentType } from '../enums/document-type.enum';

export class CreateUserClientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @IsEnum(DocumentType)
  documentType: DocumentType;

  @IsNotEmpty()
  @IsString()
  document: string;
}
