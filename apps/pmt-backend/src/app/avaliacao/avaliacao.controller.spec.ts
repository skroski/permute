import { Test, TestingModule } from '@nestjs/testing';
import { AvaliacaosController } from './avaliacao.controller';
import { AvaliacaoService } from './avaliacao.service';

describe('AvaliacaosController', () => {
  let controller: AvaliacaosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaliacaosController],
      providers: [AvaliacaoService],
    }).compile();

    controller = module.get<AvaliacaosController>(AvaliacaosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
