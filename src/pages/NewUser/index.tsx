import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Button, RegistrationForm } from '~/components';
import { useNewUser } from '~/hooks';

const NewUserPage = () => {
  const { initialValues, handleSubmit, handleBackClick } = useNewUser();

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <div className="cj-card-content">
        <Button
          aria-label="back"
          variant="blank"
          size="large"
          circle
          inline
          onClick={handleBackClick}
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
