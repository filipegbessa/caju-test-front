import { useDashboard } from '~/hooks';
import { Collumns } from './components/Columns';
import { SearchBar } from './components/Searchbar';

const DashboardPage = () => {
  const { isLoading, filteredRegisters } = useDashboard();

  return (
    <div className="p-6 flex flex-col">
      <SearchBar loading={isLoading} />
      <Collumns loading={isLoading} registrations={filteredRegisters} />
    </div>
  );
};

export default DashboardPage;
