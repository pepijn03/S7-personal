import { Injectable } from '@nestjs/common';

@Injectable()
export class PuzzleService {
  getHello(): string {
    return 'Hello World!';
  }
}
