import * as S from './styles';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { IconButton } from '../../components/Buttons/IconButton';
import RegistrationForm from '~/components/RegistrationForm';
import { IRegistration } from '~/types';
import { saveRegister } from '~/api/register';
import { FormikHelpers } from 'formik';
import { useAppDispatch } from '~/app/hooks';
import { getRegisters } from '~/store/registerSlice';

const NewUserPage = () => {
  const dispatch = useAppDispatch();
  const initialValues: IRegistration = {
    admissionDate: new Date(),
    email: '',
    employeeName: '',
    status: 'APPROVED',
    cpf: '',
    id: '',
  };

  const handleSubmit = async (
    values: IRegistration,
    { resetForm }: FormikHelpers<IRegistration>
  ) => {
    try {
      const data = await saveRegister(values);
      if (data.id) {
        console.log('### Cadastrado com sucesso!');
        dispatch(getRegisters());
        resetForm();
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  return (
    <S.Container>
      <S.Card>
        <IconButton aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>

        <RegistrationForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage;
