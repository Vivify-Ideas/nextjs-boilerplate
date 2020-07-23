import React from 'react';
import Router from 'next/router';
import cookies from 'next-cookies';

import { PAGES } from '../../constants/routes';

const withGuest = (Component) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const Wrapper = (props) => <Component {...props} />;

  Wrapper.getInitialProps = async ({ ctx }) => {
    const auth = cookies(ctx).access_token;

    if (auth) {
      if (ctx.res) {
        ctx.res.writeHead(302, { Location: PAGES.HOME });
        ctx.res.end();
      } else {
        Router.push(PAGES.HOME);
      }
    }

    const componentProps =
      Component.getInitialProps && (await Component.getInitialProps(ctx));

    return { ...componentProps };
  };

  return Wrapper;
};

export default withGuest;
