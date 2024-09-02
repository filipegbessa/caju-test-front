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
      contentClass="bg-white sm:rounded-md flex my-5 max-w-3xl"
    >
      <div className=" bg-white container">
        {(title || onClose) && (
          <div className="flex justify-between items-center px-5 py-2 border-b border-gray gap-2 max-w-sm">
            <h2>{title}</h2>
            <Button circle size="small" variant="blank" onClick={onClose}>
              <HiX />
            </Button>
          </div>
        )}
        <div className="flex flex-1 px-5 py-2 flex-col gap-1">
          {description}
        </div>
        <div className="flex px-5 pb-5 pt-3 gap-1 justify-between">
          <Button variant="primary" onClick={onClose}>
            Não
          </Button>
          <Button variant="secondary" onClick={onClick}>
            sim
          </Button>
        </div>
      </div>
    </Modal>
  );
};
