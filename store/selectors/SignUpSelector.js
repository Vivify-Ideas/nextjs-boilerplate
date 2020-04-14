import { createSelector } from 'reselect';

import reducers from '../reducers';

const selectSignUpDomain = state => state.signUp || reducers;

const makeSelectSignUp = () =>
  createSelector(
    selectSignUpDomain,
    substate => substate
  );

const makeSelectSignUpError = () =>
  createSelector(
    selectSignUpDomain,
    substate => substate.signUpError
  );

const makeSelectSignUpLoader = () =>
  createSelector(
    selectSignUpDomain,
    substate => substate.loader
  );

export default makeSelectSignUp;
export { selectSignUpDomain, makeSelectSignUpError, makeSelectSignUpLoader };
