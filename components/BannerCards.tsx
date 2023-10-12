'use client';
import React, { FC } from 'react';
import Image from 'next/image';

import { Movie } from '@/types';
import { useRouter } from 'next/navigation';
import { useRoutes } from '@/hooks/useRoutes';

interface BannerCardsProps {
  movies: Movie[];
}

const BannerCards: FC<BannerCardsProps> = ({ movies }) => {
  const { handleRouting } = useRoutes();

  return (
    <div className="absolute right-0 md:right-10 top-[60%] lg:top-[48%] mt-4">
      <div className="flex flex-row gap-2  cursor-pointer ">
        {movies.slice(0, 4).map((movie) => (
          <div
            key={movie.id}
            className="group  bg-zinc-800 relative w-14 h-10 md:w-[90px] md:h-[51px] rounded-lg"
          >
            <Image
              src={movie.thumbnail_url || ''}
              alt={movie.title || 'Movie Title'}
              layout="fill"
              className="rounded-lg object-cover hover:scale-110"
              onClick={() => handleRouting(movie)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCards;
