import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { produce } from 'immer';
import Router from 'next/router';

import { PAGES } from '../constants/routes';
import { authService } from '../services/AuthService';

export const [useAuthStore, store] = create(
  devtools(
    (set, get) => ({
      auth: !!authService.getToken(),
      user: {},
      userLoading: false,
      updateProfile: {
        loader: false,
        error: null
      },
      login: {
        loader: false,
        error: null
      },
      logout: {
        loader: false,
        error: null
      },
      register: {
        loader: false,
        error: null
      },
      resetPassword: {
        loader: false,
        error: null
      },
      forgotPassword: {
        loader: false,
        error: null
      },
      updatePassword: {
        loader: false,
        error: null,
        updated: false
      },

      setState(setterFn) {
        set(
          produce((state) => {
            setterFn(state);
          }),
          'STATE_SET'
        );
      },

      actions: {
        async getUser() {
          get().setState((state) => {
            state.userLoading = true;
          });
          const { data: user } = await authService.getUser();
          get().setState((state) => {
            state.user = user;
            state.userLoading = false;
          });
        },
        async updateProfile(profileData) {
          try {
            get().setState((state) => {
              state.updateProfile.loader = true;
            });
            const { data: user } = await authService.updateProfile(profileData);
            get().setState((state) => {
              state.user = user;
            });
          } catch (error) {
            get().setState((state) => {
              state.updateProfile.error = error;
            });
          } finally {
            get().setState((state) => {
              state.updateProfile.loader = false;
            });
          }
        },
        async login(loginData) {
          get().setState((state) => {
            state.login.loader = true;
            state.login.error = null;
          });
          try {
            await authService.login(loginData);
            get().setState((state) => {
              state.auth = true;
              state.login.error = null;
            });
            await get().actions.getUser();
            Router.push(PAGES.HOME);
          } catch (error) {
            get().setState((state) => {
              state.login.error = error;
            });
          } finally {
            get().setState((state) => {
              state.login.loader = false;
            });
          }
        },
        async logout() {
          get().setState((state) => {
            state.logout.loader = true;
          });
          try {
            await authService.logout();
            get().setState((state) => {
              state.auth = false;
              state.user = {};
            });
            Router.push(PAGES.SIGN_IN);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
          } finally {
            get().setState((state) => {
              state.logout.loader = false;
            });
          }
        },
        async register(registerData) {
          get().setState((state) => {
            state.register.loader = true;
            state.register.error = null;
          });
          try {
            await authService.register(registerData);
            get().setState((state) => {
              state.auth = true;
              state.register.error = null;
            });
            await get().actions.getUser();
            Router.push(PAGES.HOME);
          } catch (error) {
            get().setState((state) => {
              state.register.error = error;
            });
          } finally {
            get().setState((state) => {
              state.register.loader = false;
            });
          }
        },
        async forgotPassword(forgotPasswordData) {
          try {
            get().setState((state) => {
              state.forgotPassword.loader = true;
            });
            await authService.forgotPassword(forgotPasswordData);
          } catch (error) {
            get().setState((state) => {
              state.forgotPassword.error = error;
            });
          } finally {
            get().setState((state) => {
              state.forgotPassword.loader = false;
            });
          }
        },
        async resetPassword(resetPasswordData) {
          try {
            get().setState((state) => {
              state.resetPassword.loader = true;
            });
            await authService.resetPassword(resetPasswordData);
            Router.push(PAGES.SIGN_IN);
          } catch (error) {
            get().setState((state) => {
              state.resetPassword.error = error;
            });
          } finally {
            get().setState((state) => {
              state.resetPassword.loader = false;
            });
          }
        },
        async updatePassword(passwordData) {
          try {
            get().setState((state) => {
              state.updatePassword.loader = true;
            });
            await authService.changePassword(passwordData);
            get().setState((state) => {
              state.updatePassword.updated = true;
            });
          } catch (error) {
            get().setState((state) => {
              state.updatePassword.error = error;
              state.updatePassword.updated = false;
            });
          } finally {
            get().setState((state) => {
              state.updatePassword.loader = false;
            });
          }
        }
      }
    }),
    'AuthStore'
  )
);

if (typeof window !== 'undefined' && authService.getToken()) {
  store.getState().setState((state) => {
    state.auth = true;
  });
  store.getState().actions.getUser();
}
