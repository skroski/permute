import { Test, TestingModule } from '@nestjs/testing';
import { PermutasService } from './permutas.service';

describe('PermutasService', () => {
  let service: PermutasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermutasService],
    }).compile();

    service = module.get<PermutasService>(PermutasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
