import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '.';

describe('Button component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
    expect(button).toHaveClass('py-2 px-4 text-base'); // default size medium
    expect(button).toHaveClass('bg-green-500 text-white'); // default variant primary
  });

  it('renders with a title prop', () => {
    render(<Button title="Submit" />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Submit');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('py-1 px-3 text-sm');

    rerender(<Button size="large">Large</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('py-3 px-6 text-lg');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-500 text-white');

    rerender(<Button variant="approved">Approved</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('bg-approved text-white');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
