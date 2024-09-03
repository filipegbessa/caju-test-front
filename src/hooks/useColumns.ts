import { useState } from 'react';
import { useAppDispatch } from '~/app/hooks';
import { deleteRegister } from '~/api/register';
import { getRegisters } from '~/store/registerSlice';
import { RegistrationStatusEnum } from '~/enum';
import { filterRegistrationsByStatus } from '~/utils';
import { IRegistration } from '~/types';

const allColumns: { status: RegistrationStatusEnum; title: string }[] = [
  { status: RegistrationStatusEnum.REVIEW, title: 'Pronto para revisar' },
  { status: RegistrationStatusEnum.APPROVED, title: 'Aprovado' },
  { status: RegistrationStatusEnum.REPROVED, title: 'Reprovado' },
];

export const useCollumns = (registrations: IRegistration[] = []) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<string>('');
  const dispatch = useAppDispatch();

  const removeRegister = async (id: string) => {
    await deleteRegister(id);
    dispatch(getRegisters());
    setShowModal(false);
  };

  const handleCardClick = (id: string) => {
    setShowModal(true);
    setModalItem(id);
  };

  const closeModal = () => setShowModal(false);

  const columnsData = allColumns.map(({ status, title }) => ({
    title,
    status,
    registrations: filterRegistrationsByStatus(registrations, status),
  }));

  return {
    showModal,
    modalItem,
    columnsData,
    removeRegister,
    handleCardClick,
    closeModal,
  };
};
