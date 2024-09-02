import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'O componente Header é a barra de navegação principal da aplicação, responsiva e fixa no topo da página.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  args: {},
};
