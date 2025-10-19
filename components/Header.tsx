'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would go here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <h1>StreamHub</h1>
        </Link>

        <form className={styles.searchForm} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </form>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/trending">Trending</Link>
        </nav>
      </div>
    </header>
  );
}
