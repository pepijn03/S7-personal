import { Module } from '@nestjs/common';
import { PuzzleController } from './puzzle.controller';
import { PuzzleService } from './puzzle.service';

@Module({
  imports: [],
  controllers: [PuzzleController],
  providers: [PuzzleService],
})
export class PuzzleServiceModule {}
