import React from 'react';

import withIsAuth from '../utils/hoc/withIsAuth';
import ProfileForm from '../components/profile/ProfileForm';
import ChangePasswordForm from '../components/profile/ChangePasswordForm';
import { useAuthStore } from '../store';

const Profile = () => {
  const { user, userLoading, updatePassword, actions } = useAuthStore([
    'user',
    'userLoading',
    'updatePassword',
    'actions'
  ]);
  const {
    loader: isPasswordFormLoading,
    error: passwordErrors,
    updated: passwordUpdateCompleted
  } = updatePassword;

  return (
    <div>
      Profile
      <ProfileForm
        user={user}
        isLoading={userLoading}
        onSubmit={actions.updateProfile}
      />
      <ChangePasswordForm
        onSubmit={actions.updatePassword}
        isLoading={isPasswordFormLoading}
        errors={passwordErrors}
        completed={passwordUpdateCompleted}
      />
    </div>
  );
};
export default withIsAuth(Profile);
