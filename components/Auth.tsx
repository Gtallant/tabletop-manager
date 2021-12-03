import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next'
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout/layout';
import Login from '../components/login/login';
import { setUserType } from '../components/login/login.reducer';
import { useSelector, useDispatch } from 'react-redux';
;import { RootState } from '../pages/_app';
import { userConfig, UserType, userTypecast } from '../components/login/constants';
import { ReactChild, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authRedirect } from '../lib/utils';
import Cookies from 'js-cookie';

const Auth = ({ authType, authContent, fallthroughContent }: {
  authType: UserType,
  authContent: ReactChild,
  fallthroughContent: ReactChild,
}
) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userType = useSelector((state: RootState) => state.login.userType);
  
  useEffect(() => {
    const userTypeCookie = userTypecast(Cookies.get('userType'));
    if (userType !== userTypeCookie) {
      dispatch(setUserType(userTypeCookie));
    }
  }, []);

  if(userType === 'DM') {
    router.replace('/dm-portal');
  }
  const userTypeConfig = userConfig[userType];
  const { displayName, greeting } = userTypeConfig;
  if(userType === authType) {
    return (<>{authContent}</>);
  }
  return (<>{fallthroughContent}</>);
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  return authRedirect(context.req,context. res, '/');
}

export default Auth;
