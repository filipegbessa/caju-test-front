import { RegistrationStatusEnum } from '~/enum';

export type IRegistration = {
  id?: string;
  employeeName: string;
  cpf: string;
  email: string;
  admissionDate: Date;
  status: RegistrationStatusEnum | null;
};
