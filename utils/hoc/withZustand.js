/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { merge } from 'lodash';
import { store } from '../../store';

export const withZustand = (PageComponent, { ssr = true } = {}) => {
  const WithZustand = ({ initialState, ...props }) => {
    // uses immerjs - don't use store.setState directly
    store.getState().setState((state) => {
      merge(state, initialState);
    });
    return <PageComponent {...props} />;
  };

  if (ssr || PageComponent.getInitialProps) {
    WithZustand.getInitialProps = async (context) => {
      const pageProps =
        typeof PageComponent.getInitialProps === 'function'
          ? await PageComponent.getInitialProps(context)
          : {};

      return {
        ...pageProps
      };
    };
  }

  return WithZustand;
};
