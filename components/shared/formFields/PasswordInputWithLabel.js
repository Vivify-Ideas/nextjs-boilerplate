import React from 'react';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

export const PasswordInputWithLabel = ({
  field,
  form,
  label,
  placeholder,
  ...props
}) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...field} {...props} type="password" placeholder={placeholder} />
      <ErrorMessage name={field.name}>
        {errorMessage => <p>{errorMessage}</p>}
      </ErrorMessage>
    </div>
  );
};

PasswordInputWithLabel.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string
};
