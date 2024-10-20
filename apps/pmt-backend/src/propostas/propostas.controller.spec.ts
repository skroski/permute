import { Test, TestingModule } from '@nestjs/testing';
import { PropostasController } from './propostas.controller';
import { PropostasService } from './propostas.service';

describe('PropostasController', () => {
  let controller: PropostasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropostasController],
      providers: [PropostasService],
    }).compile();

    controller = module.get<PropostasController>(PropostasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
