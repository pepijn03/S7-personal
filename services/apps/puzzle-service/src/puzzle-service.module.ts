import { Module } from '@nestjs/common';
import { PuzzleServiceController } from './puzzle-service.controller';
import { PuzzleServiceService } from './puzzle-service.service';

@Module({
  imports: [],
  controllers: [PuzzleServiceController],
  providers: [PuzzleServiceService],
})
export class PuzzleServiceModule {}
