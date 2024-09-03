import { FC } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '../FormInput';
import { IUser } from '~/types';
import { Button } from '../Buttons';

interface LoginFormProps {
  initialValues: IUser;
  onSubmit: (values: IUser, formikHelpers: FormikHelpers<IUser>) => void;
}

const registrationSchema = Yup.object().shape({
  email: Yup.string().email('Formato inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

export const LoginForm: FC<LoginFormProps> = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={registrationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form className="flex flex-col gap-2">
        <FormInput label="E-mail" name="email" type="email" />
        <FormInput label="Senha" name="password" type="password" />

        <Button className="mt-4" type="submit" disabled={isSubmitting}>
          Entrar
        </Button>
      </Form>
    )}
  </Formik>
);
