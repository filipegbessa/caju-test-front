import { useNavigate } from 'react-router-dom';
import { login } from '~/api/user';
import { LoginForm } from '~/components/LoginForm';
import { IUser } from '~/types';

const LoginPage = () => {
  const navigate = useNavigate();

  const initialValues: IUser = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: IUser) => {
    try {
      const data = await login(values);

      if (data) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  return (
    <div className="cj-card-content w-full relative flex flex-col max-w-[600px]">
      <div className="flex items-center mb-7 gap-2">
        <h2 className="text-2xl font-medium">Login</h2>
      </div>

      <LoginForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
