'use client';
import React, { useState, FC } from 'react';
import Image from 'next/image';

import { Movie } from '@/types';
import { useMoviesContext } from '@/providers/MoviesProvider';

import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { useRoutes } from '@/hooks/useRoutes';

interface CardsProps {
  title: string;
}

const Cards: FC<CardsProps> = ({ title }) => {
  const { movieData } = useMoviesContext();
  const [hoveredMovie, setHoveredMovie] = useState<Movie | null>(null);

  const { handleRouting } = useRoutes();

  const handleMouseEnter = (movie: Movie) => {
    setHoveredMovie(movie);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <div className="pl-28 pr-5 py-2 mb-10 select-none">
      <p className="font-semibold text-xl">{title}</p>
      <div className="relative flex gap-x-2">
        {movieData?.map((movie) => (
          <div
            key={movie.id}
            className="
              flex 
              relative 
              hover:scale-[1.7]
              hover:-translate-y-6
              hover:z-20
              hover:opacity-100
              transition
            "
            onMouseEnter={() => handleMouseEnter(movie)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              loading="lazy"
              unoptimized
              src={movie.thumbnail_url || ''}
              alt={movie.title || 'Movie Title'}
              width={90}
              height={120}
              className="
                rounded-lg
                object-cover
                w-[90px]
                h-[120px]
                md:w-[150px]
                md:h-[200px]
                brightness-[.8]
              "
            />

            {/* Show card when movie is hovered */}
            {hoveredMovie === movie && (
              <div
                className="
                  absolute 
                  inset-0 
                  z-40 
                  g-transparent 
                  text-center 
                  flex 
                  flex-col 
                  items-center 
                  justify-end 
                  bg-opacity-25 
                  rounded-lg 
                  duration-300
                  shadow-black
                  shadow-xl
                "
              >
                <div
                  className="
                    flex 
                    flex-col 
                    w-full 
                    h-3/5 
                    bg-hoverBg 
                    rounded-b-md
                    overflow-hidden
                  "
                >
                  <div
                    className="
                      w-full
                      p-1
                      flex
                      items-center
                      gap-x-1
                    "
                  >
                    <button
                      onClick={() => handleRouting(movie)}
                      className="
                      w-4/5
                      p-1
                      bg-slate-200 
                      self-center
                      text-zinc-900
                      font-medium
                      text-sm
                      rounded-md
                      flex
                      items-center
                      justify-center
                      hover:shadow-lg
                      hover:shadow-blue-950
                    "
                    >
                      <BsFillPlayFill />
                      Watch Now
                    </button>
                    <span
                      className="
                        bg-gray-700
                        rounded-md
                        p-[5px]
                        hover:scale-105
                      "
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>

                  {/* year genre duration */}
                  <div className="text-[8px] truncate p-1 ">
                    {movie.year} • {movie.duration} • English • {movie.genre}
                  </div>
                  {/* description */}
                  <p
                    className="text-[8px] px-1 text-clip break-normal line-clamp-4
                  "
                  >
                    {movie.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
