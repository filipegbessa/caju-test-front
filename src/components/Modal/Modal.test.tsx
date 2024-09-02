import { render, screen, fireEvent } from '@testing-library/react';
import { ModalProps, Modal } from '.';
import '@testing-library/jest-dom';

jest.mock('../Buttons', () => ({
  Button: ({ onClick, children, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
}));

describe('Modal Component', () => {
  const defaultProps: ModalProps = {
    isOpen: true,
    onClose: jest.fn(),
    children: <div>Modal Content</div>,
    title: 'Test Modal',
  };

  it('should render the modal when isOpen is true', () => {
    render(<Modal {...defaultProps} />);

    const modalElement = screen.getByTestId('Modal');
    expect(modalElement).toBeInTheDocument();

    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should not render the modal when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);

    const modalElement = screen.queryByTestId('Modal');
    expect(modalElement).not.toBeInTheDocument();
  });

  it('should call onClose when the close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Modal {...defaultProps} onClose={onCloseMock} />);

    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when the backdrop is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Modal {...defaultProps} onClose={onCloseMock} />);

    const backdropElement = screen.getByLabelText('Close modal');
    fireEvent.click(backdropElement);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
