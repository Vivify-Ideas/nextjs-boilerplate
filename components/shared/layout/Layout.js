import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
