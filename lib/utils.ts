import axios from 'axios';
import fs from 'fs';
import path from 'path';
import * as mm from 'music-metadata';


const base = require('airtable').base('app8ATwuKjfAqLgYg');

export async function listAudioFiles() {
  const audioFiles: AudioFileMetadata[] = [];
  const audioFilesTable = await base('Audio Files').select({
    view: "Grid view"
  });
  await audioFilesTable.eachPage(async (records: any, fetchNextPage: any) =>{
      await records.forEach(async (record: any) => {
          const attachment = record.get('Attachments')[0];
          const duration = record.get('Duration');
          const minutes = Math.floor(duration / 60);
          const seconds = Math.floor(duration - minutes * 60);
          const durationStr = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
          audioFiles.push({
            id: record.id,
            name: record.get('Name'),
            artist: record.get('Artist'),
            duration: durationStr,
            url: attachment.url,
          });
      });
      fetchNextPage();

  });
  return audioFiles;
}

export type AudioFileMetadata = {
  id: string
  url: string
  duration: string
  name: string
  artist: string
}
