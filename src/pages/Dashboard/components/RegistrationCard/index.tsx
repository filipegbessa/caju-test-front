import { Button } from '~/components/Buttons';
import * as S from './styles';
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from 'react-icons/hi';
import { deleteRegister } from '~/api/register';
import { useAppDispatch } from '~/app/hooks';
import { getRegisters } from '~/store/registerSlice';
import { useState } from 'react';
import { ModalChoose } from '~/components/ModalChoose';
import { ActionButtons } from '../ActionButtons';

type Props = {
  data: any;
};

const RegistrationCard = ({ data }: Props) => {
  const { id, employeeName, email, admissionDate } = data;
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);

  const removeRegister = async () => {
    await deleteRegister(id);
    dispatch(getRegisters());
    setShowModal(false);
  };

  return (
    <S.Card>
      <Button
        circle
        aria-label="delete"
        size="small"
        variant="secondary"
        className="absolute top-4 right-4"
        onClick={() => setShowModal(true)}
      >
        <HiOutlineTrash />
      </Button>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{admissionDate}</span>
      </S.IconAndText>

      <ActionButtons register={data} />

      <ModalChoose
        onClose={() => {
          setShowModal(false);
        }}
        isOpen={showModal}
        description="Tem certeza que deseja excluir este registro?"
        onClick={removeRegister}
      />
    </S.Card>
  );
};

export default RegistrationCard;
