import React from 'react';

import withIsAuth from '../utils/hoc/withIsAuth';
import ProfileForm from '../components/profile/ProfileForm';
import ChangePasswordForm from '../components/profile/ChangePasswordForm';
import { useAuthStore } from '../store/AuthStore';

const Profile = () => {
  const { user, userLoading, updatePassword, actions } = useAuthStore(
    (state) => ({
      user: state.user,
      userLoading: state.userLoading,
      updatePassword: state.updatePassword,
      actions: state.actions
    })
  );

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
