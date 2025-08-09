import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { MusicDownloadService } from './music-download.service';
import { MusicDownloadDto } from './dto/music-download.dto';

@Controller()
export class MusicDownloadController {
  constructor(private readonly musicDownloadService: MusicDownloadService) {}

  @Post('download-single-track')
  singleTrack(@Body() dto:MusicDownloadDto) {
    return this.musicDownloadService.singleTrack(dto);
  }

  @Post('download-playlist')
  fullPlaylist(@Body() dto: MusicDownloadDto) {
    return this.musicDownloadService.fullPlaylist(dto);
  }


}
