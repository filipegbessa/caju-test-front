import { HiRefresh } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import TextField from '~/components/TextField';
import * as S from './styles';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { fetchByCPF } from '~/store/searchSlice';
import { useAppDispatch } from '~/app/hooks';
import { Button } from '~/components/Buttons';
import { getRegisters } from '~/store/registerSlice';

interface SearchBarProps {
  loading?: boolean;
}

export const SearchBar: FC<SearchBarProps> = ({ loading }) => {
  const [cpfSearch, setCpfSearch] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchByCPF(cpfSearch.length >= 11 ? cpfSearch : null));
  }, [cpfSearch, dispatch]);

  return (
    <S.Container>
      <TextField
        placeholder="Digite um CPF válido"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCpfSearch(e.target.value)
        }
      />
      <S.Actions>
        <Button
          disabled={loading}
          circle
          aria-label="refetch"
          onClick={() => dispatch(getRegisters())}
        >
          <HiRefresh />
        </Button>
        <Link to={'/new-user'}>Nova Admissão</Link>
      </S.Actions>
    </S.Container>
  );
};
