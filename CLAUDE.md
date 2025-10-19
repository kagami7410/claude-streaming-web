# StreamHub - Project Context for Claude Code

## Project Overview
StreamHub is a modern video streaming platform built with Next.js 14, TypeScript, and CSS Modules. The application features a vibrant dark theme and provides video browsing, playback, and categorization functionality.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Runtime**: Node.js
- **Package Manager**: npm

## Project Structure
```
streaming-site/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page (featured & recent videos)
│   ├── globals.css        # Global styles and theme variables
│   ├── watch/[id]/        # Dynamic video player page
│   ├── categories/        # Category browsing page
│   └── trending/          # Trending videos page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation with search bar
│   ├── Footer.tsx         # Footer with links
│   └── VideoCard.tsx      # Video thumbnail card
└── lib/                   # Utilities and data
    └── videos.ts          # Video data structure and helper functions
```

## Coding Conventions

### TypeScript
- All components use TypeScript with proper type definitions
- Video interface defined in `lib/videos.ts`
- Strict type checking enabled in `tsconfig.json`

### Styling
- Use CSS Modules for component-specific styles
- File naming: `ComponentName.module.css`
- Import as: `import styles from './ComponentName.module.css'`

### Theme Colors
- **Primary Gradient**: `#667eea → #764ba2 → #f093fb`
- **Background**: Dark blue gradient `#0f0c29 → #302b63 → #24243e`
- **Accent Colors**: Yellow (#FFD54F), Orange (#FF8E53), Red (#FF6B6B)
- **Text**: White (#ffffff) with rgba variations for secondary text

### Component Patterns
- Use Server Components by default (Next.js 14 App Router)
- Add `'use client'` directive only when client-side features needed
- CSS Modules for scoped styling
- Responsive design with mobile-first approach

## Data Structure

### Video Interface
```typescript
interface Video {
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
```

### Video Data Location
- All video data stored in `lib/videos.ts`
- Helper functions: `getVideoById()`, `getRelatedVideos()`, `getVideosByCategory()`, `getTrendingVideos()`

## Development Commands
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Known Limitations & TODO
- Search functionality UI exists but not yet connected to filtering logic
- Video data is currently mock data (uses public domain test videos)
- No backend/database integration
- No user authentication system
- Comments and likes not implemented
- Video upload functionality not available

## Future Enhancement Ideas
- Implement live search with filtering
- Add user authentication and profiles
- Create video upload system
- Add comments, likes, and engagement features
- Implement playlists and "watch later"
- Add subscription system
- Integrate video recommendations algorithm
- Support HLS/DASH adaptive streaming
- Add analytics and view tracking

## Important Notes
- This is a frontend-only application (no backend currently)
- Video sources use HTML5 `<video>` element
- Routes use Next.js App Router file-based routing
- Images and videos referenced via external URLs

## When Working on This Project
1. **Maintain Design Consistency**: Keep the vibrant dark theme and gradient styling
2. **Type Safety**: Ensure all new code has proper TypeScript types
3. **Responsive Design**: Test mobile, tablet, and desktop viewports
4. **CSS Modules**: Use scoped CSS modules for new components
5. **Server Components**: Prefer server components unless client interactivity needed
6. **Code Organization**: Follow existing folder structure patterns
- you do not have permission to read vault folder