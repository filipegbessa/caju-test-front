import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'O componente Button é um botão customizável com diferentes variantes, tamanhos e opções adicionais como circular e desativado.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Define o tamanho do botão.',
    },
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'review',
        'approved',
        'reproved',
        'blank',
      ],
      description: 'Define a variante de cor do botão.',
    },
    circle: {
      control: { type: 'boolean' },
      description: 'Define se o botão terá formato circular.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Define se o botão estará desativado.',
    },
    onClick: {
      action: 'clicked',
      description: 'Função de callback para o evento de clique.',
    },
  },
  tags: ['autodocs'],
  args: { onClick: () => console.log('Button clicked') },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    size: 'medium',
    title: 'Primary Button',
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    size: 'medium',
    title: 'Secondary Button',
  },
};

export const Review: StoryObj<ButtonProps> = {
  args: {
    variant: 'review',
    size: 'medium',
    title: 'Review Button',
  },
};

export const Approved: StoryObj<ButtonProps> = {
  args: {
    variant: 'approved',
    size: 'medium',
    title: 'Approved Button',
  },
};

export const Reproved: StoryObj<ButtonProps> = {
  args: {
    variant: 'reproved',
    size: 'medium',
    title: 'Reproved Button',
  },
};

export const Circle: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    size: 'large',
    circle: true,
    title: 'x',
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    size: 'medium',
    disabled: true,
    title: 'Disabled Button',
  },
};

export const WithChildren: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button with Children',
  },
};
