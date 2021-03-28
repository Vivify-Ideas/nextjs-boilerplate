import React from 'react';
import PropTypes from 'prop-types';

const ServerErrors = ({ errors }) => {
  const getFirstError = () =>
    errors?.response?.data[Object.keys(errors?.response?.data)];

  return <p>{getFirstError()}</p>;
};

ServerErrors.propTypes = {
  errors: PropTypes.object
};

export default ServerErrors;
