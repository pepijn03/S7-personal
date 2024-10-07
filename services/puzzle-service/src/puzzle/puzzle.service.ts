import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { puzzle } from '../objects/puzzle.interface';
import * as fs from 'fs';



@Injectable()
export class PuzzleService {
    constructor(
        private readonly httpService: HttpService,
        @Inject(CACHE_MANAGER) private cacheService: Cache,
    ) {}

    private puzzles: puzzle[] = [
        {id : 1, date: '2024-10-07', verticalHints: ["vhint1", "vhint2", "vhint3"], horizontalHints: ["hhint1", "hhint2", "hhint3"], answer: ["word1", "word2", "word3"]},
        {id : 2, date: '2024-10-08', verticalHints: ["vhint1", "vhint2", "vhint3"], horizontalHints: ["hhint1", "hhint2", "hhint3"], answer: ["word1", "word2", "word3"]},
    ];

    async getAllPuzzles(): Promise<any> {
        return this.puzzles;
    }

    async getPuzzle(id:number): Promise<puzzle> {
        return this.puzzles.find(puzzle => puzzle.id === id);
    }

    async getPuzzleByDate(date: string): Promise<puzzle> {
        return this.puzzles.find(puzzle => puzzle.date === date);
    }
    /* if (puzzle) {
      await this.cacheService.set(formattedDate, puzzle);
      const cachedData = await this.cacheService.get(formattedDate);
      console.log('data set to cache', cachedData);
      return puzzle;
    } else {
      throw new Error('Puzzle not found for the given date');
    } */
}