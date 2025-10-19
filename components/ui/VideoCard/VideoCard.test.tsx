import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import VideoCard from './VideoCard';

describe('VideoCard Component', () => {
  const defaultProps = {
    thumbnail: 'https://via.placeholder.com/640x360',
    title: 'Test Video Title',
  };

  // Basic rendering tests
  describe('Rendering', () => {
    it('should render video card with thumbnail and title', () => {
      render(<VideoCard {...defaultProps} />);

      const thumbnail = screen.getByAltText('Test Video Title');
      expect(thumbnail).toBeInTheDocument();
      expect(thumbnail).toHaveAttribute('src', defaultProps.thumbnail);

      expect(screen.getByText('Test Video Title')).toBeInTheDocument();
    });

    it('should render with custom className', () => {
      const { container } = render(
        <VideoCard {...defaultProps} className="custom-class" />
      );
      const card = container.querySelector('.custom-class');
      expect(card).toBeInTheDocument();
    });

    it('should render with all optional props', () => {
      render(
        <VideoCard
          {...defaultProps}
          duration="10:24"
          channel="Test Channel"
          channelAvatar="https://via.placeholder.com/50"
          views={125000}
          uploadDate="2024-01-15"
        />
      );

      expect(screen.getByText('10:24')).toBeInTheDocument();
      expect(screen.getByText('Test Channel')).toBeInTheDocument();
      expect(screen.getByAltText('Test Channel')).toBeInTheDocument();
      expect(screen.getByText(/125.0K views/)).toBeInTheDocument();
      expect(screen.getByText(/2024/)).toBeInTheDocument();
    });
  });

  // Duration badge tests
  describe('Duration Badge', () => {
    it('should render duration when provided', () => {
      render(<VideoCard {...defaultProps} duration="15:30" />);
      expect(screen.getByText('15:30')).toBeInTheDocument();
    });

    it('should not render duration when not provided', () => {
      const { container } = render(<VideoCard {...defaultProps} />);
      const duration = container.querySelector('[class*="duration"]');
      expect(duration).not.toBeInTheDocument();
    });
  });

  // Channel information tests
  describe('Channel Information', () => {
    it('should render channel name when provided', () => {
      render(<VideoCard {...defaultProps} channel="Tech Channel" />);
      expect(screen.getByText('Tech Channel')).toBeInTheDocument();
    });

    it('should render channel avatar when provided', () => {
      render(
        <VideoCard
          {...defaultProps}
          channel="Tech Channel"
          channelAvatar="https://via.placeholder.com/50"
        />
      );
      const avatar = screen.getByAltText('Tech Channel');
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveAttribute('src', 'https://via.placeholder.com/50');
    });

    it('should not render channel avatar when not provided', () => {
      const { container } = render(
        <VideoCard {...defaultProps} channel="Tech Channel" />
      );
      const avatar = container.querySelector('[class*="avatar"]');
      expect(avatar).not.toBeInTheDocument();
    });

    it('should use default alt text when channel not provided', () => {
      render(
        <VideoCard
          {...defaultProps}
          channelAvatar="https://via.placeholder.com/50"
        />
      );
      expect(screen.getByAltText('Channel')).toBeInTheDocument();
    });
  });

  // Views formatting tests
  describe('Views Formatting', () => {
    it('should format views in thousands (K)', () => {
      render(<VideoCard {...defaultProps} views={1500} />);
      expect(screen.getByText(/1.5K views/)).toBeInTheDocument();
    });

    it('should format views in millions (M)', () => {
      render(<VideoCard {...defaultProps} views={2500000} />);
      expect(screen.getByText(/2.5M views/)).toBeInTheDocument();
    });

    it('should display exact number for views under 1000', () => {
      render(<VideoCard {...defaultProps} views={999} />);
      expect(screen.getByText(/999 views/)).toBeInTheDocument();
    });

    it('should not render views when not provided', () => {
      render(<VideoCard {...defaultProps} />);
      expect(screen.queryByText(/views/)).not.toBeInTheDocument();
    });
  });

  // Upload date tests
  describe('Upload Date', () => {
    it('should render formatted upload date', () => {
      render(<VideoCard {...defaultProps} uploadDate="2024-01-15" />);
      expect(screen.getByText(/2024/)).toBeInTheDocument();
    });

    it('should not render date when not provided', () => {
      const { container } = render(<VideoCard {...defaultProps} />);
      const meta = container.querySelector('[class*="meta"]');
      expect(meta).not.toBeInTheDocument();
    });

    it('should render separator between views and date', () => {
      render(
        <VideoCard
          {...defaultProps}
          views={1000}
          uploadDate="2024-01-15"
        />
      );
      expect(screen.getByText('•')).toBeInTheDocument();
    });

    it('should not render separator when only views provided', () => {
      render(<VideoCard {...defaultProps} views={1000} />);
      expect(screen.queryByText('•')).not.toBeInTheDocument();
    });
  });

  // Size variants tests
  describe('Size Variants', () => {
    it('should render medium size by default', () => {
      const { container } = render(<VideoCard {...defaultProps} />);
      const card = container.querySelector('[class*="medium"]');
      expect(card).toBeInTheDocument();
    });

    it('should render small size', () => {
      const { container } = render(<VideoCard {...defaultProps} size="small" />);
      const card = container.querySelector('[class*="small"]');
      expect(card).toBeInTheDocument();
    });

    it('should render large size', () => {
      const { container } = render(<VideoCard {...defaultProps} size="large" />);
      const card = container.querySelector('[class*="large"]');
      expect(card).toBeInTheDocument();
    });
  });

  // Color variants tests
  describe('Color Variants', () => {
    it('should render primary variant by default', () => {
      const { container } = render(<VideoCard {...defaultProps} />);
      const card = container.querySelector('[class*="primary"]');
      expect(card).toBeInTheDocument();
    });

    it('should render secondary variant', () => {
      const { container } = render(<VideoCard {...defaultProps} variant="secondary" />);
      const card = container.querySelector('[class*="secondary"]');
      expect(card).toBeInTheDocument();
    });

    it('should render accent variant', () => {
      const { container } = render(<VideoCard {...defaultProps} variant="accent" />);
      const card = container.querySelector('[class*="accent"]');
      expect(card).toBeInTheDocument();
    });

    it('should render success variant', () => {
      const { container } = render(<VideoCard {...defaultProps} variant="success" />);
      const card = container.querySelector('[class*="success"]');
      expect(card).toBeInTheDocument();
    });
  });

  // Interaction tests
  describe('Interactions', () => {
    it('should call onClick when card is clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      const { container } = render(
        <VideoCard {...defaultProps} onClick={handleClick} />
      );

      const card = container.firstChild as HTMLElement;
      await user.click(card);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should handle multiple clicks', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      const { container } = render(
        <VideoCard {...defaultProps} onClick={handleClick} />
      );

      const card = container.firstChild as HTMLElement;
      await user.click(card);
      await user.click(card);
      await user.click(card);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('should not throw error when onClick is not provided', async () => {
      const user = userEvent.setup();

      const { container } = render(<VideoCard {...defaultProps} />);
      const card = container.firstChild as HTMLElement;

      await expect(user.click(card)).resolves.not.toThrow();
    });
  });

  // Complete card with all features
  describe('Complete Card', () => {
    it('should render all elements together correctly', () => {
      const { container } = render(
        <VideoCard
          thumbnail="https://via.placeholder.com/640x360"
          title="Complete Test Video"
          duration="25:45"
          channel="Full Feature Channel"
          channelAvatar="https://via.placeholder.com/50"
          views={5500000}
          uploadDate="2024-02-01"
          size="large"
          variant="accent"
          className="test-card"
          onClick={() => {}}
        />
      );

      expect(screen.getByText('Complete Test Video')).toBeInTheDocument();
      expect(screen.getByText('25:45')).toBeInTheDocument();
      expect(screen.getByText('Full Feature Channel')).toBeInTheDocument();
      expect(screen.getByText(/5.5M views/)).toBeInTheDocument();
      expect(screen.getByText(/2024/)).toBeInTheDocument();
      expect(container.querySelector('.test-card')).toBeInTheDocument();
      expect(container.querySelector('[class*="large"]')).toBeInTheDocument();
      expect(container.querySelector('[class*="accent"]')).toBeInTheDocument();
    });
  });
});
