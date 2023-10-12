import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SidebarBoxProps {
  children: React.ReactNode;
  className?: string;
}

const SidebarBox: React.FC<SidebarBoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
          rounded-lg 
          h-full
          w-full
          p-2
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default SidebarBox;
