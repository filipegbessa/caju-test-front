import { Button } from '~/components/Buttons';
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from 'react-icons/hi';
import { FC } from 'react';
import { ActionButtons } from '../ActionButtons';
import { IRegistration } from '~/types';

type RegistrationCardProps = {
  data: IRegistration;
  onClick: (id: string) => void;
};

export const RegistrationCard: FC<RegistrationCardProps> = ({
  data,
  onClick,
}) => {
  const { id, employeeName, email, admissionDate } = data;

  const renderInfoItem = (icon: JSX.Element, text: string) => (
    <div className="flex items-center gap-1">
      <div className="w-4 text-base">{icon}</div>
      <h3 className="text-sm">{text}</h3>
    </div>
  );

  return (
    <>
      <div className="flex relative flex-col gap-2 border border-white p-4 bg-white shadow-md rounded-md">
        <Button
          circle
          aria-label="delete"
          size="small"
          variant="secondary"
          className="absolute top-4 right-4"
          onClick={() => onClick(id)}
        >
          <HiOutlineTrash />
        </Button>

        <div className="flex flex-col">
          {renderInfoItem(<HiOutlineUser />, employeeName)}
          {renderInfoItem(<HiOutlineMail />, email)}
          {renderInfoItem(
            <HiOutlineCalendar />,
            new Date(admissionDate).toLocaleDateString() as string
          )}
        </div>

        <ActionButtons register={data} />
      </div>
    </>
  );
};
