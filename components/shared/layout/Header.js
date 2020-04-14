import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  makeSelectUserData,
  makeSelectUserAuthStatus
} from '../../../store/selectors/UserSelector';
import $t from '../../../i18n';
import { userSignOut } from '../../../store/actions/UserActions';
import { useRouter } from 'next/router';
import { PAGES } from '../../../constants/routes';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector(makeSelectUserData());
  const auth = useSelector(makeSelectUserAuthStatus());

  const handleSignOut = () => dispatch(userSignOut());

  const navigateToSignIn = () => router.push(PAGES.SIGN_IN);

  const renderUserHeader = () =>
    auth ? (
      <div>
        <p>{`${user.first_name} ${user.last_name}`}</p>
        <button onClick={handleSignOut}>{$t('auth.signOut')}</button>
      </div>
    ) : (
      <button onClick={navigateToSignIn}>{$t('auth.signIn')}</button>
    );

  return <div>{renderUserHeader()}</div>;
};

export default Header;
