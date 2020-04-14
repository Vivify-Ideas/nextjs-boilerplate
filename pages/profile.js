import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import withIsPrivate from '../utils/hoc/withIsPrivate';
import ProfileForm from '../components/profile/ProfileForm';
import {
  makeSelectUserData,
  makeSelectUserLoader
} from '../store/selectors/UserSelector';
import { userEdit } from '../store/actions/UserActions';

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector(makeSelectUserData());
  const isLoading = useSelector(makeSelectUserLoader());

  const handleProfileEdit = useCallback(data => dispatch(userEdit(data)), [
    dispatch
  ]);

  return (
    <div>
      Profile
      <ProfileForm
        user={user}
        isLoading={isLoading}
        onSubmit={handleProfileEdit}
      />
    </div>
  );
};

export default withIsPrivate(Profile);
