import { RoutesEnum } from '~/enum';
import { IRegistration } from '~/types/registration';
import { fetchFromApi } from '~/utils/api';

export const fetchRegisters = async (): Promise<IRegistration[]> => {
  return fetchFromApi<IRegistration[]>(RoutesEnum.REGISTRATIONS);
};
