import { NestFactory } from '@nestjs/core';
import { PlatformPartnerModule } from './platform-partner.module';

async function bootstrap() {
  const app = await NestFactory.create(PlatformPartnerModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
