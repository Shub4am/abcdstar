import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { MoviesProvider } from '@/providers/MoviesProvider';
import Sidebar from '@/components/Sidebar';
import MovieBanner from '@/components/MovieBanner';
import MoviesList from '@/components/MoviesList';

const font = Poppins({ weight: ['200', '400', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Disney+ Hotstar',
  description: 'Watch TV Shows, Movies, Specials, Live Cricket & Football',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MoviesProvider>
          <Sidebar>{children}</Sidebar>
          <MovieBanner />
          <MoviesList title="Latest Releases" />
        </MoviesProvider>
      </body>
    </html>
  );
}
