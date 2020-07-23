import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import withAuth from '../utils/hoc/withAuth';
import ProfileForm from '../components/profile/ProfileForm';
import {
  makeSelectUserData,
  makeSelectUserLoader,
  makeSelectUserPasswordChangeState,
  makeSelectUserPasswordLoader
} from '../store/selectors/UserSelector';
import { userEdit, changePassword } from '../store/actions/UserActions';
import ChangePasswordForm from '../components/profile/ChangePasswordForm';

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector(makeSelectUserData());
  const isUserLoading = useSelector(makeSelectUserLoader());
  const passwordChangeState = useSelector(makeSelectUserPasswordChangeState());
  const isPasswordFormLoading = useSelector(makeSelectUserPasswordLoader());

  const handleProfileEdit = useCallback((data) => dispatch(userEdit(data)), [
    dispatch
  ]);

  const handlePasswordChange = useCallback(
    (data) => dispatch(changePassword(data)),
    [dispatch]
  );

  return (
    <div>
      Profile
      <ProfileForm
        user={user}
        isLoading={isUserLoading}
        onSubmit={handleProfileEdit}
      />
      <ChangePasswordForm
        onSubmit={handlePasswordChange}
        isLoading={isPasswordFormLoading}
        passwordChangeState={passwordChangeState}
      />
    </div>
  );
};

export default withAuth(Profile);
