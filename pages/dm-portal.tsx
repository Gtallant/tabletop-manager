import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Layout from '../components/layout/layout';
import { useSelector } from 'react-redux';
;import { RootState } from '../lib/store';
import Link from 'next/link';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { AudioFileMetadata, listAudioFiles } from '../lib/utils';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const DmPortal = ({ audioFiles } : { audioFiles: AudioFileMetadata[] }) => {
  const userType = useSelector((state: RootState) => state.login.userType);

  // const rows: GridRowsProp = [
  //   { id: 1, col1: 'Hello', col2: 'World' },
  //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  //   { id: 3, col1: 'MUI', col2: 'is Amazing' },
  // ];

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

      <Layout>
        <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
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

export default DmPortal
