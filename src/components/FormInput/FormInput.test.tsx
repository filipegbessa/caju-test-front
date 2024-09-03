import { render, screen } from '@testing-library/react';
import { FormInputProps, FormInput } from './';

describe('FormInput Component', () => {
  const defaultProps: FormInputProps = {
    name: 'testInput',
    label: 'Test Label',
    isField: false,
  };

  it('renders the input with the correct label', () => {
    render(<FormInput {...defaultProps} />);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
  });

  it('renders the input without a label when label prop is not provided', () => {
    render(<FormInput name="testInput" />);
    const labelElement = screen.queryByText('Test Label');
    expect(labelElement).not.toBeInTheDocument();
  });

  it('renders the input with the correct name and type', () => {
    render(<FormInput {...defaultProps} type="text" />);
    const inputElement = screen.getByTestId('FormInput');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', 'testInput');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('applies the mask correctly when mask prop is provided', async () => {
    render(<FormInput {...defaultProps} mask="cpf" value="12345678909" />);
    const inputElement = screen.getByTestId('FormInput');
    expect(inputElement).toHaveValue('123.456.789-09');
  });

  it('shows an error message when errorMessage prop is provided', () => {
    render(<FormInput {...defaultProps} errorMessage="Error occurred" />);
    const errorElement = screen.getByText('Error occurred');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('cj-error-input');
  });

  it('does not show an error message when errorMessage prop is not provided', () => {
    render(<FormInput {...defaultProps} />);
    const errorElement = screen.queryByText('Error occurred');
    expect(errorElement).not.toBeInTheDocument();
  });
});
