import React from 'react';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full">
      <Sidebar>{}</Sidebar>
      {children}
      <Footer />
    </div>
  );
}
