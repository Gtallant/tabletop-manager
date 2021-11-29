import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Layout from '../components/layout/layout';
import { useSelector } from 'react-redux';
import { RootState } from './_app';
import Link from 'next/link';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { AudioFileMetadata, listAudioFiles } from '../lib/utils';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import AudioPlayer from '../components/audioPlayer/audioPlayer';

const DmPortalPage = ({ audioFiles } : { audioFiles: AudioFileMetadata[] }) => {
  const userType = useSelector((state: RootState) => state.login.userType);
  if (userType !== 'DM') {
    return (
      <Layout>
        <Box sx={{ textAlign: 'center' }} >
          <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
            Sorry, this content is for DMs only!
          </Typography>
          <Link href="/" passHref>
            <Button sx={{ fontSize: '1.5em' }} component="a" type="text">Back to Home</Button>
          </Link>
        </Box>
      </Layout>
    );
  }
  return (
    <>
      <Head>
        <title>DM Portal</title>
        <meta name="description" content="Manage your campaign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const audioFiles = await listAudioFiles();
  return {
    props: {
      audioFiles
    }
  }
}

export default DmPortalPage;
