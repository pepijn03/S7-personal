import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PuzzleController } from './puzzle.controller';
import { PuzzleService } from './puzzle.service';

@Module({
  imports: [HttpModule],
  controllers: [PuzzleController],
  providers: [PuzzleService],
})
export class puzzlemodule {}