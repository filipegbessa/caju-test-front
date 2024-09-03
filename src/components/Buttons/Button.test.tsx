import { render, screen, fireEvent } from '@testing-library/react';
import { createRef } from 'react';
import '@testing-library/jest-dom';
import { ButtonProps, Button } from '.';

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    title: 'Click Me',
  };

  it('renders the button with the correct title', () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  it('renders the button with children instead of title when children are provided', () => {
    render(<Button>Child Text</Button>);
    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Child Text');
  });

  it('applies the correct size class based on the size prop', () => {
    const { rerender } = render(<Button {...defaultProps} size="small" />);
    let buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass('h-5 px-3 text-sm');

    rerender(<Button {...defaultProps} size="large" />);
    buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass('h-10 px-6 text-lg');
  });

  it('applies the correct variant class based on the variant prop', () => {
    const { rerender } = render(
      <Button {...defaultProps} variant="secondary" />
    );
    let buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass(
      'bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-active'
    );

    rerender(<Button {...defaultProps} variant="primary" />);
    buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass(
      'bg-primary text-white hover:bg-primary-hover active:bg-primary-active'
    );
  });

  it('applies circle class when the circle prop is true', () => {
    render(<Button {...defaultProps} size="medium" circle />);
    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass('h-8 w-8 text-xl rounded-full');
  });

  it('calls the onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button {...defaultProps} onClick={onClickMock} />);
    const buttonElement = screen.getByTestId('Button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies additional classes passed through the className prop', () => {
    render(<Button {...defaultProps} className="custom-class" />);
    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('disables the button when the disabled prop is true', () => {
    render(<Button {...defaultProps} disabled />);
    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass(
      'disabled:bg-gray disabled:cursor-not-allowed'
    );
  });

  it('renders with inline class when inline prop is true', () => {
    render(<Button {...defaultProps} inline />);
    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass('border-2');
  });

  it('forwards ref to the button element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref} {...defaultProps} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
