import React from 'react';
import PropTypes from 'prop-types';

const ServerErrors = ({ errors }) => {
  const getFirstError = () => errors[Object.keys(errors)[0]][0];

  return <p>{getFirstError()}</p>;
};

ServerErrors.propTypes = {
  errors: PropTypes.object
};

export default ServerErrors;
