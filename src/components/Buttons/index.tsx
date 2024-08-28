import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import classNames from 'classnames';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'review'
  | 'approved'
  | 'reproved';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactNode;
}

const sizeClasses = {
  small: 'py-1 px-3 text-sm',
  medium: 'py-2 px-4 text-base',
  large: 'py-3 px-6 text-lg',
};

const variantClasses = {
  primary: 'bg-green-500 text-white hover:bg-green-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  review: 'bg-review text-white hover:bg-review',
  approved: 'bg-approved text-white hover:bg-approved',
  reproved: 'bg-reproved text-white hover:bg-reproved',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, title, size = 'medium', variant = 'primary', ...props },
    ref
  ) => {
    const buttonClass = classNames(
      'rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed',
      sizeClasses[size],
      variantClasses[variant]
    );

    return (
      <button ref={ref} className={buttonClass} {...props}>
        {title || children}
      </button>
    );
  }
);
