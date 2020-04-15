import React from 'react';
import PropTypes from 'prop-types';
import $t from '../../i18n';

const LoaderWrapper = ({
  isLoading,
  loadingText = $t('loaders.loading'),
  children
}) => (isLoading ? <p>{loadingText}</p> : children);

LoaderWrapper.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node
};

export default LoaderWrapper;
