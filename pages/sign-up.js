import React from 'react';

import { SignUpForm } from '../components/auth/SignUpForm';
import { useRegister } from '../queries/auth/auth';
import withGuest from '../utils/hoc/withGuest';

const SignUp = () => {
  const { isLoading, error, mutate } = useRegister();

  return (
    <div>
      Sign Up Page
      <SignUpForm
        onSubmit={mutate}
        signUpErrors={error}
        isLoading={isLoading}
      />
    </div>
  );
};

const ComponentWrapper = withGuest(SignUp);
ComponentWrapper.hideHeader = true;

export default ComponentWrapper;
