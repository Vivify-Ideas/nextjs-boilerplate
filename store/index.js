import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { produce } from 'immer';
import pick from 'lodash/pick';

import auth from './modules/auth.store';

export const getStore = (initialState = {}) =>
  create(
    devtools(
      (set, get) => ({
        setState(setterFn, name) {
          const actionName = name || 'SET_STATE';
          set(
            produce((state) => {
              setterFn(state);
            }),
            actionName
          );
        },
        [auth.name]: auth.store(set, get),
        ...initialState
      }),
      'Store'
    )
  );

export const [useStore, store] = getStore();

// Store Modules
export const useAuthStore = (keys) =>
  useStore((state) => pick(state[auth.name], keys));
