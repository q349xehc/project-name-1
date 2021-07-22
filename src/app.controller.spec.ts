import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestType } from './request-type';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return work time', async () => {
      const request: RequestType = {
        date: '2021-07-06',
        userId: 1
      };
      const result = await appController.getWorkTime(request);
      console.log('result:', result); // DEBUG
      expect(result).toBeInstanceOf(Object)
      expect(result).toHaveProperty('userId');
      expect(result).toHaveProperty('date');
      expect(result).toHaveProperty('workTime');
      expect(result).toHaveProperty('userName');
    });
  });
});