// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const base = require('airtable').base(process.env.AIRTABLE_BASE_ID);

export type AudioFileMetadata = {
  id: string
  url: string
  duration: string
  name: string
  artist: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AudioFileMetadata[]>
) {
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
  res.status(200).json(audioFiles)
}
