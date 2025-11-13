import { Controller, Get } from '@nestjs/common';
import { ClientPartnerService } from './client-partner.service';

@Controller()
export class ClientPartnerController {
  constructor(private readonly clientPartnerService: ClientPartnerService) {}

  @Get()
  getHello(): string {
    return this.clientPartnerService.getHello();
  }
}
