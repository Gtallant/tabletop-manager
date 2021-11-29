import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Layout from '../components/layout/layout';
import { useSelector } from 'react-redux';
;import { RootState } from '../lib/store';
import Link from 'next/link';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { AudioFileMetadata, authRedirect, listAudioFiles } from '../lib/utils';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import AudioPlayer from '../components/audioPlayer/audioPlayer';

const PlayerPortal = ({ audioFile } : { audioFile: AudioFileMetadata }) => {
  return (
    <>
      <Head>
        <title>DM Portal</title>
        <meta name="description" content="Manage your campaign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Typography variant="h3" component="h1" sx={{ textAlign: 'center', fontSize: '3em', mb: 3 }}>
          Player Portal
        </Typography>
      </Layout>
      {audioFile && <AudioPlayer fileInfo={audioFile}/>}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  return authRedirect(context.req,context. res, '/player-portal');
}

export default PlayerPortal
