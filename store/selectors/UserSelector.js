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

export default makeSelectUser;
export {
  selectUserDomain,
  makeSelectUserData,
  makeSelectUserAuthStatus,
  makeSelectUserLoader
};
