import React from 'react';

import { SignUpForm } from '../components/auth/SignUpForm';
import withIsGuest from '../utils/hoc/withIsGuest';
import { useAuthStore } from '../store';

const SignUp = () => {
  const { register, actions } = useAuthStore(['register', 'actions']);
  const { loader: isLoading, error: signUpErrors } = register;

  return (
    <div>
      Sign Up Page
      <SignUpForm
        onSubmit={actions.register}
        signUpErrors={signUpErrors}
        isLoading={isLoading}
      />
    </div>
  );
};

const ComponentWrapper = withIsGuest(SignUp);
ComponentWrapper.hideHeader = true;

export default ComponentWrapper;
