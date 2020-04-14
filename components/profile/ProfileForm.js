import React from 'react';
import { Form, Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import $t from '../../i18n';
import { TextInputWithLabel } from '../shared/formFields/TextInputWithLabel';
import { updateProfileValidationRules } from '../../validation/profile';
import LoaderWrapper from '../shared/LoaderWrapper';

const ProfileForm = ({ user, onSubmit, isLoading }) => {
  return (
    <LoaderWrapper isLoading={isLoading}>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        }}
        enableReinitialize
        validationSchema={updateProfileValidationRules}
      >
        {({ dirty }) => (
          <Form>
            {!!user.avatar && <img src={user.avatar} />}
            <Field component={TextInputWithLabel} name="first_name" />
            <Field component={TextInputWithLabel} name="last_name" />
            <Field component={TextInputWithLabel} name="email" disabled />
            {dirty && <button type="submit">{$t('common.submit')}</button>}
          </Form>
        )}
      </Formik>{' '}
    </LoaderWrapper>
  );
};

ProfileForm.propTypes = {
  user: PropTypes.object
};

export default ProfileForm;
