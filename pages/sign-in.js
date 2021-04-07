import React from 'react';

import { SignInForm } from '../components/auth/SignInForm';
import SocialLoginButtons from '../components/auth/SocialLoginButtons';
import { useLogin } from '../queries/auth/auth';
import withGuest from '../utils/hoc/withGuest';

const SignIn = () => {
  const { isLoading, error, mutate } = useLogin();

  return (
    <div>
      Sign In Page
      <SignInForm onSubmit={mutate} signInError={error} isLoading={isLoading} />
      <SocialLoginButtons />
    </div>
  );
};

const ComponentWrapper = withGuest(SignIn);
ComponentWrapper.hideHeader = true;

export default ComponentWrapper;
