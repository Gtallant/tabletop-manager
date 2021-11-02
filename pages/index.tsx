import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Layout from '../components/layout/layout';
import Login from '../components/login/login';
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tabletop Manager</title>
        <meta name="description" content="Welcome to your favorite TTRPG portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Welcome adventurer!
        </Typography>

        <Login />

      </Layout>
    </>
  )
}

export default Home
