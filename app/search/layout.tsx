import React from 'react';
import '../../app/globals.css';
import Sidebar from '@/components/Sidebar';
import Cards from '@/components/Cards';
import { MoviesProvider } from '@/providers/MoviesProvider';
import Footer from '@/components/Footer';

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full">
      <MoviesProvider>
        <Sidebar>{}</Sidebar>
        {children}
        <Cards title="Popular Searches" />
        <Footer />
      </MoviesProvider>
    </div>
  );
}
