import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
