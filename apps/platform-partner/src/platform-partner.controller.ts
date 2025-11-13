import { Controller, Get } from '@nestjs/common';
import { PlatformPartnerService } from './platform-partner.service';

@Controller()
export class PlatformPartnerController {
  constructor(private readonly platformPartnerService: PlatformPartnerService) {}

  @Get()
  getHello(): string {
    return this.platformPartnerService.getHello();
  }
}
