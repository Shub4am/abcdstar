'use client';

import React, { FC, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

import SidebarBox from './SidebarBox';
import SidebarLinks from './SidebarLinks';

import { GoHome } from 'react-icons/go';
import { PiTelevisionSimpleLight } from 'react-icons/pi';
import { BiSearch, BiMoviePlay, BiFootball } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const pathName = usePathname();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const routes = useMemo(
    () => [
      {
        icon: AiOutlineUser,
        label: 'User',
        active: pathName === 'User',
        href: '/user',
        isHovered: isHovered,
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathName === 'Search',
        href: '/search',
        isHovered: isHovered,
      },
      {
        icon: GoHome,
        label: 'Home',
        active: pathName !== 'Search',
        href: '/',
        isHovered: isHovered,
      },

      {
        icon: PiTelevisionSimpleLight,
        label: 'TV',
        active: pathName === 'TV',
        href: '/',
        isHovered: isHovered,
      },
      {
        icon: BiMoviePlay,
        label: 'Movies',
        active: pathName === 'Movies',
        href: '/',
        isHovered: isHovered,
      },
      {
        icon: BiFootball,
        label: 'Sports',
        active: pathName === 'Sports',
        href: '/',
        isHovered: isHovered,
      },
    ],
    [pathName, isHovered]
  );

  return (
    <div
      className=" hidden fixed top-0 left-0 z-10 sm:flex flex-row bg-transparent gap-y-3 h-full w-36 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SidebarBox className="flex justify-center items-center">
        <div>
          {routes.map((item) => (
            <SidebarLinks key={item.label} {...item} />
          ))}
        </div>
      </SidebarBox>
      <main className="h-full flex-1 py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
