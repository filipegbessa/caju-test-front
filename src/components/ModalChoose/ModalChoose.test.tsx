import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModalChoose } from '.';

describe('ModalChoose', () => {
  const onCloseMock = jest.fn();
  const onClickMock = jest.fn();

  const renderModalChoose = (
    isOpen: boolean,
    title?: string,
    description?: string
  ) => {
    return render(
      <ModalChoose
        isOpen={isOpen}
        onClose={onCloseMock}
        onClick={onClickMock}
        title={title}
        description={description}
      />
    );
  };

  it('should not render when isOpen is false', () => {
    renderModalChoose(false);
    expect(screen.queryByText('Não')).toBeNull();
    expect(screen.queryByText('Sim')).toBeNull();
  });

  it('should render correctly when isOpen is true', () => {
    renderModalChoose(true, 'Modal Title', 'This is a description.');

    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('This is a description.')).toBeInTheDocument();
    expect(screen.getByText('Não')).toBeInTheDocument();
    expect(screen.getByText('Sim')).toBeInTheDocument();
  });

  it('should call onClose when "Não" button is clicked', () => {
    renderModalChoose(true);

    fireEvent.click(screen.getByText('Não'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should call onClick when "Sim" button is clicked', () => {
    renderModalChoose(true);

    fireEvent.click(screen.getByText('Sim'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when close icon is clicked', () => {
    renderModalChoose(true);

    const closeButton = screen.getByTestId('button-close');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
