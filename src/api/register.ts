import { RoutesEnum } from '~/enum';
import { IRegistration } from '~/types/registration';
import { fetchFromApi } from '~/utils/api';
import { formatCPF, formatEmail } from '~/utils/form';

export const fetchRegisters = async (): Promise<IRegistration[]> => {
  return fetchFromApi<IRegistration[]>(RoutesEnum.REGISTRATIONS, 'GET');
};

export const saveRegister = async (
  data: Partial<IRegistration>
): Promise<IRegistration> => {
  const formattedData = {
    ...data,
    cpf: formatCPF(data.cpf ?? ''),
    email: formatEmail(data.email ?? ''),
  };

  return fetchFromApi<IRegistration>(
    RoutesEnum.REGISTRATIONS,
    'POST',
    formattedData
  );
};

export const deleteRegister = async (id: string): Promise<void> => {
  return fetchFromApi<void>(`${RoutesEnum.REGISTRATION}/${id}`, 'DELETE');
};
