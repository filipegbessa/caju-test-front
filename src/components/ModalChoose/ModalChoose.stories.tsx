import type { Meta, StoryObj } from '@storybook/react';
import { ModalChoose } from '.';

const meta: Meta<typeof ModalChoose> = {
  title: 'Components/ModalChoose',
  component: ModalChoose,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'O componente ModalChoose é uma janela modal que permite ao usuário escolher entre duas ações, como confirmar ou cancelar uma operação. Inclui suporte para título, descrição e ações personalizadas.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Define se o modal está visível ou não.',
    },
    onClose: {
      action: 'onClose',
      description: 'Função de callback para o evento de fechamento do modal.',
    },
    onClick: {
      action: 'onClick',
      description: 'Função de callback para o evento de confirmação no modal.',
    },
    title: {
      control: { type: 'text' },
      description: 'Título exibido no cabeçalho do modal.',
    },
    description: {
      control: { type: 'text' },
      description: 'Descrição exibida no corpo do modal.',
    },
  },
  args: {
    isOpen: true,
    title: 'Título do Modal',
    description:
      'Descrição do modal que fornece mais detalhes sobre a ação que o usuário deve confirmar ou cancelar.',
    onClose: () => console.log('Modal closed'),
    onClick: () => console.log('Action confirmed'),
  },
};

export default meta;

export const Default: StoryObj<typeof ModalChoose> = {
  args: {
    title: 'Confirmar Ação',
    description: 'Você tem certeza de que deseja realizar esta ação?',
  },
};

export const WithoutTitle: StoryObj<typeof ModalChoose> = {
  args: {
    title: '',
    description: 'Você tem certeza de que deseja realizar esta ação?',
  },
};

export const WithoutDescription: StoryObj<typeof ModalChoose> = {
  args: {
    title: 'Confirmar Ação',
    description: '',
  },
};

export const CustomActions: StoryObj<typeof ModalChoose> = {
  args: {
    title: 'Confirmação Personalizada',
    description: 'Selecione a opção desejada.',
    onClose: () => alert('Modal fechado!'),
    onClick: () => alert('Ação confirmada!'),
  },
};
