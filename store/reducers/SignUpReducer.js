import produce from 'immer';

import {
  SIGN_UP_ERROR_SET,
  SIGN_UP_LOADER_SET
} from '../actionTypes/SignUpActionTypes';

export const initialState = {
  loader: false,
  signUpError: {}
};

/* eslint-disable default-case, no-param-reassign */
const signUpReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case SIGN_UP_ERROR_SET:
        draft.signUpError = payload;
        break;
      case SIGN_UP_LOADER_SET:
        draft.loader = payload;
        break;
    }
  });

export default signUpReducer;
