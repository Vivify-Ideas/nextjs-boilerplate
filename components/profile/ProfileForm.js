import React from 'react';
import { Form, Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { useTranslation } from '../../i18n';
import { TextInputWithLabel } from '../shared/formFields/TextInputWithLabel';
import { updateProfileValidationRules } from '../../validation/profile';
import LoaderWrapper from '../shared/LoaderWrapper';

const ProfileForm = ({ user, onSubmit, isLoading }) => {
  const { t } = useTranslation('profile');
  return (
    <LoaderWrapper isLoading={isLoading}>
      <Formik
        onSubmit={onSubmit}
        initialValues={user}
        enableReinitialize
        validationSchema={updateProfileValidationRules({ t })}
      >
        {({ dirty }) => (
          <Form>
            {!!user?.avatar && <img alt={user.first_name} src={user.avatar} />}
            <Field component={TextInputWithLabel} name="first_name" />
            <Field component={TextInputWithLabel} name="last_name" />
            <Field component={TextInputWithLabel} name="email" disabled />
            {dirty && <button type="submit">{t('common.submit')}</button>}
          </Form>
        )}
      </Formik>
    </LoaderWrapper>
  );
};

ProfileForm.propTypes = {
  user: PropTypes.object,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool
};

export default ProfileForm;
