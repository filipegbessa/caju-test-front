import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProps } from './';

const meta: Meta<ModalProps> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'O componente Modal é uma janela de diálogo customizável que pode conter qualquer tipo de conteúdo. Ele oferece suporte a títulos, botões de fechamento e backdrops opcionais.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Controla se o modal está aberto ou fechado.',
    },
    title: {
      control: { type: 'text' },
      description: 'Define o título do modal.',
    },
    hasBackdrop: {
      control: { type: 'boolean' },
      description: 'Controla se o backdrop (fundo escurecido) é exibido.',
    },
    onClose: {
      action: 'closed',
      description: 'Função de callback para fechar o modal.',
    },
    contentClass: {
      control: { type: 'text' },
      description:
        'Classe CSS personalizada para estilizar o conteúdo do modal.',
    },
    children: {
      control: 'text',
      description: 'Conteúdo a ser exibido dentro do modal.',
    },
  },
  args: {
    isOpen: true,
    hasBackdrop: true,
  },
};

export default meta;

export const Default: StoryObj<ModalProps> = {
  args: {
    title: 'Modal Title',
    // children: 123,
  },
};

export const WithoutTitle: StoryObj<ModalProps> = {
  args: {
    title: undefined,
    // children: <div>Modal sem título.</div>,
  },
};

export const WithoutBackdrop: StoryObj<ModalProps> = {
  args: {
    title: 'Modal Sem Backdrop',
    hasBackdrop: false,
    // children: <div>Conteúdo do modal sem fundo escurecido.</div>,
  },
};

export const CustomContent: StoryObj<ModalProps> = {
  args: {
    title: 'Modal com Conteúdo Customizado',
    // children: (
    //   <div>
    //     <p>Este modal tem um conteúdo personalizado.</p>
    //     <Button variant="primary" title="Fechar" />
    //   </div>
    // ),
    contentClass: 'bg-blue-100',
  },
};

export const LongContent: StoryObj<ModalProps> = {
  args: {
    title: 'Modal com Conteúdo Longo',
    // children: (
    //   <div>
    //     <p>
    //       {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`.repeat(10)}
    //     </p>
    //   </div>
    // ),
  },
};
