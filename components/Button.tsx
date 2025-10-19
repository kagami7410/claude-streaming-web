import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonClasses = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth ? styles.fullWidth : '',
      isLoading ? styles.loading : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className={styles.spinner} aria-hidden="true">
            <span className={styles.spinnerCircle}></span>
          </span>
        )}
        {!isLoading && leftIcon && (
          <span className={styles.leftIcon}>{leftIcon}</span>
        )}
        <span className={styles.content}>{children}</span>
        {!isLoading && rightIcon && (
          <span className={styles.rightIcon}>{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
