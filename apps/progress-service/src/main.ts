import { NestFactory } from '@nestjs/core';
import { ProgressServiceModule } from './progress-service.module';

async function bootstrap() {
  const app = await NestFactory.create(ProgressServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
