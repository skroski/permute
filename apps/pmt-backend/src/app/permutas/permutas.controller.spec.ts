import { Test, TestingModule } from '@nestjs/testing';
import { PermutasController } from './permutas.controller';
import { PermutasService } from './permutas.service';

describe('PermutasController', () => {
  let controller: PermutasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermutasController],
      providers: [PermutasService],
    }).compile();

    controller = module.get<PermutasController>(PermutasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
