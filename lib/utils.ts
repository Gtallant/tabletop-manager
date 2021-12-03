import Cookies from 'cookies';
import fs from 'fs';
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { UserType, userTypecast } from '../components/login/constants';


// Note only call this function during SSR, as process.env isn't defined on the client side
export async function listAudioFiles() {
  const base = require('airtable').base(process.env.AIRTABLE_BASE_ID);
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

export const authRedirect = (req: IncomingMessage, res: ServerResponse, pageUrl: string ): any => {
  const cookies = new Cookies(req, res);
  const userTypeCookie: UserType = userTypecast(cookies.get('userType'));
  if (userTypeCookie === 'DM' && pageUrl !== '/dm-portal') {
    return {
      isRedirect: true,
      redirect: {
        destination: '/dm-portal',
        permanent: false,
      },
    }
  }
  if (userTypeCookie === 'PLAYER' && pageUrl !== '/player-portal') {
    return {
      isRedirect: true,
      redirect: {
        destination: '/player-portal',
        permanent: false,
      },
    }
  }
  if (userTypeCookie === 'NONE' && pageUrl !== '/') {
    return {
      isRedirect: true,
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    isRedirect: false,
    props: {
      userTypeCookie,
    }
  }
}
