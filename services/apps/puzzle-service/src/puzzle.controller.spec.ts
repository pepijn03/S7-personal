import { Test, TestingModule } from '@nestjs/testing';
import { PuzzleController } from './puzzle.controller';
import { PuzzleService } from './puzzle.service';

describe('PuzzleServiceController', () => {
  let puzzleServiceController: PuzzleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PuzzleController],
      providers: [PuzzleService],
    }).compile();

    puzzleServiceController = app.get<PuzzleController>(PuzzleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(puzzleServiceController.getHello()).toBe('Hello World!');
    });
  });
});
