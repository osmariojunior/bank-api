import { Test, TestingModule } from '@nestjs/testing';
import { MyFistController } from './my-fist.controller';

describe('MyFistController', () => {
  let controller: MyFistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyFistController],
    }).compile();

    controller = module.get<MyFistController>(MyFistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
