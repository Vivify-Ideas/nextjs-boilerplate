/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cookies from 'next-cookies';

import AuthService from '../services/AuthService';
import Layout from '../components/shared/layout/Layout';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps, hideHeader }) => (
  <Layout hideHeader={hideHeader}>
    <Component {...pageProps} />
  </Layout>
);

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  const auth = cookies(ctx).access_token;

  if (auth) {
    AuthService.attachAuthHeader(auth);
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }

  return { pageProps, hideHeader: Component.hideHeader };
};

export default MyApp;
