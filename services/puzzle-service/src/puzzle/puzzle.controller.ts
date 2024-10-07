import { Controller, Get, Param,UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { PuzzleService } from './puzzle.service';
import { puzzle } from '../objects/puzzle.interface';

@Controller('puzzle')
export class PuzzleController {
    constructor(private readonly service: PuzzleService) {}

    @UseInterceptors(CacheInterceptor) // Automatically cache the response for this endpoint
    @CacheTTL(30) // override TTL to 30 seconds
    @Get()
    async getAllPuzzles(): Promise<any> {
        return await this.service.getAllPuzzles();
    }

  @Get('/:id')
  async getPuzzle(@Param('id') id: number): Promise<any> {
    return await this.service.getPuzzle(+id);
  } 

  @Get('/date/:date')
  async getPuzzleByDate(@Param('date') Date: string): Promise<any> {
    return await this.service.getPuzzle(+Date);
  } 
}
