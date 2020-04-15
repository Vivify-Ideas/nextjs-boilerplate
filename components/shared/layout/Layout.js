import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const Layout = ({ children, hideHeader }) => {
  return (
    <div>
      {!hideHeader && <Header />}
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  hideHeader: PropTypes.bool
};

export default Layout;
