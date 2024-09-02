import { FC } from 'react';
import { saveRegister } from '~/api/register';
import { useAppDispatch } from '~/app/hooks';
import { Button } from '~/components/Buttons';
import { RegistrationStatusEnum } from '~/enum';
import { getRegisters } from '~/store/registerSlice';
import { IRegistration } from '~/types';

interface ActionButtonsProps {
  register: IRegistration;
}

export const ActionButtons: FC<ActionButtonsProps> = ({ register }) => {
  const { status } = register;
  const dispatch = useAppDispatch();

  const updateRegister = async (newStatus: RegistrationStatusEnum) => {
    const result = await saveRegister({ ...register, status: newStatus });
    if (result.id) {
      dispatch(getRegisters());
    }
  };

  const renderButton = (
    text: string,
    variant: keyof typeof RegistrationStatusEnum
  ) => {
    if (status === variant) return null;

    return (
      <Button
        size="small"
        variant={variant.toLowerCase() as 'reproved' | 'approved' | 'review'}
        onClick={(e: any) => {
          e.stopPropagation();
          updateRegister(RegistrationStatusEnum[variant]);
        }}
      >
        {text}
      </Button>
    );
  };

  return (
    <div className="flex gap-1 flex-col md:flex-row mt-4 flex-wrap">
      {renderButton('Reprovar', RegistrationStatusEnum.REPROVED)}
      {renderButton('Aprovar', RegistrationStatusEnum.APPROVED)}
      {renderButton('Revisar novamente', RegistrationStatusEnum.REVIEW)}
    </div>
  );
};
