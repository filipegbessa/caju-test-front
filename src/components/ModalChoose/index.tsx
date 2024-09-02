import { FC } from 'react';
import { Button } from '../Buttons';
import { Modal, ModalProps } from '../Modal';
import { HiX } from 'react-icons/hi';

interface ModalChooseProps {
  description?: string;
  onClick: () => void;
}

export const ModalChoose: FC<
  Omit<ModalProps, 'children'> & ModalChooseProps
> = ({ isOpen, onClose, title, description, onClick }) => {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      contentClass="bg-white sm:rounded-md flex max-w-3xl p-0"
    >
      <div className="">
        {(title || onClose) && (
          <div className="flex justify-between items-center gap-2 max-w-sm border-b border-gray px-5 py-2">
            <h2>{title}</h2>
            {onClose && (
              <Button
                circle
                size="small"
                variant="blank"
                onClick={onClose}
                testid="button-close"
              >
                <HiX />
              </Button>
            )}
          </div>
        )}

        {description && (
          <div className="flex flex-1 px-5 py-2 flex-col">
            <p>{description}</p>
          </div>
        )}

        <div className="flex px-5 pb-5 pt-3 gap-1 justify-between">
          <Button variant="primary" onClick={onClose}>
            Não
          </Button>
          <Button variant="secondary" onClick={onClick}>
            Sim
          </Button>
        </div>
      </div>
    </Modal>
  );
};
