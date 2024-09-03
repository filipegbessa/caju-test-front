import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import classNames from 'classnames';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'review'
  | 'approved'
  | 'reproved'
  | 'blank';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactNode | JSX.Element;
  circle?: boolean;
  className?: string;
  testid?: string;
  inline?: boolean;
}

const sizeClasses = {
  small: 'h-5 px-3 text-sm',
  medium: 'h-8 px-4 text-base',
  large: 'h-10 px-6 text-lg',
};

const sizeCircleClasses = {
  small: 'h-5 w-5 text-sm',
  medium: 'h-8 w-8 text-xl',
  large: 'h-10 w-10 text-2xl',
};

const variantClasses = {
  primary:
    'bg-primary text-white hover:bg-primary-hover active:bg-primary-active',
  secondary:
    'bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-active',
  review: 'bg-review text-white hover:bg-review',
  approved: 'bg-approved text-white hover:bg-approved',
  reproved: 'bg-reproved text-white hover:bg-reproved',
  blank: 'text-primary',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      title,
      size = 'medium',
      variant = 'primary',
      circle,
      className,
      testid = 'Button',
      inline,
      ...props
    },
    ref
  ) => {
    const buttonClass = classNames(
      'font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform active:scale-95 disabled:bg-gray disabled:hover:bg-gray disabled:active:bg-gray disabled:cursor-not-allowed flex justify-center items-center text-nowrap',
      circle
        ? [sizeCircleClasses[size], 'rounded-full']
        : [sizeClasses[size], 'rounded-lg'],
      variantClasses[variant],
      className,
      inline ? 'border-2' : ''
    );

    return (
      <button ref={ref} className={buttonClass} data-testid={testid} {...props}>
        {title || children}
      </button>
    );
  }
);
