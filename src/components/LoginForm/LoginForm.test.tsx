import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LoginForm } from '.';

const mockSubmit = jest.fn(() => {});

describe('LoginForm', () => {
  const initialValues = {
    email: '',
    password: '',
  };

  beforeEach(() => {
    render(<LoginForm initialValues={initialValues} onSubmit={mockSubmit} />);
  });

  it('renders login form with email and password inputs', () => {
    expect(screen.getByText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/senha/i)).toBeInTheDocument();
  });

  it('validates email and password fields correctly', async () => {
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

    await waitFor(() => {
      expect(screen.getAllByText('Campo obrigatório')).toHaveLength(2);
    });
  });

  it('submits the form with correct values', async () => {
    fireEvent.input(screen.getAllByTestId('FormInput')[0], {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getAllByTestId('FormInput')[1], {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith(
        { email: 'test@example.com', password: 'password123' },
        expect.anything()
      );
    });
  });
});
