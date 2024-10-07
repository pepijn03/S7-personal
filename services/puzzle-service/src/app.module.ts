import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { AppService } from './app.service';
import { puzzlemodule } from './puzzle/puzzle.module';

@Module({
  imports: [CacheModule.register({ isGlobal: true }), puzzlemodule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
