import React from 'react';
import '../../app/globals.css';

import { MoviesProvider } from '@/providers/MoviesProvider';
import Sidebar from '@/components/Sidebar';
import MovieBanner from '@/components/MovieBanner';
import MoviesList from '@/components/MoviesList';
import Footer from '@/components/Footer';
import Cards from '@/components/Cards';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-hidden">
      <MoviesProvider>
        <Sidebar>{children}</Sidebar>
        <MovieBanner />
        <Cards title="Trending" />
        <MoviesList title="Latest Releases" />
        <Footer />
      </MoviesProvider>
    </div>
  );
}
