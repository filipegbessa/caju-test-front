import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { IRegistration } from '~/types';
import { getRegisters } from '~/store/registerSlice';
import { RootState } from '~/store/store';

export const useDashboard = () => {
  const dispatch = useAppDispatch();
  const [filteredRegisters, setFilteredRegisters] = useState<IRegistration[]>(
    []
  );

  const { data: allRegisters = [], loading } = useAppSelector(
    (state: RootState) => state.register
  );
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

  return {
    isLoading,
    filteredRegisters,
  };
};
