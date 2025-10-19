import VideoCard from '@/components/VideoCard';
import { videos, getAllCategories } from '@/lib/videos';
import styles from './page.module.css';

export default function Home() {
  const categories = getAllCategories();
  const featuredVideos = videos.slice(0, 4);
  const recentVideos = videos.slice(4);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Welcome to StreamHub</h1>
        <p>Discover amazing videos from creators around the world</p>
        <div className={styles.categories}>
          {categories.map(category => (
            <span key={category} className={styles.categoryBadge}>
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Featured Videos</h2>
        <div className={styles.videoGrid}>
          {featuredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Recent Uploads</h2>
        <div className={styles.videoGrid}>
          {recentVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
    </div>
  );
}
