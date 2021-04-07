import React from 'react';
import cookies from 'next-cookies';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';

import { appWithTranslation } from '../i18n';
import AuthService from '../services/AuthService';
import Layout from '../components/shared/layout/Layout';
import UserContextProvider from '../context/UserContext';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps, hideHeader }) => (
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <Layout hideHeader={hideHeader}>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  </QueryClientProvider>
);

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object,
  hideHeader: PropTypes.bool
};

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

export default appWithTranslation(MyApp);
