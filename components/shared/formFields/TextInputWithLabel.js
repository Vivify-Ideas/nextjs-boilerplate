/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

export const TextInputWithLabel = ({
  field,
  form,
  label,
  placeholder,
  type,
  ...props
}) => (
  <>
    <div>
      <label htmlFor="">{label}</label>
      <input {...field} {...props} type={type} placeholder={placeholder} />
    </div>
    <ErrorMessage name={field.name}>
      {(errorMessage) => <p>{errorMessage}</p>}
    </ErrorMessage>
  </>
);

TextInputWithLabel.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
};
