"use client";
import React, { useState, FC } from "react";
import Image from "next/image";

import { Movie } from "@/types";
import { useMoviesContext } from "@/providers/MoviesProvider";
import { useRoutes } from "@/hooks/useRoutes";

import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill, BsCheckLg } from "react-icons/bs";

interface CardsProps {
  title: string;
}

const Cards: FC<CardsProps> = ({ title }) => {
  const { movieData } = useMoviesContext();

  const [hoveredMovie, setHoveredMovie] = useState<Movie | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const { handleRouting } = useRoutes();

  const [addToWatchlist, setAddToWatchlist] = useState<{
    [key: string]: boolean;
  }>({});

  const handleMouseEnter = (movie: Movie) => {
    const timeoutId = setTimeout(() => {
      setHoveredMovie(movie);
    }, 500);
    setHoverTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoveredMovie(null);
  };

  const toggleWatchlist = (movie: Movie) => {
    setAddToWatchlist((prevState) => {
      const isLiked = !prevState[movie.id];
      return { ...prevState, [movie.id]: isLiked };
    });
  };

  return (
    <div className="pl-28 pr-5 py-2 mb-10 select-none">
      <p className="font-semibold text-xl pb-2">{title}</p>
      <div className="relative flex gap-x-2">
        {movieData?.map((movie, index) => (
          <div
            key={movie.id}
            className={` flex relative transition
              ${
                hoveredMovie === movie
                  ? "scale-[1.8] -translate-y-6 z-20 opacity-100"
                  : ""
              }
              ${
                hoveredMovie === movie && index === movieData.length - 1
                  ? "hover:-translate-x-12"
                  : ""
              }
            `}
            onMouseEnter={() => handleMouseEnter(movie)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              loading="lazy"
              unoptimized
              src={movie.thumbnail_url || ""}
              alt={movie.title || "Movie Title"}
              width="0"
              height="0"
              className=" rounded-lg object-cover w-[90px] h-[120px] md:w-[150px] md:h-[200px] brightness-[.8] "
            />

            {/* Show card when movie is hovered */}
            {hoveredMovie === movie && (
              <div className="absolute inset-0 z-40 g-transparent text-center flex flex-col items-center justify-end bg-opacity-25 rounded-lg duration-300 shadow-black shadow-xl ">
                <div className="flex flex-col w-full h-3/5 bg-hoverBg rounded-b-md overflow-hidden">
                  <div className=" w-full p-1 flex items-center gap-x-1">
                    <button
                      onClick={() => handleRouting(movie)}
                      className=" w-[85%] p-[6px] bg-slate-200  text-zinc-900 font-semibold text-[8px] rounded-md gap-x-1 flex text-center items-center justify-center hover:shadow-lg hover:shadow-blue-950"
                    >
                      <BsFillPlayFill size={10} />
                      Watch Now
                    </button>
                    <button
                      className=" bg-zinc-800 rounded-md p-1 hover:scale-105"
                      title="Watchlist"
                      onClick={() => toggleWatchlist(movie)}
                    >
                      {!addToWatchlist[movie.id] ? (
                        <AiOutlinePlus title="WatchList" />
                      ) : (
                        <BsCheckLg title="Added to WatchList" />
                      )}
                    </button>
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
