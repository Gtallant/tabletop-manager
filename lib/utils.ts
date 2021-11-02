import axios from 'axios';
import fs from 'fs';
import path from 'path';
import * as mm from 'music-metadata';

const postsDirectory = path.join(process.cwd(), 'public/audio');

export async function listAudioFiles() {
  const fileNames = fs.readdirSync(postsDirectory);
  const formattedFileData = await Promise.all(fileNames.map(async fileName => {
    const metadata = await mm.parseFile(`${postsDirectory}/${fileName}`, { duration: true });
    const { title, artist } = metadata.common;
    const { duration = 1 } = metadata.format;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration - minutes * 60);

    const durationStr = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    return {
      id: fileName.replace(/\.mp3$/, ''),
      url: `/public/audio/${fileName}`,
      duration: durationStr,
      name: title,
      artist: artist,
    }
  }));
  return formattedFileData;
}

export type AudioFileMetadata = {
  id: string
  url: string
  duration: number
  name: string
  artist: string
}
