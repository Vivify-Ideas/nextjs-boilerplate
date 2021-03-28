import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';

import { PAGES } from '../../constants/routes';
import AuthService from '../../services/AuthService';

export const useLogin = () => {
  const router = useRouter();

  return useMutation(AuthService.login, {
    onSuccess: () => router.push(PAGES.SIGN_IN)
  });
};

export const useRegister = () => {
  const router = useRouter();

  return useMutation(AuthService.register, {
    onSuccess: () => router.push(PAGES.SIGN_IN)
  });
};

export const useForgotPassword = () =>
  useMutation(AuthService.forgotPassword, {});

export const useResetPassword = () => {
  const router = useRouter();

  return useMutation(AuthService.resetPassword, {
    onSuccess: () => setTimeout(() => router.push(PAGES.SIGN_IN), 5000)
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation(AuthService.logout, {
    onSuccess: () => {
      queryClient.setQueryData('getUser', null);
    }
  });
};
