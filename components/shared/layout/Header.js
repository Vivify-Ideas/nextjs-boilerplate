import React, { useContext } from 'react';

import { useRouter } from 'next/router';
import { useTranslation } from '../../../i18n';
import { PAGES } from '../../../constants/routes';
import { UserContext } from '../../../context/UserContext';
import { useLogout } from '../../../queries/auth/auth';

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation('auth');
  const user = useContext(UserContext);
  const { mutate: handleSignOut } = useLogout();

  const navigateToSignIn = () => router.push(PAGES.SIGN_IN);

  const renderUserHeader = () =>
    user ? (
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
