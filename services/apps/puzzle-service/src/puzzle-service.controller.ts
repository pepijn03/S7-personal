import { Controller, Get } from '@nestjs/common';
import { PuzzleServiceService } from './puzzle-service.service';

@Controller()
export class PuzzleServiceController {
  constructor(private readonly puzzleServiceService: PuzzleServiceService) {}

  @Get()
  getHello(): string {
    return this.puzzleServiceService.getHello();
  }
}
