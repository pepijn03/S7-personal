import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { AppService } from './app.service';
import { puzzlemodule } from './puzzle/puzzle.module';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [CacheModule.register({
    isGlobal: true,
    store: redisStore,
    host: 'localhost',
    port: 6379,
  }),
   puzzlemodule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
