import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography';
import Layout from '../components/layout/layout'
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
        <Typography variant="h1">
          Welcome mighty adventurer!
        </Typography>

        <Typography variant="h3">
          Are you a ...
        </Typography>

      </Layout>
    </>
  )
}

export default Home
