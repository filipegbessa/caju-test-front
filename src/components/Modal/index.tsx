import { FC, ReactNode } from 'react';
import { Button } from '../Buttons';
import classNames from 'classnames';

export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  contentClass?: string;
  hasBackdrop?: boolean;
  title?: string;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  contentClass = '',
  hasBackdrop = true,
  title,
}) => {
  if (!isOpen) return null;

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <h2>{title}</h2>
      {onClose && (
        <Button onClick={onClose} aria-label="Close modal">
          Fechar
        </Button>
      )}
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      data-testid="Modal"
    >
      {hasBackdrop && (
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className={classNames(
          'relative max-h-full sm:max-h-[90%] overflow-auto z-10 p-4 bg-white rounded shadow-lg',
          contentClass
        )}
      >
        {title && renderHeader()}
        {children}
      </div>
    </div>
  );
};
