import { Test, TestingModule } from '@nestjs/testing';
import { MusicDownloadService } from './music-download.service';

describe('MusicDownloadService', () => {
  let service: MusicDownloadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicDownloadService],
    }).compile();

    service = module.get<MusicDownloadService>(MusicDownloadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
