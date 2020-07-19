import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import config from '../../config';

const SocialLoginButtons = () => {
  const handleFacebookLogin = () => {};
  const handleGoogleLogin = () => {};

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
