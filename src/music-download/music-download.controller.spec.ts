import { Test, TestingModule } from '@nestjs/testing';
import { MusicDownloadController } from './music-download.controller';
import { MusicDownloadService } from './music-download.service';

describe('MusicDownloadController', () => {
  let controller: MusicDownloadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicDownloadController],
      providers: [MusicDownloadService],
    }).compile();

    controller = module.get<MusicDownloadController>(MusicDownloadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
