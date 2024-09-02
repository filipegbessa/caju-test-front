import { FC } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '../FormInput';
import { IRegistration } from '~/types';
import { FormSelect } from '../FormSelect';
import { Button } from '../Buttons';

interface RegistrationFormProps {
  initialValues: IRegistration;
  onSubmit: (
    values: IRegistration,
    formikHelpers: FormikHelpers<IRegistration>
  ) => void;
}

const registrationSchema = Yup.object().shape({
  admissionDate: Yup.date()
    .required('Campo obrigatório')
    .max(new Date(), 'Data de admissão inválida'),
  email: Yup.string().email('Formato inválido').required('Campo obrigatório'),
  employeeName: Yup.string()
    .required('Campo obrigatório')
    .test(
      'full-name',
      'O nome deve conter nome e sobrenome, cada um com pelo menos 2 caracteres',
      (value) => {
        if (!value) return false;
        const parts = value.trim().split(' ');
        return parts.length > 1 && parts.every((part) => part.length >= 2);
      }
    ),
  status: Yup.string()
    .oneOf(['APPROVED', 'REVIEW', 'REPROVED'], 'Invalid status')
    .required('Campo obrigatório'),
  cpf: Yup.string()
    .required('Campo obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Formato inválido'),
});

const RegistrationForm: FC<RegistrationFormProps> = ({
  initialValues,
  onSubmit,
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={registrationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form className="flex flex-col gap-2">
        <FormInput label="Name" name="employeeName" />
        <FormInput label="E-mail" name="email" type="email" />
        <FormInput label="CPF" name="cpf" mask="cpf" />
        <FormInput type="date" label="Data de admissão" name="admissionDate" />
        <FormSelect
          label="Status"
          name="status"
          options={[
            { value: 'APPROVED', label: 'Approved' },
            { value: 'REVIEW', label: 'Review' },
            { value: 'REPROVED', label: 'Reproved' },
          ]}
        />
        <Button className="mt-4" type="submit" disabled={isSubmitting}>
          Cadastrar
        </Button>
      </Form>
    )}
  </Formik>
);

export default RegistrationForm;
