import { createSelector } from 'reselect';

import reducers from '../reducers';

const selectPasswordResetDomain = state => state.passwordReset || reducers;

const makeSelectPasswordReset = () =>
  createSelector(
    selectPasswordResetDomain,
    substate => substate
  );

const makeSelectPasswordLoader = () =>
  createSelector(
    selectPasswordResetDomain,
    substate => substate.loader
  );

const makeSelectForgotPasswordSuccess = () =>
  createSelector(
    selectPasswordResetDomain,
    substate => substate.forgotPasswordSuccess
  );

const makeSelectResetPasswordSuccess = () =>
  createSelector(
    selectPasswordResetDomain,
    substate => substate.resetPasswordSuccess
  );

export default makeSelectPasswordReset;
export {
  selectPasswordResetDomain,
  makeSelectPasswordLoader,
  makeSelectForgotPasswordSuccess,
  makeSelectResetPasswordSuccess
};
