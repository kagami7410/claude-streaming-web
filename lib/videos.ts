export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  duration: string;
  views: number;
  uploadDate: string;
  channel: string;
  channelAvatar: string;
}

export const videos: Video[] = [
  {
    id: 1,
    title: "Introduction to Next.js 14",
    description: "Learn the basics of Next.js 14 with the new App Router and server components. Perfect for beginners!",
    thumbnail: "https://via.placeholder.com/640x360/667eea/ffffff?text=Next.js+14",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: "Technology",
    duration: "10:24",
    views: 125000,
    uploadDate: "2024-01-15",
    channel: "Code Academy",
    channelAvatar: "https://via.placeholder.com/50/764ba2/ffffff?text=CA"
  },
  {
    id: 2,
    title: "React Hooks Deep Dive",
    description: "Master useState, useEffect, and custom hooks in this comprehensive tutorial.",
    thumbnail: "https://via.placeholder.com/640x360/f093fb/ffffff?text=React+Hooks",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: "Technology",
    duration: "15:32",
    views: 89000,
    uploadDate: "2024-01-20",
    channel: "React Masters",
    channelAvatar: "https://via.placeholder.com/50/FF6B6B/ffffff?text=RM"
  },
  {
    id: 3,
    title: "Beautiful Nature Landscapes",
    description: "Stunning 4K footage of nature's most beautiful landscapes from around the world.",
    thumbnail: "https://via.placeholder.com/640x360/4CAF50/ffffff?text=Nature+4K",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Nature",
    duration: "8:15",
    views: 234000,
    uploadDate: "2024-01-18",
    channel: "Earth Explorer",
    channelAvatar: "https://via.placeholder.com/50/4CAF50/ffffff?text=EE"
  },
  {
    id: 4,
    title: "Cooking Italian Pasta",
    description: "Learn to make authentic Italian pasta from scratch with this step-by-step guide.",
    thumbnail: "https://via.placeholder.com/640x360/FF8E53/ffffff?text=Italian+Cooking",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    category: "Cooking",
    duration: "12:45",
    views: 67000,
    uploadDate: "2024-01-22",
    channel: "Chef's Kitchen",
    channelAvatar: "https://via.placeholder.com/50/FF8E53/ffffff?text=CK"
  },
  {
    id: 5,
    title: "TypeScript Best Practices",
    description: "Advanced TypeScript patterns and best practices for production applications.",
    thumbnail: "https://via.placeholder.com/640x360/3178C6/ffffff?text=TypeScript",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    category: "Technology",
    duration: "18:20",
    views: 156000,
    uploadDate: "2024-01-25",
    channel: "Code Academy",
    channelAvatar: "https://via.placeholder.com/50/764ba2/ffffff?text=CA"
  },
  {
    id: 6,
    title: "Meditation for Beginners",
    description: "Start your meditation journey with these simple techniques for mindfulness and relaxation.",
    thumbnail: "https://via.placeholder.com/640x360/9C27B0/ffffff?text=Meditation",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    category: "Wellness",
    duration: "20:00",
    views: 98000,
    uploadDate: "2024-01-28",
    channel: "Mindful Living",
    channelAvatar: "https://via.placeholder.com/50/9C27B0/ffffff?text=ML"
  },
  {
    id: 7,
    title: "Travel Guide: Tokyo",
    description: "Explore Tokyo's hidden gems, best restaurants, and must-visit attractions.",
    thumbnail: "https://via.placeholder.com/640x360/E91E63/ffffff?text=Tokyo+Travel",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    category: "Travel",
    duration: "14:55",
    views: 187000,
    uploadDate: "2024-01-30",
    channel: "Globe Trotter",
    channelAvatar: "https://via.placeholder.com/50/E91E63/ffffff?text=GT"
  },
  {
    id: 8,
    title: "Guitar Lesson: Blues Scales",
    description: "Master the blues scale and improve your guitar solos with these essential techniques.",
    thumbnail: "https://via.placeholder.com/640x360/FF5722/ffffff?text=Guitar+Lesson",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    category: "Music",
    duration: "11:30",
    views: 72000,
    uploadDate: "2024-02-01",
    channel: "Music Academy",
    channelAvatar: "https://via.placeholder.com/50/FF5722/ffffff?text=MA"
  }
];

export function getVideoById(id: number): Video | undefined {
  return videos.find(video => video.id === id);
}

export function getVideosByCategory(category: string): Video[] {
  return videos.filter(video => video.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(videos.map(video => video.category)));
}

export function formatViews(views: number): string {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K';
  }
  return views.toString();
}
