import React from 'react';

import { useAuthStore } from '../store';
import { SignInForm } from '../components/auth/SignInForm';
// import SocialLoginButtons from '../components/auth/SocialLoginButtons';
import withIsGuest from '../utils/hoc/withIsGuest';

const SignIn = () => {
  const { login, actions } = useAuthStore(['login', 'actions']);
  const { error: signInError, loader: isLoading } = login;

  return (
    <div>
      Sign In Page
      <SignInForm
        onSubmit={actions.login}
        signInError={signInError}
        isLoading={isLoading}
      />
      {/* <SocialLoginButtons /> */}
    </div>
  );
};

const ComponentWrapper = withIsGuest(SignIn);
ComponentWrapper.hideHeader = true;

export default ComponentWrapper;
