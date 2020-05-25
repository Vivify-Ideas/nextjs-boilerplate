import { createSelector } from 'reselect';

import reducers from '../reducers';

const selectUserDomain = state => state.user || reducers;

const makeSelectUser = () =>
  createSelector(
    selectUserDomain,
    substate => substate
  );

const makeSelectUserAuthStatus = () =>
  createSelector(
    selectUserDomain,
    substate => substate.auth
  );

const makeSelectUserData = () =>
  createSelector(
    selectUserDomain,
    substate => substate.user
  );

const makeSelectUserLoader = () =>
  createSelector(
    selectUserDomain,
    substate => substate.loader
  );

const makeSelectUserPasswordChangeState = () =>
  createSelector(
    selectUserDomain,
    substate => substate.passwordChanged
  );

const makeSelectUserPasswordLoader = () =>
  createSelector(
    selectUserDomain,
    substate => substate.passwordChangeLoader
  );

export default makeSelectUser;
export {
  selectUserDomain,
  makeSelectUserData,
  makeSelectUserAuthStatus,
  makeSelectUserLoader,
  makeSelectUserPasswordChangeState,
  makeSelectUserPasswordLoader
};
