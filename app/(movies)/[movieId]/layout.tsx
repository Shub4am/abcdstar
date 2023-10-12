import React from 'react';
import '../../../app/globals.css';
import { MoviesProvider } from '@/providers/MoviesProvider';

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <MoviesProvider>{children}</MoviesProvider>
    </div>
  );
}
