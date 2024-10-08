import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { AppService } from './app.service';
import { puzzlemodule } from './puzzle/puzzle.module';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule } from '@nestjs/config';
import { url } from 'inspector';

// Log the Redis URL to verify it's being read correctly
console.log('Connecting to Redis at:', process.env.REDIS_URL);

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '../../.env',

  }),
    CacheModule.register({
    isGlobal: true,
    store: redisStore,
    url: process.env.REDIS_URL ,
  }),
  
  puzzlemodule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
