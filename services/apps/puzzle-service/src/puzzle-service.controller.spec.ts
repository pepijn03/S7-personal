import { Test, TestingModule } from '@nestjs/testing';
import { PuzzleServiceController } from './puzzle-service.controller';
import { PuzzleServiceService } from './puzzle-service.service';

describe('PuzzleServiceController', () => {
  let puzzleServiceController: PuzzleServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PuzzleServiceController],
      providers: [PuzzleServiceService],
    }).compile();

    puzzleServiceController = app.get<PuzzleServiceController>(PuzzleServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(puzzleServiceController.getHello()).toBe('Hello World!');
    });
  });
});
