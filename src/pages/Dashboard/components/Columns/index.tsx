import { RegistrationCard } from '../RegistrationCard';
import { RegistrationStatusEnum } from '~/enum';
import { FC } from 'react';
import { filterRegistrationsByStatus } from '~/utils';
import { CollumnItem } from '../ColumnItem';

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
  return (
    <div className="grid grid-cols-3 gap-4 justify-center mt-4">
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
                <RegistrationCard data={registration} key={registration.id} />
              )
            )}
          </CollumnItem>
        );
      })}
    </div>
  );
};
