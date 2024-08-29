// import Collumns from './components/Columns';
// import * as S from './styles';
// import { SearchBar } from './components/Searchbar';
// import { useFetchRegistrations } from "~/hooks";
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { useEffect } from 'react';
import { getRegisters } from '~/features/register/registerSlice';

const DashboardPage = () => {
  // const registrations = useFetchRegistrations();
  const dispatch = useAppDispatch();
  const {
    data = [],
    loading,
    error,
  } = useAppSelector((state) => state.register);

  console.log('### data', data);
  console.log('### loading', loading);

  useEffect(() => {
    dispatch(getRegisters());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>123</>
    // <S.Container>
    //   <SearchBar />
    //   <Collumns loading={loading} registrations={data} />
    // </S.Container>
  );
};

export default DashboardPage;
