import { Injectable } from '@nestjs/common';

@Injectable()
export class PuzzleServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
