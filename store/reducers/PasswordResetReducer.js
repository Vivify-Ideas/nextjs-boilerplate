import produce from 'immer';

import {
  PASSWORD_LOADER_SET,
  FORGOT_PASSWORD_SUCCESS_SET,
  RESET_PASSWORD_SUCCESS_SET
} from '../actionTypes/PasswordResetActionTypes';
import { RESPONSE_STATES } from '../../constants';

export const initialState = {
  loader: false,
  forgotPasswordSuccess: RESPONSE_STATES.NO_RESPONSE,
  resetPasswordSuccess: RESPONSE_STATES.NO_RESPONSE
};

/* eslint-disable default-case, no-param-reassign */
const passwordResetReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case PASSWORD_LOADER_SET:
        draft.loader = payload;
        break;
      case FORGOT_PASSWORD_SUCCESS_SET:
        draft.forgotPasswordSuccess = payload;
        break;
      case RESET_PASSWORD_SUCCESS_SET:
        draft.resetPasswordSuccess = payload;
        break;
    }
  });

export default passwordResetReducer;
