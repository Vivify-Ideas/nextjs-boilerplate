import produce from 'immer';

import {
  SIGN_IN_ERROR_SET,
  SIGN_IN_LOADER_SET
} from '../actionTypes/SignInActionTypes';

export const initialState = {
  loader: false,
  signInError: false
};

/* eslint-disable default-case, no-param-reassign */
const signInReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case SIGN_IN_ERROR_SET:
        draft.signInError = payload;
        break;
      case SIGN_IN_LOADER_SET:
        draft.loader = payload;
        break;
    }
  });

export default signInReducer;
