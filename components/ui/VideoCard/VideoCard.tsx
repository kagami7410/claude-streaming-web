'use client';

import React from 'react';
import styles from './VideoCard.module.css';

export interface VideoCardProps {
  /**
   * Video thumbnail URL
   */
  thumbnail: string;
  /**
   * Video title
   */
  title: string;
  /**
   * Video duration (e.g., "10:24")
   */
  duration?: string;
  /**
   * Channel name
   */
  channel?: string;
  /**
   * Channel avatar URL
   */
  channelAvatar?: string;
  /**
   * Number of views
   */
  views?: number;
  /**
   * Upload date
   */
  uploadDate?: string;
  /**
   * Card size variant
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Card color variant (affects hover and accent colors)
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'accent' | 'success';
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Custom class name
   */
  className?: string;
}

/**
 * Format views count to readable format (e.g., 1.5K, 2.3M)
 */
function formatViews(views: number): string {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K';
  }
  return views.toString();
}

/**
 * VideoCard - A component that displays video thumbnail with metadata
 *
 * Supports multiple size and color variants for flexible use cases.
 */
export default function VideoCard({
  thumbnail,
  title,
  duration,
  channel,
  channelAvatar,
  views,
  uploadDate,
  size = 'medium',
  variant = 'primary',
  onClick,
  className = '',
}: VideoCardProps) {
  const cardClasses = [
    styles.card,
    styles[size],
    styles[variant],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className={styles.thumbnailContainer}>
        <img
          src={thumbnail}
          alt={title}
          className={styles.thumbnail}
        />
        {duration && (
          <span className={styles.duration}>{duration}</span>
        )}
      </div>

      <div className={styles.info}>
        {channelAvatar && (
          <img
            src={channelAvatar}
            alt={channel || 'Channel'}
            className={styles.avatar}
          />
        )}

        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>

          {channel && (
            <p className={styles.channel}>{channel}</p>
          )}

          {(views !== undefined || uploadDate) && (
            <div className={styles.meta}>
              {views !== undefined && (
                <span>{formatViews(views)} views</span>
              )}
              {views !== undefined && uploadDate && (
                <span>•</span>
              )}
              {uploadDate && (
                <span>{new Date(uploadDate).toLocaleDateString()}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
