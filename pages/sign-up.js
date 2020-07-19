import React from 'react';

import { SignUpForm } from '../components/auth/SignUpForm';
import withIsGuest from '../utils/hoc/withIsGuest';
import { useAuthStore } from '../store/AuthStore';

const SignUp = () => {
  const { isLoading, signUpError, actions } = useAuthStore((state) => ({
    isLoading: state.register.loader,
    sigUpError: state.register.error,
    actions: state.actions
  }));

  return (
    <div>
      Sign Up Page
      <SignUpForm
        onSubmit={actions.register}
        signUpErrors={signUpError}
        isLoading={isLoading}
      />
    </div>
  );
};

const ComponentWrapper = withIsGuest(SignUp);
ComponentWrapper.hideHeader = true;

export default ComponentWrapper;
