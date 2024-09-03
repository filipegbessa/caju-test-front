import { localStorageEnum, RoutesEnum } from '~/enum';
import { IUser } from '~/types';
import { fetchFromApi, setLS } from '~/utils';

export const isAuthenticated = async (userToken?: string): Promise<boolean> => {
  if (!userToken) return false;

  const { success } = await fetchFromApi<{ success: boolean }>(
    RoutesEnum.AUTH,
    'GET',
    {},
    { headers: { Authorization: `Bearer ${userToken.replace(/"/g, '')}` } }
  );

  return success;
};

export const login = async (user: Partial<IUser>): Promise<boolean> => {
  const { token } = await fetchFromApi<{ token: string }>(
    RoutesEnum.LOGIN,
    'POST',
    user
  );
  token && setLS(localStorageEnum.TOKEN, token);

  return Boolean(token);
};
