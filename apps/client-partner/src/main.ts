import { NestFactory } from '@nestjs/core';
import { ClientPartnerModule } from './client-partner.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientPartnerModule);
  app.enableCors({
    origin: [process.env.FRONTEND_URL],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  await app.listen(process.env.CLIENTPARTNERPORT ?? 3002);
}
bootstrap();
