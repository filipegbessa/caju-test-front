import { HiRefresh } from 'react-icons/hi';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { fetchByCPF } from '~/store/searchSlice';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { getRegisters } from '~/store/registerSlice';
import { RootState } from '~/store/store';
import { FormInput, Button } from '~/components';

interface SearchBarProps {
  loading?: boolean;
}

export const SearchBar: FC<SearchBarProps> = ({ loading }) => {
  const [cpfSearch, setCpfSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAppDispatch();

  const { data: searchResult } = useAppSelector(
    (state: RootState) => state.search
  );

  useEffect(() => {
    dispatch(fetchByCPF(cpfSearch.length === 14 ? cpfSearch : null));
  }, [cpfSearch, dispatch]);

  useEffect(() => {
    setErrorMessage(
      !searchResult?.length && searchResult !== null ? 'CPF não encontrado' : ''
    );
  }, [searchResult]);

  return (
    <div
      className="flex justify-between items-center gap-4"
      data-testid="SearchBar"
    >
      <FormInput
        maxLength={14}
        mask="cpf"
        isField={false}
        aria-label="serarchCPF"
        placeholder="Digite um CPF válido"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCpfSearch(e.target.value)
        }
        value={cpfSearch}
        errorMessage={errorMessage}
      />

      <div className="flex justify-end items-center gap-4">
        <Button
          disabled={loading}
          circle
          aria-label="refetch"
          onClick={() => dispatch(getRegisters())}
          variant="secondary"
        >
          <HiRefresh />
        </Button>
        <Button
          disabled={loading}
          onClick={() => (window.location.href = '/#/new-user')}
          title="Nova Admissão"
        />
      </div>
    </div>
  );
};
