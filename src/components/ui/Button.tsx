import type { MouseEventHandler, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' ;

type ButtonProps = {
  children?: ReactNode;
  variant?: ButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button = ({ children, variant = 'primary', onClick, className = '' }: ButtonProps) => {
  const baseStyles =
    "px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-md transform hover:-translate-y-0.5";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue border-r-5 border-b-5 border-dark-blue text-white hover:bg-dark-blue shadow-xl dark:bg-dark-surface dark:text-dark-text-white dark:border-dark-border",
    secondary: "bg-grey border-black border-r-5 border-b-5 text-dark-text-secondary hover:bg-dark-grey shadow-xl",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
