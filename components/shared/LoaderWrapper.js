import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from '../../i18n';

const LoaderWrapper = ({ isLoading, loadingText, children }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      {isLoading && <p>{loadingText || t('loading')}</p>}
      <>{children}</>
    </div>
  );
};

LoaderWrapper.propTypes = {
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  children: PropTypes.node
};

export default LoaderWrapper;
