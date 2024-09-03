import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '~/app/hooks';
import { FormikHelpers } from 'formik';
import { IRegistration } from '~/types';
import { saveRegister } from '~/api/register';
import { getRegisters } from '~/store/registerSlice';

export const useNewUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: IRegistration = {
    admissionDate: new Date(),
    email: '',
    employeeName: '',
    status: '',
    cpf: '',
  };

  const handleSubmit = async (
    values: IRegistration,
    { resetForm }: FormikHelpers<IRegistration>
  ) => {
    try {
      const data = await saveRegister(values);
      if (data.id) {
        dispatch(getRegisters());
        resetForm();
        navigate('/');
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return {
    initialValues,
    handleSubmit,
    handleBackClick,
  };
};
