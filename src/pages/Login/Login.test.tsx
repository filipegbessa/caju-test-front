import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { login } from '~/api/user';
import LoginPage from '.';

jest.mock('~/api/user', () => ({
  login: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('LoginPage', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (login as jest.Mock).mockResolvedValue({});
  });

  it('renders the login form', () => {
    render(<LoginPage />);

    expect(screen.getAllByTestId('FormInput')).toHaveLength(2);
  });

  it('submits the form and navigates on successful login', async () => {
    render(<LoginPage />);

    fireEvent.input(screen.getAllByTestId('FormInput')[0], {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getAllByTestId('FormInput')[1], {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });

  //   it('displays an error message on login failure', async () => {
  //     (login as jest.Mock).mockRejectedValue(
  //       new Error('Error during submission')
  //     );

  //     render(<LoginPage />);

  //     fireEvent.input(screen.getAllByTestId('FormInput')[0], {
  //       target: { value: 'test@example.com' },
  //     });
  //     fireEvent.input(screen.getAllByTestId('FormInput')[1], {
  //       target: { value: 'password123' },
  //     });

  //     fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

  //     await waitFor(() => {
  //       expect(login).toHaveBeenCalledWith({
  //         email: 'test@example.com',
  //         password: 'password123',
  //       });
  //       expect(mockNavigate).not.toHaveBeenCalledWith();
  //       expect(console.error).toHaveBeenCalledWith(
  //         'Error during submission:'
  //       );
  //     });
  //   });
});
