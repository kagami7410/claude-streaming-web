# StreamHub - Video Streaming Platform

A modern video streaming website built with Next.js 14, TypeScript, and CSS Modules featuring a vibrant dark theme.

## Features

- Modern Next.js 14 with App Router
- TypeScript for type safety
- Responsive design with CSS Modules
- Video player with HTML5 video element
- Category browsing
- Trending videos page
- Search functionality (UI implemented)
- Dark theme with colorful gradients
- Related videos sidebar

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
streaming-site/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── watch/[id]/        # Video player page
│   ├── categories/        # Categories page
│   └── trending/          # Trending videos page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header with search
│   ├── Footer.tsx         # Footer component
│   └── VideoCard.tsx      # Video card component
└── lib/                   # Utilities and data
    └── videos.ts          # Video data and helpers
```

## Available Pages

- `/` - Home page with featured and recent videos
- `/watch/[id]` - Video player page with related videos
- `/categories` - Browse videos by category
- `/trending` - Most viewed videos

## Video Data

Sample videos use public domain test videos from Google's test video bucket. To add your own videos, edit `lib/videos.ts`:

```typescript
{
  id: 9,
  title: "Your Video Title",
  description: "Video description",
  thumbnail: "thumbnail-url",
  videoUrl: "video-url",
  category: "Category Name",
  duration: "12:34",
  views: 1000,
  uploadDate: "2024-02-01",
  channel: "Channel Name",
  channelAvatar: "avatar-url"
}
```

## Customization

### Adding Categories

Categories are automatically generated from the videos data. Just add videos with new category names.

### Styling

All components use CSS Modules with a dark theme and vibrant gradient accents:
- Primary gradient: Purple to pink (`#667eea → #764ba2 → #f093fb`)
- Accent colors: Yellow (`#FFD54F`), Orange (`#FF8E53`), Red (`#FF6B6B`)
- Background: Dark blue gradient (`#0f0c29 → #302b63 → #24243e`)

### Video Sources

Currently using HTML5 video player. Can be upgraded to:
- HLS/DASH streaming for adaptive bitrate
- YouTube/Vimeo embed
- Custom video CDN integration

## Build for Production

```bash
npm run build
npm start
```

## Future Enhancements

Consider adding:
- User authentication and profiles
- Video upload functionality
- Comments and likes
- Playlists and watch later
- Live search with filtering
- Video recommendations algorithm
- Analytics and view tracking
- Subscription system
- Dark/light theme toggle

## License

MIT
