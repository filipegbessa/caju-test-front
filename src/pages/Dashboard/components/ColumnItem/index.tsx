import { RegistrationStatusEnum } from '~/enum';
import { FC, ReactNode } from 'react';

type CollumnItemProps = {
  status: RegistrationStatusEnum;
  children: ReactNode;
  loading?: boolean;
  title: string;
};

export const CollumnItem: FC<CollumnItemProps> = ({
  children,
  loading,
  status,
  title,
}) => {
  const style = {
    [RegistrationStatusEnum.REVIEW]: {
      background: 'bg-[#FDF8E9]',
      title: 'text-[#EFC24D]',
    },
    [RegistrationStatusEnum.APPROVED]: {
      background: 'bg-[#EEEEFD]',
      title: 'text-[#4242DF]',
    },
    [RegistrationStatusEnum.REPROVED]: {
      background: 'bg-[#FBEDF6]',
      title: 'text-[#CE2893]',
    },
  };

  return (
    <div
      data-testid="CollumnItem"
      className={`relative z-0 ovreflow-auto rounded-lg ${style[status].background}`}
    >
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 z-20" />
      )}

      <h3 className={`m-4 ${style[status].title}`}>{title}</h3>
      <div className="flex flex-col gap-2 px-4">{children}</div>
    </div>
  );
};
