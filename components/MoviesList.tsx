'use client';
import React from 'react';
import { useMoviesContext } from '@/providers/MoviesProvider';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface MoviesListProps {
  title: string;
}

const MoviesList: React.FC<MoviesListProps> = ({ title }) => {
  const { movieData } = useMoviesContext();

  const MovieListCard = () => {
    return movieData?.map((movie) => (
      <div key={movie.id}>
        <div
          className="
          group  
          bg-zinc-800 
          flex 
          items-center
          justify-center
          text-center
          w-[90px] md:w-[150px] 
          h-[120px] md:h-[200px] 
          rounded-lg
          "
        >
          <Image
            loading="lazy"
            unoptimized
            src={movie.thumbnail_url || ''}
            alt={movie.title || 'Movie Title'}
            width={90}
            height={120}
            className="rounded-lg object-cover w-[90px] h-[120px] md:w-[150px] md:h-[200px]"
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="pl-28 mt-2 py-2 mb-10">
      <div className="font-semibold text-xl">
        <p className="pb-2">{title}</p>
        <div className="flex overflow-x-hidden hover:overflow-x-scroll ">
          <div className="flex w-fit items-center gap-x-2">
            <AiOutlineLeft size={40} className="absolute text-blue-700 " />
            <MovieListCard />
            <MovieListCard />
            <MovieListCard />
            <AiOutlineRight
              size={40}
              className="absolute text-blue-700 right-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
