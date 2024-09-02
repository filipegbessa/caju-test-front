import { RegistrationStatusEnum } from '~/enum';
import { IRegistration } from '~/types';

export const filterRegistrationsByStatus = (
  registrations: IRegistration[],
  status: RegistrationStatusEnum
): IRegistration[] =>
  registrations?.filter((registration) => registration.status === status);
