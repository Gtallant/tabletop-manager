import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Layout from '../../layout/layout';
import { AudioFileMetadata } from '../../../pages/api/audio';
import AudioPlayer from '../../audioPlayer/audioPlayer';

const PlayerPortal = ({ audioFile } : { audioFile: AudioFileMetadata }) => {
  return (
    <>
      <Layout>
        <Typography variant="h3" component="h1" sx={{ textAlign: 'center', fontSize: '3em', mb: 3 }}>
          Player Portal
        </Typography>
      </Layout>
      {audioFile && <AudioPlayer fileInfo={audioFile}/>}
    </>
  )
}

export default PlayerPortal;