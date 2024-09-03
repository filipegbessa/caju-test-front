import { renderHook } from '@testing-library/react-hooks';
import { useFetchRegistrations } from '~/hooks/useFetchRegistrations';
import { fetchRegisters } from '~/api/register';
import { IRegistration } from '~/types/registration';
import { RegistrationStatusEnum } from '~/enum';

jest.mock('~/api/register', () => ({
  fetchRegisters: jest.fn(),
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

describe('useFetchRegistrations Hook', () => {
  const mockFetchRegisters = fetchRegisters as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and return registrations', async () => {
    mockFetchRegisters.mockResolvedValueOnce(allRegisters);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchRegistrations()
    );

    expect(result.current).toEqual([]);

    await waitForNextUpdate();

    expect(result.current).toEqual(allRegisters);
  });
});
