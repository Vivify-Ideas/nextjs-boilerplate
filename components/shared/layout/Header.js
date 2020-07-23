import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useRouter } from 'next/router';
import {
  makeSelectUserData,
  makeSelectUserAuthStatus
} from '../../../store/selectors/UserSelector';
import { useTranslation } from '../../../i18n';
import { userSignOut } from '../../../store/actions/UserActions';
import { PAGES } from '../../../constants/routes';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation('auth');

  const user = useSelector(makeSelectUserData());
  const auth = useSelector(makeSelectUserAuthStatus());

  const handleSignOut = () => dispatch(userSignOut());

  const navigateToSignIn = () => router.push(PAGES.SIGN_IN);

  const renderUserHeader = () =>
    auth ? (
      <div>
        <p>{`${user.first_name} ${user.last_name}`}</p>
        <button type="button" onClick={handleSignOut}>
          {t('signOut')}
        </button>
      </div>
    ) : (
      <button type="button" onClick={navigateToSignIn}>
        {t('signIn')}
      </button>
    );

  return <div>{renderUserHeader()}</div>;
};

export default Header;
