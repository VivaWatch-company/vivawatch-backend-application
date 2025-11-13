import { Injectable } from '@nestjs/common';

@Injectable()
export class PlatformPartnerService {
  getHello(): string {
    return 'Hello World!';
  }
}
