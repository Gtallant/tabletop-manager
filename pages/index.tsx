import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Layout from '../components/layout/layout';
import Login from '../components/login/login';
import { useSelector } from 'react-redux';
;import { RootState } from '../lib/store';
import { userConfig } from '../components/login/constants';

const Home: NextPage = () => {
  const userType = useSelector((state: RootState) => state.login.userType);
  const userTypeConfig = userConfig[userType];
  const { displayName, greeting } = userTypeConfig;
  return (
    <>
      <Head>
        <title>Tabletop Manager</title>
        <meta name="description" content="Welcome to your favorite TTRPG portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Welcome Adventurer!
        </Typography>

        {userType === 'NONE' && <Login />}

      </Layout>
    </>
  )
}

export default Home
