import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Layout from '../../layout/layout';
import { useSelector } from 'react-redux';
;import { RootState } from '../../../pages/_app';
import Link from 'next/link';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { AudioFileMetadata } from '../../../pages/api/audio';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import AudioPlayer from '../../audioPlayer/audioPlayer';

const DmPortal = ({ audioFiles } : { audioFiles: AudioFileMetadata[] }) => {
  const rows: GridRowsProp = audioFiles.map(fileData => ({
    id: fileData.id,
    col1: fileData.name,
    col2: fileData.artist,
    col3: fileData.duration,
  }));
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Name', flex: 1 },
    { field: 'col2', headerName: 'Artist', width: 200 },
    { field: 'col3', headerName: 'Duration', width: 150 },
  ];
  return (
    <>
      <Head>
        <title>DM Portal</title>
        <meta name="description" content="Manage your campaign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Typography variant="h3" component="h1" sx={{ textAlign: 'center', fontSize: '3em', mb: 3 }}>
          DM Portal
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          autoHeight
          disableSelectionOnClick
        />
      </Layout>
      <AudioPlayer fileInfo={audioFiles[0]}/>
    </>
  )
}

export default DmPortal
