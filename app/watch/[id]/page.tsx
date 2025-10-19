'use client';

import { useParams, useRouter } from 'next/navigation';
import { getVideoById, videos, formatViews } from '@/lib/videos';
import VideoCard from '@/components/VideoCard';
import styles from './page.module.css';

export default function WatchPage() {
  const params = useParams();
  const router = useRouter();
  const videoId = parseInt(params.id as string);
  const video = getVideoById(videoId);

  if (!video) {
    return (
      <div className={styles.notFound}>
        <h1>Video Not Found</h1>
        <button onClick={() => router.push('/')}>
          Back to Home
        </button>
      </div>
    );
  }

  const relatedVideos = videos.filter(v =>
    v.id !== video.id && v.category === video.category
  ).slice(0, 4);

  return (
    <div className={styles.watchPage}>
      <div className={styles.mainContent}>
        <div className={styles.playerContainer}>
          <video
            className={styles.videoPlayer}
            controls
            autoPlay
            poster={video.thumbnail}
          >
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.videoInfo}>
          <h1>{video.title}</h1>
          <div className={styles.stats}>
            <span>{formatViews(video.views)} views</span>
            <span>•</span>
            <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
            <span className={styles.category}>{video.category}</span>
          </div>
        </div>

        <div className={styles.channelInfo}>
          <img src={video.channelAvatar} alt={video.channel} />
          <div className={styles.channelDetails}>
            <h3>{video.channel}</h3>
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>

        <div className={styles.description}>
          <h3>Description</h3>
          <p>{video.description}</p>
        </div>
      </div>

      <div className={styles.sidebar}>
        <h3>Related Videos</h3>
        <div className={styles.relatedVideos}>
          {relatedVideos.map(relatedVideo => (
            <VideoCard key={relatedVideo.id} video={relatedVideo} />
          ))}
        </div>
      </div>
    </div>
  );
}
