import produce from 'immer';

import {
  USER_SET,
  USER_AUTH_STATUS_SET,
  USER_LOADER_SET,
  PASSWORD_CHANGE_SUCCESS,
  PASSWORD_CHANGE_LOADER_SET
} from '../actionTypes/UserActionTypes';
import { RESPONSE_STATES } from '../../constants';

export const initialState = {
  auth: false,
  user: {},
  loader: false,
  passwordChanged: RESPONSE_STATES.NO_RESPONSE,
  passwordChangeLoader: false
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case USER_SET:
        draft.user = payload;
        break;
      case USER_AUTH_STATUS_SET:
        draft.auth = payload;
        break;
      case USER_LOADER_SET:
        draft.loader = payload;
        break;
      case PASSWORD_CHANGE_SUCCESS:
        draft.passwordChanged = action.payload;
        break;
      case PASSWORD_CHANGE_LOADER_SET:
        draft.passwordChangeLoader = action.payload;
        break;
    }
  });

export default userReducer;
