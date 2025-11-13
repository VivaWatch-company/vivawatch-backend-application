import { NestFactory } from '@nestjs/core';
import { ClientPartnerModule } from './client-partner.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientPartnerModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
