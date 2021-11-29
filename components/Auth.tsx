import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next'
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout/layout';
import Login from '../components/login/login';
import { setUserType } from '../components/login/login.reducer';
import { useSelector, useDispatch } from 'react-redux';
;import { RootState } from '../pages/_app';
import { userConfig } from '../components/login/constants';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { authRedirect } from '../lib/utils';

const Auth = ({ userTypeCookie }: {
  userTypeCookie: string
}
) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userType = useSelector((state: RootState) => state.login.userType);
  useEffect(() => {
    if (userType !== userTypeCookie) {
      dispatch(setUserType(userTypeCookie));
    }
  }, [userTypeCookie]);
  if(userType === 'DM') {
    router.replace('/dm-portal');
  }
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

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  return authRedirect(context.req,context. res, '/');
}

export default Auth;
