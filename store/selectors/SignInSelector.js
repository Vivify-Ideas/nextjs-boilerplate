import { createSelector } from 'reselect';

import reducers from '../reducers';

const selectSignInDomain = state => state.signIn || reducers;

const makeSelectSignIn = () =>
  createSelector(
    selectSignInDomain,
    substate => substate
  );

const makeSelectSignInError = () =>
  createSelector(
    selectSignInDomain,
    substate => substate.signInError
  );

const makeSelectSignInLoader = () =>
  createSelector(
    selectSignInDomain,
    substate => substate.loader
  );

export default makeSelectSignIn;
export { selectSignInDomain, makeSelectSignInError, makeSelectSignInLoader };
