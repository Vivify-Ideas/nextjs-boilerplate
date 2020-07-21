/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cookies from 'next-cookies';
import merge from 'lodash/merge';

import AuthService from '../services/AuthService';
import Layout from '../components/shared/layout/Layout';
import { withZustand } from '../utils/hoc/withZustand';

const MyApp = ({ Component, pageProps, hideHeader }) => (
  <Layout hideHeader={hideHeader}>
    <Component {...pageProps} />
  </Layout>
);

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  const accessToken = cookies(ctx).access_token;

  let user = {};
  if (accessToken) {
    AuthService.attachAuthHeader(accessToken);
    const { data: userData } = await AuthService.getUser();
    user = userData;
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }

  const initialState = merge(
    {},
    { auth: { auth: !!accessToken, user } },
    pageProps.initialState || {}
  );

  return {
    pageProps,
    hideHeader: Component.hideHeader,
    initialState
  };
};

export default withZustand(MyApp);
