import { Controller, Get } from '@nestjs/common';
import { PuzzleService } from './puzzle.service';

@Controller()
export class PuzzleController {
  constructor(private readonly puzzleServiceService: PuzzleService) {}

  @Get()
  getHello(): string {
    return this.puzzleServiceService.getHello();
  }
}
