import Link from 'next/link';
import { Video, formatViews } from '@/lib/videos';
import styles from './VideoCard.module.css';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/watch/${video.id}`} className={styles.card}>
      <div className={styles.thumbnailContainer}>
        <img src={video.thumbnail} alt={video.title} />
        <span className={styles.duration}>{video.duration}</span>
      </div>
      <div className={styles.info}>
        <img src={video.channelAvatar} alt={video.channel} className={styles.avatar} />
        <div className={styles.details}>
          <h3>{video.title}</h3>
          <p className={styles.channel}>{video.channel}</p>
          <div className={styles.meta}>
            <span>{formatViews(video.views)} views</span>
            <span>•</span>
            <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
