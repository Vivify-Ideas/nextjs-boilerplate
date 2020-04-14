import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import config from '../../config';
import {
  facebookLogin,
  googleLogin
} from '../../store/actions/SocialLoginActions';

const SocialLoginButtons = () => {
  const dispatch = useDispatch();

  const handleFacebookLogin = useCallback(
    data => dispatch(facebookLogin(data)),
    [dispatch]
  );

  const handleGoogleLogin = useCallback(data => dispatch(googleLogin(data)), [
    dispatch
  ]);

  return (
    <div>
      <FacebookLogin
        appId={config.FACEBOOK_APP_ID}
        fields="name,email,picture"
        callback={handleFacebookLogin}
      />
      <GoogleLogin
        clientId={config.GOOGLE_APP_ID}
        onSuccess={handleGoogleLogin}
      />
    </div>
  );
};

export default SocialLoginButtons;
