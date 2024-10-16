import { NestFactory } from '@nestjs/core';
import { PuzzleServiceModule } from './puzzle-service.module';

async function bootstrap() {
  const app = await NestFactory.create(PuzzleServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
