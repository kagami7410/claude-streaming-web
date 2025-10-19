import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StreamHub - Watch Amazing Videos',
  description: 'Stream your favorite videos from around the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-container">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
