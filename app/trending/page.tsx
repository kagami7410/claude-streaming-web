import VideoCard from '@/components/VideoCard';
import { videos } from '@/lib/videos';
import styles from './page.module.css';

export default function TrendingPage() {
  // Sort videos by views to show trending
  const trendingVideos = [...videos].sort((a, b) => b.views - a.views);

  return (
    <div className={styles.trendingPage}>
      <div className={styles.header}>
        <h1>🔥 Trending Now</h1>
        <p>Watch what's popular on StreamHub right now</p>
      </div>

      <div className={styles.videoGrid}>
        {trendingVideos.map((video, index) => (
          <div key={video.id} className={styles.videoItem}>
            <span className={styles.rank}>#{index + 1}</span>
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
}
