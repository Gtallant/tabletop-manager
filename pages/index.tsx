import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next'
import Head from 'next/head';
import { setUserType } from '../components/login/login.reducer';
import { useSelector, useDispatch } from 'react-redux';
;import { RootState } from './_app';
import { userConfig } from '../components/login/constants';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { authRedirect } from '../lib/utils';
import Home from '../components/pages/home/Home';

const HomePage = ({ userTypeCookie }: {
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
  return (
    <>
      <Head>
        <title>Tabletop Manager</title>
        <meta name="description" content="Welcome to your favorite TTRPG portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home userType={userType} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
 const authData = authRedirect(context.req,context. res, '/');
 if (authData.isRedirect) {
   return {
     redirect: authData.redirect,
   }
 }
  return {
    props: authData.props
  }
}

export default HomePage;
