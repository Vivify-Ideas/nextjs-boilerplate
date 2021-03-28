import React, { useContext } from 'react';

import withAuth from '../utils/hoc/withAuth';
import ProfileForm from '../components/profile/ProfileForm';
import ChangePasswordForm from '../components/profile/ChangePasswordForm';
import { UserContext } from '../context/UserContext';
import { useUpdateUser, useUpdatePassword } from '../queries/user/user';

const Profile = () => {
  const user = useContext(UserContext);
  const { mutate: handleProfileEdit, isLoading } = useUpdateUser();
  const { mutate: handlePasswordChange, error, success } = useUpdatePassword();

  return (
    <div>
      Profile
      <ProfileForm
        onSubmit={handleProfileEdit}
        user={user}
        isLoading={isLoading}
      />
      <ChangePasswordForm
        onSubmit={handlePasswordChange}
        isLoading={false}
        error={error}
        success={success}
      />
    </div>
  );
};

export default withAuth(Profile);
