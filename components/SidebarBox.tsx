import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface SidebarBoxProps {
  children: React.ReactNode;
  className?: string;
}

const SidebarBox: FC<SidebarBoxProps> = ({ children, className }) => {
  return (
    <div className={twMerge(` rounded-lg h-full w-full p-2`, className)}>
      {children}
    </div>
  );
};

export default SidebarBox;
