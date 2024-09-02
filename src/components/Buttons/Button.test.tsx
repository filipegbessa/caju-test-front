import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonProps, Button } from '.';

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    title: 'Click Me',
  };

  it('should render the button with the correct title', () => {
    render(<Button {...defaultProps} />);

    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  it('should render the button with children instead of title when children are provided', () => {
    render(<Button>Child Text</Button>);

    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Child Text');
  });

  it('should apply the correct size class', () => {
    render(<Button {...defaultProps} size="small" />);

    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass('h-5 px-3 text-sm');
  });

  it('should apply the correct variant class', () => {
    render(<Button {...defaultProps} variant="secondary" />);

    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass(
      'bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-active'
    );
  });

  it('should apply the circle class when circle prop is true', () => {
    render(<Button {...defaultProps} size="medium" circle />);

    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass('h-8 w-8 text-xl rounded-full');
  });

  it('should call the onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button {...defaultProps} onClick={onClickMock} />);

    const buttonElement = screen.getByTestId('Button');
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should apply additional classes passed through className', () => {
    render(<Button {...defaultProps} className="custom-class" />);

    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button {...defaultProps} disabled />);

    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass(
      'disabled:bg-gray-300 disabled:cursor-not-allowed'
    );
  });
});
