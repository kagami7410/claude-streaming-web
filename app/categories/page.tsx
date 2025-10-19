import VideoCard from '@/components/VideoCard';
import { videos, getAllCategories, getVideosByCategory } from '@/lib/videos';
import styles from './page.module.css';

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className={styles.categoriesPage}>
      <h1>Browse by Category</h1>

      {categories.map(category => {
        const categoryVideos = getVideosByCategory(category);
        return (
          <section key={category} className={styles.categorySection}>
            <h2>{category}</h2>
            <div className={styles.videoGrid}>
              {categoryVideos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
