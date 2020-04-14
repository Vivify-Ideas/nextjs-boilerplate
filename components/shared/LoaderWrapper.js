import React from 'react';
import PropTypes from 'prop-types';

const LoaderWrapper = ({ isLoading, children }) =>
  isLoading ? <p>Loading...</p> : children;

LoaderWrapper.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node
};

export default LoaderWrapper;
