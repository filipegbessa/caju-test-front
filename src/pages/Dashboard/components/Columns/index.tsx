import * as S from './styles';
import RegistrationCard from '../RegistrationCard';
import { RegistrationStatusEnum } from '~/enum';
import { FC } from 'react';
import { filterRegistrationsByStatus } from '~/utils';

const allColumns: { status: RegistrationStatusEnum; title: string }[] = [
  { status: RegistrationStatusEnum.REVIEW, title: 'Pronto para revisar' },
  { status: RegistrationStatusEnum.APPROVED, title: 'Aprovado' },
  { status: RegistrationStatusEnum.REPROVED, title: 'Reprovado' },
];

type CollumnsProps = {
  registrations?: any[];
  loading?: boolean;
};

const Collumns: FC<CollumnsProps> = ({ registrations = [], loading }) => {
  return (
    <S.Container>
      {allColumns.map(({ status, title }) => {
        return (
          <S.Column status={status} key={title}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <S.TitleColumn status={status}>{title}</S.TitleColumn>
                <S.CollumContent>
                  {filterRegistrationsByStatus(registrations, status).map(
                    (registration) => (
                      <RegistrationCard
                        data={registration}
                        key={registration.id}
                      />
                    )
                  )}
                </S.CollumContent>
              </>
            )}
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
