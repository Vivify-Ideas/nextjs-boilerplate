/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';

import $t from '../../../i18n';
import { PAGES } from '../../../constants/routes';
import { useAuthStore } from '../../../store/AuthStore';

const HeaderAuth = ({ user, handleSignOut }) => (
  <div>
    <p>{`${user.first_name} ${user.last_name}`}</p>
    <button type="button" onClick={handleSignOut}>
      {$t('auth.signOut')}
    </button>
  </div>
);

const HeaderGuest = ({ navigateToSignIn }) => (
  <button type="button" onClick={navigateToSignIn}>
    {$t('auth.signIn')}
  </button>
);

const HeaderContent = ({ auth, user, handleSignOut, navigateToSignIn }) =>
  auth ? (
    <HeaderAuth user={user} handleSignOut={handleSignOut} />
  ) : (
    <HeaderGuest navigateToSignIn={navigateToSignIn} />
  );

const Header = () => {
  const router = useRouter();
  const { auth, user, actions } = useAuthStore((state) => ({
    auth: state.auth,
    user: state.user,
    actions: state.actions
  }));

  const handleSignOut = () => actions.logout();
  const navigateToSignIn = () => router.push(PAGES.SIGN_IN);

  return (
    <HeaderContent
      auth={auth}
      user={user}
      handleSignOut={handleSignOut}
      navigateToSignIn={navigateToSignIn}
    />
  );
};

export default Header;
