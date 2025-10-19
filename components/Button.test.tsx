import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  // Basic rendering tests
  describe('Rendering', () => {
    it('should render button with text', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('should render button with custom className', () => {
      render(<Button className="custom-class">Test</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('should forward ref to button element', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Test</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  // Variant tests
  describe('Variants', () => {
    it('should render primary variant by default', () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('primary');
    });

    it('should render secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('secondary');
    });

    it('should render outline variant', () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('outline');
    });

    it('should render ghost variant', () => {
      render(<Button variant="ghost">Ghost</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('ghost');
    });
  });

  // Size tests
  describe('Sizes', () => {
    it('should render medium size by default', () => {
      render(<Button>Medium</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('md');
    });

    it('should render small size', () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('sm');
    });

    it('should render large size', () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('lg');
    });
  });

  // Full width test
  describe('Full Width', () => {
    it('should render full width when fullWidth is true', () => {
      render(<Button fullWidth>Full Width</Button>);
      const button = screen.getByRole('button');
      expect(button.className).toContain('fullWidth');
    });

    it('should not render full width by default', () => {
      render(<Button>Normal Width</Button>);
      const button = screen.getByRole('button');
      expect(button.className).not.toContain('fullWidth');
    });
  });

  // Loading state tests
  describe('Loading State', () => {
    it('should render loading spinner when isLoading is true', () => {
      render(<Button isLoading>Loading</Button>);
      const spinner = document.querySelector('.spinner');
      expect(spinner).toBeInTheDocument();
    });

    it('should disable button when isLoading is true', () => {
      render(<Button isLoading>Loading</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('should hide icons when loading', () => {
      render(
        <Button isLoading leftIcon={<span>←</span>} rightIcon={<span>→</span>}>
          Loading
        </Button>
      );
      expect(screen.queryByText('←')).not.toBeInTheDocument();
      expect(screen.queryByText('→')).not.toBeInTheDocument();
    });

    it('should not render loading spinner when isLoading is false', () => {
      render(<Button isLoading={false}>Not Loading</Button>);
      const spinner = document.querySelector('.spinner');
      expect(spinner).not.toBeInTheDocument();
    });
  });

  // Icon tests
  describe('Icons', () => {
    it('should render left icon', () => {
      render(<Button leftIcon={<span data-testid="left-icon">←</span>}>With Left Icon</Button>);
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    });

    it('should render right icon', () => {
      render(<Button rightIcon={<span data-testid="right-icon">→</span>}>With Right Icon</Button>);
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('should render both left and right icons', () => {
      render(
        <Button
          leftIcon={<span data-testid="left-icon">←</span>}
          rightIcon={<span data-testid="right-icon">→</span>}
        >
          With Both Icons
        </Button>
      );
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });
  });

  // Disabled state tests
  describe('Disabled State', () => {
    it('should disable button when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('should not call onClick when disabled', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      render(<Button disabled onClick={handleClick}>Disabled</Button>);
      const button = screen.getByRole('button');
      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // Interaction tests
  describe('Interactions', () => {
    it('should call onClick when clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button');
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should handle multiple clicks', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button');
      await user.click(button);
      await user.click(button);
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('should support keyboard interaction (Enter)', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Press Enter</Button>);
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should support keyboard interaction (Space)', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Press Space</Button>);
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard(' ');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  // HTML attributes tests
  describe('HTML Attributes', () => {
    it('should support type attribute', () => {
      render(<Button type="submit">Submit</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('should support aria-label attribute', () => {
      render(<Button aria-label="Close dialog">X</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Close dialog');
    });

    it('should support data attributes', () => {
      render(<Button data-testid="custom-button">Test</Button>);
      const button = screen.getByTestId('custom-button');
      expect(button).toBeInTheDocument();
    });
  });
});
