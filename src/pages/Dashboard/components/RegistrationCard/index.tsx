import { Button } from '~/components';
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

  const renderInfoItem = (
    icon: JSX.Element,
    text: string,
    isName?: boolean
  ) => (
    <div className="flex items-center gap-1">
      <div className="w-4 text-base">{icon}</div>
      <h3
        className={`text-sm overflow-hidden text-ellipsis whitespace-nowrap ${isName ? 'pr-6' : ''}`}
      >
        {text}
      </h3>
    </div>
  );

  return (
    <div
      aria-hidden="true"
      onClick={() => {
        console.log('#######');
      }}
      data-testid="RegistrationCard"
      className="cj-card"
    >
      <Button
        circle
        aria-label="delete"
        size="small"
        variant="secondary"
        className="absolute top-4 right-4"
        onClick={(e: any) => {
          e.stopPropagation();
          onClick(id as string);
        }}
      >
        <HiOutlineTrash />
      </Button>

      <div className="flex flex-col gap-1">
        {renderInfoItem(<HiOutlineUser />, employeeName, true)}
        {renderInfoItem(<HiOutlineMail />, email)}
        {renderInfoItem(
          <HiOutlineCalendar />,
          new Date(admissionDate).toLocaleDateString() as string
        )}
      </div>

      <ActionButtons register={data} />
    </div>
  );
};
