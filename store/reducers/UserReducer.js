import produce from 'immer';

import {
  USER_SET,
  USER_AUTH_STATUS_SET,
  USER_LOADER_SET
} from '../actionTypes/UserActionTypes';

export const initialState = {
  auth: false,
  user: {},
  loader: false
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
    }
  });

export default userReducer;
