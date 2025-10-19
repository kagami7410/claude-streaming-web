'use client';

import React, { useEffect, useCallback } from 'react';
import styles from './Modal.module.css';

export type ModalSize = 'small' | 'medium' | 'large' | 'full';
export type ModalVariant = 'default' | 'gradient' | 'dark' | 'accent';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: ModalSize;
  variant?: ModalVariant;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  footer?: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  variant = 'default',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  footer,
  className = '',
}) => {
  // Handle escape key
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [closeOnEscape, isOpen, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  // Handle overlay click
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalClasses = [
    styles.modal,
    styles[size],
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={modalClasses} role="dialog" aria-modal="true">
        {/* Header */}
        {(title || showCloseButton) && (
          <div className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {showCloseButton && (
              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className={styles.content}>{children}</div>

        {/* Footer */}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';

export default Modal;
