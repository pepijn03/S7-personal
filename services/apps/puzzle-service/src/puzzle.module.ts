import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PuzzleController } from './puzzle.controller';
import { PuzzleService } from './puzzle.service';

@Module({
  imports: [HttpModule],
  controllers: [PuzzleController],
  providers: [PuzzleService],
})
export class PuzzleServiceModule {}
