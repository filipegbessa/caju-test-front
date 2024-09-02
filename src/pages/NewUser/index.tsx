import { HiOutlineArrowLeft } from 'react-icons/hi';
import RegistrationForm from '~/components/RegistrationForm';
import { IRegistration } from '~/types';
import { saveRegister } from '~/api/register';
import { FormikHelpers } from 'formik';
import { useAppDispatch } from '~/app/hooks';
import { getRegisters } from '~/store/registerSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '~/components/Buttons';

const NewUserPage = () => {
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
        console.log('### Cadastrado com sucesso!');
        dispatch(getRegisters());
        resetForm();
        navigate('/');
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <div className="cj-card">
        <Button
          aria-label="back"
          variant="blank"
          size="large"
          circle
          inline
          onClick={() => window.history.back()}
        >
          <HiOutlineArrowLeft size={24} />
        </Button>

        <RegistrationForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default NewUserPage;
