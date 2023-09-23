'use client';
import React, { useRef } from 'react';
import { useMoviesContext } from '@/providers/MoviesProvider';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import MovieListCard from './MovieListCard';

interface MoviesListProps {
  title: string;
}

const MoviesList: React.FC<MoviesListProps> = ({ title }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };
  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="pl-28 pr-5 mt-2 py-2 mb-10 select-none">
      <div className="font-semibold text-xl">
        <p className="pb-2">{title}</p>
        <div className="flex overflow-x-hidden relative items-center ">
          <AiOutlineLeft
            size={40}
            className="absolute text-white cursor-pointer left-3 hover:backdrop-blur-md hover:rounded-full z-40"
            onClick={handleScrollLeft}
          />
          <div
            className="flex space-x-2 overflow-x-hidden scroll-smooth "
            ref={scrollRef}
          >
            <MovieListCard />
            <MovieListCard />
            <MovieListCard />
            <MovieListCard />
          </div>
          <AiOutlineRight
            size={40}
            className="absolute text-white right-1 cursor-pointer hover:backdrop-blur-md hover:rounded-full"
            onClick={handleScrollRight}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
