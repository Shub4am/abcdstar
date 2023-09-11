import Link from 'next/link';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SidebarLinksProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
  isHovered: boolean;
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({
  icon: Icon,
  label,
  active,
  href,
  isHovered,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
            flex
            flex-row
            h-auto
            w-full
            items-center
            gap-x-4
            text-md
            font-semibold
            cursor-pointer
            hover:text-white
            text-neutral-300
            px-5
            py-2
            hover:scale-110
            transition
            duration-100
            ease-in-out
            `,
        active && 'text-white'
      )}
    >
      <Icon size={40} />
      <p
        className={`truncate w-full  ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {label}
      </p>
    </Link>
  );
};

export default SidebarLinks;
