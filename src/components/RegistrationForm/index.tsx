import { FC } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '../FormInput';
import { IRegistration } from '~/types';
import { FormSelect } from '../FormSelect';

interface RegistrationFormProps {
  initialValues: IRegistration;
  onSubmit: (
    values: IRegistration,
    formikHelpers: FormikHelpers<IRegistration>
  ) => void;
}

const registrationSchema = Yup.object().shape({
  admissionDate: Yup.date()
    .required('Admission date is required')
    .max(new Date(), 'Admission date cannot be in the future'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  employeeName: Yup.string()
    .required('Employee name is required')
    .min(2, 'Employee name must be at least 2 characters'),
  status: Yup.string()
    .oneOf(['APPROVED', 'REVIEW', 'REPROVED'], 'Invalid status')
    .required('Status is required'),
  cpf: Yup.string()
    .required('CPF is required')
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Invalid CPF format'),
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
      <Form>
        <FormInput label="CPF" name="cpf" mask="cpf" />
        <FormInput type="date" label="Admission Date" name="admissionDate" />
        <FormInput label="E-mail" name="email" type="email" />
        <FormInput label="Name" name="employeeName" />
        <FormSelect
          label="Status"
          name="status"
          options={[
            { value: 'APPROVED', label: 'Approved' },
            { value: 'REVIEW', label: 'Review' },
            { value: 'REPROVED', label: 'Reproved' },
          ]}
        />
        <button type="submit" disabled={isSubmitting}>
          Cadastrar
        </button>
      </Form>
    )}
  </Formik>
);

export default RegistrationForm;
