import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SignInForm } from '../components/auth/SignInForm';
import {
  makeSelectSignInError,
  makeSelectSignInLoader
} from '../store/selectors/SignInSelector';
import { signIn } from '../store/actions/SignInActions';
import SocialLoginButtons from '../components/auth/SocialLoginButtons';
import withIsAuth from '../utils/hoc/withIsAuth';

const SignIn = () => {
  const dispatch = useDispatch();

  const signInError = useSelector(makeSelectSignInError());
  const isLoading = useSelector(makeSelectSignInLoader());

  const handleSignIn = useCallback(data => dispatch(signIn(data)));

  return (
    <div>
      Sign In Page
      <SignInForm
        onSubmit={handleSignIn}
        signInError={signInError}
        isLoading={isLoading}
      />
      <SocialLoginButtons />
    </div>
  );
};

const ComponentWrapper = withIsAuth(SignIn);
ComponentWrapper.hideHeader = true;

export default ComponentWrapper;
