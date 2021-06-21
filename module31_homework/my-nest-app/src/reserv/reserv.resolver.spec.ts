import { Test, TestingModule } from '@nestjs/testing';
import { ReservResolver } from './reserv.resolver';

describe('ReservResolver', () => {
  let resolver: ReservResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservResolver],
    }).compile();

    resolver = module.get<ReservResolver>(ReservResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
