import { Module } from '@nestjs/common';
import { MusicDownloadService } from './music-download.service';
import { MusicDownloadController } from './music-download.controller';

@Module({
  controllers: [MusicDownloadController],
  providers: [MusicDownloadService],
})
export class MusicDownloadModule {}
