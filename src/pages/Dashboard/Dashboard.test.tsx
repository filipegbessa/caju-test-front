import { render, screen } from '@testing-library/react';
import { useDashboard } from '~/hooks';
import DashboardPage from '.';

jest.mock('./components/Columns', () => ({
  Collumns: ({ loading, registrations }: any) => (
    <div>
      {loading ? (
        <p>Loading columns...</p>
      ) : (
        <p>Showing {registrations.length} registers</p>
      )}
    </div>
  ),
}));

jest.mock('./components/Searchbar', () => ({
  SearchBar: ({ loading }: any) => (
    <div>
      {loading ? <p>Loading search bar...</p> : <p>Search bar loaded</p>}
    </div>
  ),
}));

jest.mock('~/hooks', () => ({
  useDashboard: jest.fn(),
}));

describe('DashboardPage', () => {
  it('renders loading state correctly', () => {
    (useDashboard as jest.Mock).mockReturnValue({
      isLoading: true,
      filteredRegisters: [],
    });

    render(<DashboardPage />);

    expect(screen.getByText('Loading search bar...')).toBeInTheDocument();
    expect(screen.getByText('Loading columns...')).toBeInTheDocument();
  });

  it('renders dashboard with data', () => {
    (useDashboard as jest.Mock).mockReturnValue({
      isLoading: false,
      filteredRegisters: [
        { id: 1, name: 'Register 1' },
        { id: 2, name: 'Register 2' },
      ],
    });

    render(<DashboardPage />);

    expect(screen.getByText('Search bar loaded')).toBeInTheDocument();

    expect(screen.getByText('Showing 2 registers')).toBeInTheDocument();
  });

  it('renders empty state when no data is available', () => {
    (useDashboard as jest.Mock).mockReturnValue({
      isLoading: false,
      filteredRegisters: [],
    });

    render(<DashboardPage />);

    expect(screen.getByText('Search bar loaded')).toBeInTheDocument();

    expect(screen.getByText('Showing 0 registers')).toBeInTheDocument();
  });
});
