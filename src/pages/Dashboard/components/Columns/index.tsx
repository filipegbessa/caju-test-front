import { RegistrationCard } from '../RegistrationCard';
import { RegistrationStatusEnum } from '~/enum';
import { FC, useState } from 'react';
import { filterRegistrationsByStatus } from '~/utils';
import { CollumnItem } from '../ColumnItem';
import { ModalChoose } from '~/components/ModalChoose';
import { deleteRegister } from '~/api/register';
import { useAppDispatch } from '~/app/hooks';
import { getRegisters } from '~/store/registerSlice';

const allColumns: { status: RegistrationStatusEnum; title: string }[] = [
  { status: RegistrationStatusEnum.REVIEW, title: 'Pronto para revisar' },
  { status: RegistrationStatusEnum.APPROVED, title: 'Aprovado' },
  { status: RegistrationStatusEnum.REPROVED, title: 'Reprovado' },
];

type CollumnsProps = {
  registrations?: any[];
  loading?: boolean;
};

export const Collumns: FC<CollumnsProps> = ({
  registrations = [],
  loading,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<string>('');
  const dispatch = useAppDispatch();

  const removeRegister = async (id: string) => {
    await deleteRegister(id);
    dispatch(getRegisters());
    setShowModal(false);
  };

  return (
    <div className="grid grid-cols-3 gap-4 justify-center mt-4 min-h-80">
      {allColumns.map(({ status, title }) => {
        return (
          <CollumnItem
            title={title}
            loading={loading}
            status={status}
            key={title}
          >
            {filterRegistrationsByStatus(registrations, status).map(
              (registration) => (
                <RegistrationCard
                  onClick={(id: string) => {
                    setShowModal(true);
                    setModalItem(id);
                  }}
                  data={registration}
                  key={registration.id}
                />
              )
            )}
          </CollumnItem>
        );
      })}

      <ModalChoose
        onClose={() => setShowModal(false)}
        isOpen={showModal}
        description="Tem certeza que deseja excluir este registro?"
        onClick={() => removeRegister(modalItem)}
      />
    </div>
  );
};
