import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProgress(): string {
    return 'Here is the progress!';
  }
}
