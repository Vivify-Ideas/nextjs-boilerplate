import Router from 'next/router';

import { PAGES } from '../../constants/routes';
import { authService } from '../../services/AuthService';

const STORE_NAME = 'auth';

const INITIAL_STATE = {
  auth: false,
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
  }
};

const getState = (state) => state[STORE_NAME];

const getActions = (set, get) => ({
  async getUser() {
    get().setState((state) => {
      getState(state).userLoading = true;
    });
    const { data: user } = await authService.getUser();
    get().setState((state) => {
      getState(state).user = user;
      getState(state).userLoading = false;
    });
  },
  async updateProfile(profileData) {
    try {
      get().setState((state) => {
        getState(state).updateProfile.loader = true;
      });
      const { data: user } = await authService.updateProfile(profileData);
      get().setState((state) => {
        getState(state).user = user;
      });
    } catch (error) {
      get().setState((state) => {
        getState(state).updateProfile.error = error;
      });
    } finally {
      get().setState((state) => {
        getState(state).updateProfile.loader = false;
      });
    }
  },
  async login(loginData) {
    get().setState((state) => {
      getState(state).login.loader = true;
      getState(state).login.error = null;
    });
    try {
      await authService.login(loginData);
      get().setState((state) => {
        getState(state).auth = true;
        getState(state).login.error = null;
      });
      await get()[STORE_NAME].actions.getUser();
      Router.push(PAGES.HOME);
    } catch (error) {
      get().setState((state) => {
        getState(state).login.error = error;
      });
    } finally {
      get().setState((state) => {
        getState(state).login.loader = false;
      });
    }
  },
  async logout() {
    get().setState((state) => {
      getState(state).logout.loader = true;
    });
    try {
      await authService.logout();
      get().setState((state) => {
        getState(state).auth = false;
        getState(state).user = {};
      });
      Router.push(PAGES.SIGN_IN);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      get().setState((state) => {
        getState(state).logout.loader = false;
      });
    }
  },
  async register(registerData) {
    get().setState((state) => {
      getState(state).register.loader = true;
      getState(state).register.error = null;
    });
    try {
      await authService.register(registerData);
      get().setState((state) => {
        getState(state).auth = true;
        getState(state).register.error = null;
      });
      await get()[STORE_NAME].actions.getUser();
      Router.push(PAGES.HOME);
    } catch (error) {
      get().setState((state) => {
        getState(state).register.error = error;
      });
    } finally {
      get().setState((state) => {
        getState(state).register.loader = false;
      });
    }
  },
  async forgotPassword(forgotPasswordData) {
    try {
      get().setState((state) => {
        getState(state).forgotPassword.loader = true;
      });
      await authService.forgotPassword(forgotPasswordData);
    } catch (error) {
      get().setState((state) => {
        getState(state).forgotPassword.error = error;
      });
    } finally {
      get().setState((state) => {
        getState(state).forgotPassword.loader = false;
      });
    }
  },
  async resetPassword(resetPasswordData) {
    try {
      get().setState((state) => {
        getState(state).resetPassword.loader = true;
      });
      await authService.resetPassword(resetPasswordData);
      Router.push(PAGES.SIGN_IN);
    } catch (error) {
      get().setState((state) => {
        getState(state).resetPassword.error = error;
      });
    } finally {
      get().setState((state) => {
        getState(state).resetPassword.loader = false;
      });
    }
  },
  async updatePassword(passwordData) {
    try {
      get().setState((state) => {
        getState(state).updatePassword.loader = true;
      });
      await authService.changePassword(passwordData);
      get().setState((state) => {
        getState(state).updatePassword.updated = true;
      });
    } catch (error) {
      get().setState((state) => {
        getState(state).updatePassword.error = error;
        getState(state).updatePassword.updated = false;
      });
    } finally {
      get().setState((state) => {
        getState(state).updatePassword.loader = false;
      });
    }
  }
});

export default {
  name: STORE_NAME,
  store: (set, get) => ({
    ...INITIAL_STATE,
    actions: getActions(set, get)
  })
};
