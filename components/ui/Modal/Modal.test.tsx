import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  afterEach(() => {
    document.body.style.overflow = 'unset';
  });

  test('renders modal when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  test('does not render modal when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when overlay is clicked', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    const overlay = screen.getByRole('dialog').parentElement;
    if (overlay) {
      fireEvent.click(overlay);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    }
  });

  test('does not call onClose when overlay is clicked if closeOnOverlayClick is false', () => {
    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title="Test Modal"
        closeOnOverlayClick={false}
      >
        <p>Modal content</p>
      </Modal>
    );

    const overlay = screen.getByRole('dialog').parentElement;
    if (overlay) {
      fireEvent.click(overlay);
      expect(mockOnClose).not.toHaveBeenCalled();
    }
  });

  test('calls onClose when Escape key is pressed', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when Escape key is pressed if closeOnEscape is false', () => {
    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title="Test Modal"
        closeOnEscape={false}
      >
        <p>Modal content</p>
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  test('renders without close button when showCloseButton is false', () => {
    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title="Test Modal"
        showCloseButton={false}
      >
        <p>Modal content</p>
      </Modal>
    );

    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });

  test('renders footer when provided', () => {
    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title="Test Modal"
        footer={<button>Confirm</button>}
      >
        <p>Modal content</p>
      </Modal>
    );

    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  test('applies correct size class - small', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={mockOnClose} size="small">
        <p>Small modal</p>
      </Modal>
    );

    const modal = container.querySelector('[role="dialog"]');
    expect(modal).toHaveClass('small');
  });

  test('applies correct size class - medium', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={mockOnClose} size="medium">
        <p>Medium modal</p>
      </Modal>
    );

    const modal = container.querySelector('[role="dialog"]');
    expect(modal).toHaveClass('medium');
  });

  test('applies correct size class - large', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={mockOnClose} size="large">
        <p>Large modal</p>
      </Modal>
    );

    const modal = container.querySelector('[role="dialog"]');
    expect(modal).toHaveClass('large');
  });

  test('applies correct variant class - gradient', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={mockOnClose} variant="gradient">
        <p>Gradient modal</p>
      </Modal>
    );

    const modal = container.querySelector('[role="dialog"]');
    expect(modal).toHaveClass('gradient');
  });

  test('applies correct variant class - dark', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={mockOnClose} variant="dark">
        <p>Dark modal</p>
      </Modal>
    );

    const modal = container.querySelector('[role="dialog"]');
    expect(modal).toHaveClass('dark');
  });

  test('applies correct variant class - accent', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={mockOnClose} variant="accent">
        <p>Accent modal</p>
      </Modal>
    );

    const modal = container.querySelector('[role="dialog"]');
    expect(modal).toHaveClass('accent');
  });

  test('prevents body scroll when modal is open', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    );

    expect(document.body.style.overflow).toBe('hidden');
  });

  test('restores body scroll when modal is closed', () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    );

    expect(document.body.style.overflow).toBe('hidden');

    rerender(
      <Modal isOpen={false} onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    );

    expect(document.body.style.overflow).toBe('unset');
  });
});
