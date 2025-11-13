import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientPartnerService {
  getHello(): string {
    return 'Hello World!';
  }
}
