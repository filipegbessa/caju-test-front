import Collumns from './components/Columns';
import * as S from './styles';
import { SearchBar } from './components/Searchbar';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { useEffect, useState } from 'react';
import { IRegistration } from '~/types';
import { getRegisters } from '~/store/registerSlice';
import { RootState } from '~/store/store';

const DashboardPage = () => {
  const dispatch = useAppDispatch();
  const [filteredRegisters, setFilteredRegisters] = useState<IRegistration[]>(
    []
  );

  const {
    data: allRegisters = [],
    loading,
    // error,
  } = useAppSelector((state: RootState) => state.register);
  const { data: searchResult, loading: searchLoading } = useAppSelector(
    (state: RootState) => state.search
  );

  const isLoading = loading || searchLoading;

  useEffect(() => {
    dispatch(getRegisters());
  }, [dispatch]);

  useEffect(() => {
    setFilteredRegisters(searchResult ?? allRegisters);
  }, [allRegisters, searchResult]);

  useEffect(() => {
    console.log('### isLoading', isLoading);
  }, [isLoading]);

  return (
    <S.Container>
      <SearchBar loading={isLoading} />
      <Collumns loading={isLoading} registrations={filteredRegisters} />
    </S.Container>
  );
};

export default DashboardPage;
