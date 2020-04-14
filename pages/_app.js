import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import cookies from 'next-cookies';

import createStore from '../store';
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

    return { pageProps, redirect: Component.redirect };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
