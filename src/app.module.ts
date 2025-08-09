import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicDownloadModule } from './music-download/music-download.module';

@Module({
  imports: [ MusicDownloadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
