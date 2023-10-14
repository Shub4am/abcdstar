import React from 'react';
import '../../app/globals.css';

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full">{children}</div>;
}
