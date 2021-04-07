import { useMutation, useQuery, useQueryClient } from 'react-query';

import UserService from '../../services/UserService';
import AuthService from '../../services/AuthService';

export const useGetUser = () =>
  useQuery('getUser', UserService.me, {
    enabled: !!AuthService.getToken(),
    cacheTime: 0
  });

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(UserService.edit, {
    onSuccess: (data) => {
      queryClient.setQueryData('getUser', data);
    }
  });
};

export const useUpdatePassword = () =>
  useMutation(UserService.changePassword, {});
