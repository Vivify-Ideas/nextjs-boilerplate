import React from 'react';
import PropTypes from 'prop-types';
import $t from '../../i18n';

const LoaderWrapper = ({
  isLoading,
  loadingText = $t('loaders.loading'),
  children
}) => <div> {isLoading ? <p>{loadingText}</p> : children} </div>;

LoaderWrapper.propTypes = {
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  children: PropTypes.node
};

export default LoaderWrapper;
