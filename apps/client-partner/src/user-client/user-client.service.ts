import { PrismaService } from '@app/core/prisma/prisma.service';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { CreateUserClientDto } from './dto/create-user-client.dto';
import { DocumentType } from './enums/document-type.enum';

@Injectable()
export class UserClientService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createClientDto: CreateUserClientDto) {
    const { documentType, document } = createClientDto;
    const isDocumentValid = this.validateDocument(documentType, document);
    if (!isDocumentValid) {
      throw new BadRequestException(`${documentType} is not valid`);
    }
    const doesUserExists = await this.prismaService.user.findUnique({
      where: {
        document,
      },
    });

    if (doesUserExists) {
      throw new ConflictException(`user with ${documentType} alredy exists`);
    }

    return await this.prismaService.user.create({
      data: {
        ...createClientDto,
        role: 'DEFAULT',
      },
    });
  }

  private validateDocument(
    documentType: DocumentType,
    document: string,
  ): boolean {
    return documentType == DocumentType.CPF
      ? cpf.isValid(document)
      : cnpj.isValid(document);
  }
}
