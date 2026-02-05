import React from 'react';
import '../../app/globals.css';
import Sidebar from '@/components/Sidebar';
import { MoviesProvider } from '@/providers/MoviesProvider';
import Footer from '@/components/Footer';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full">
      <MoviesProvider>
        <Sidebar>{}</Sidebar>
        {children}
        <Footer />
      </MoviesProvider>
    </div>
  );
}
