import { FC } from 'react';
import { CollumnItem } from '../ColumnItem';
import { RegistrationCard } from '../RegistrationCard';
import { ModalChoose } from '~/components';
import { IRegistration } from '~/types';
import { useCollumns } from '~/hooks/useColumns';

type CollumnsProps = {
  registrations?: IRegistration[];
  loading?: boolean;
};

export const Collumns: FC<CollumnsProps> = ({
  registrations = [],
  loading,
}) => {
  const {
    showModal,
    columnsData,
    removeRegister,
    handleCardClick,
    closeModal,
    modalItem,
  } = useCollumns(registrations);

  return (
    <div className="sm:grid grid-cols-3 gap-4 justify-center mt-4 min-h-80">
      {columnsData.map(({ title, status, registrations }) => (
        <CollumnItem
          title={title}
          loading={loading}
          status={status}
          key={title}
        >
          {registrations.map((registration) => (
            <RegistrationCard
              onClick={() => handleCardClick(registration.id as string)}
              data={registration}
              key={registration.id}
            />
          ))}
        </CollumnItem>
      ))}

      <ModalChoose
        onClose={closeModal}
        isOpen={showModal}
        description="Tem certeza que deseja excluir este registro?"
        onClick={() => removeRegister(modalItem)}
      />
    </div>
  );
};
