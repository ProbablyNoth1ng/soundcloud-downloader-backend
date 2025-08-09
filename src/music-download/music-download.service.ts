import { Injectable } from '@nestjs/common';
import fs from 'fs';
import path from 'path';
import { SoundCloud } from 'scdl-core';
import { MusicDownloadDto } from './dto/music-download.dto';

@Injectable()
export class MusicDownloadService {
  async singleTrack(dto:MusicDownloadDto) {
    await SoundCloud.connect();
    const track = await SoundCloud.tracks.getTrack(dto.link);
    const stream = await SoundCloud.download(dto.link);
    
    this.checkDirectoryExistence()
    stream.pipe(fs.createWriteStream(path.resolve(path.join(__dirname, 'output', `${track.title}.mp3`))));


    return `downloaded ${track.title}` ;
  }


  async fullPlaylist(dto: MusicDownloadDto) {
    await SoundCloud.connect();
    const playlist = await SoundCloud.playlists.getPlaylist(dto.link);
    
    this.checkDirectoryExistence()
    fs.mkdir(path.join(__dirname,'output',playlist.title), (err) => {
      if(err){
        throw err;
      }
      console.log(`directory with title ${playlist.title} created`)
    })

    playlist.tracks.forEach( async (track, id) => {
        let stream = await SoundCloud.download(track.permalink_url)
        stream.pipe(fs.createWriteStream(path.resolve(path.join(__dirname, 'output', playlist.title , `${track.title}.mp3`))))
    })



    return `downloaded ${playlist.title}` ;
  }


  async checkDirectoryExistence(){
      if(!fs.existsSync(path.join(__dirname, 'output'))){
        fs.mkdir(path.join(__dirname, 'output'), (err) => {
          if(err) {
            throw err;
          }
          console.log('Directory created successfully!')
        })
    }
  }

}
