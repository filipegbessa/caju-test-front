import { localStorageEnum } from '~/enum';

export const setLS = (key: localStorageEnum, value: string = '') => {
  if (typeof window === 'undefined') return;

  localStorage.setItem(key, JSON.stringify(value));
};
