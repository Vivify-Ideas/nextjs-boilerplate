/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import React from 'react';
import cookies from 'next-cookies';

import { appWithTranslation } from '../i18n';
import { wrapper } from '../store';
import AuthService from '../services/AuthService';
import { userGet } from '../store/actions/UserActions';
import Layout from '../components/shared/layout/Layout';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    const auth = cookies(ctx).access_token;

    if (auth) {
      AuthService.attachAuthHeader(auth);
      ctx.store.dispatch(userGet());
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps, hideHeader: Component.hideHeader };
  }

  render() {
    const { Component, pageProps, hideHeader } = this.props;
    return (
      <Layout hideHeader={hideHeader}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default wrapper.withRedux(appWithTranslation(MyApp));
