import { NestFactory } from '@nestjs/core';
import { PlatformPartnerModule } from './platform-partner.module';

async function bootstrap() {
  const app = await NestFactory.create(PlatformPartnerModule);
  await app.listen(process.env.PLATFORMPARTNER ?? 3003);
}
bootstrap();
