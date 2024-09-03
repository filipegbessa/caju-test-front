import { renderHook } from '@testing-library/react';
import { useDashboard } from '~/hooks/useDashboard';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { getRegisters } from '~/store/registerSlice';
import { IRegistration } from '~/types';
import { RegistrationStatusEnum } from '~/enum';
import '@testing-library/jest-dom';

jest.mock('~/app/hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('~/store/registerSlice', () => ({
  getRegisters: jest.fn(),
}));

const userMock: IRegistration = {
  employeeName: '',
  cpf: '12345678909',
  email: 'email@test.com',
  admissionDate: new Date('2000-10-10'),
  status: RegistrationStatusEnum.REPROVED,
};

const allRegisters: IRegistration[] = [
  { id: '1', ...userMock },
  { id: '2', ...userMock },
];

const searchResult: IRegistration[] = [{ id: '3', ...userMock }];

describe('useDashboard Hook', () => {
  const mockDispatch = jest.fn();
  const mockUseAppSelector = useAppSelector as jest.Mock;
  const mockUseAppDispatch = useAppDispatch as jest.Mock;

  beforeEach(() => {
    mockUseAppDispatch.mockReturnValue(mockDispatch);
    mockUseAppSelector.mockImplementation((selector: any) =>
      selector({
        register: { data: [], loading: false },
        search: { data: null, loading: false },
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch getRegisters on mount', () => {
    mockUseAppSelector.mockImplementation((selector: any) =>
      selector({
        register: { data: allRegisters, loading: false },
        search: { data: null, loading: false },
      })
    );

    renderHook(() => useDashboard());
    expect(mockDispatch).toHaveBeenCalledWith(getRegisters());
  });

  it('should return the correct filteredRegisters and isLoading when searchResult is null', () => {
    mockUseAppSelector.mockImplementation((selector: any) =>
      selector({
        register: { data: allRegisters, loading: false },
        search: { data: null, loading: false },
      })
    );

    const { result } = renderHook(() => useDashboard());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.filteredRegisters).toEqual(allRegisters);
  });

  it('should return searchResult if it is available', () => {
    mockUseAppSelector.mockImplementation((selector: any) =>
      selector({
        register: { data: allRegisters, loading: false },
        search: { data: searchResult, loading: false },
      })
    );

    const { result } = renderHook(() => useDashboard());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.filteredRegisters).toEqual(searchResult);
  });

  it('should set isLoading to true if either register or search is loading', () => {
    mockUseAppSelector.mockImplementation((selector: any) =>
      selector({
        register: { data: [], loading: true },
        search: { data: allRegisters, loading: false },
      })
    );

    const { result } = renderHook(() => useDashboard());
    expect(result.current.isLoading).toBe(true);
  });
});
