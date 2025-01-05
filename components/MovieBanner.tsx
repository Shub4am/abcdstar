"use client";
import React, { useEffect, useState } from "react";

import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import BannerCards from "./BannerCards";
import { useMovieData } from "@/hooks/useMovieData";
import { useRoutes } from "@/hooks/useRoutes";
import Loading from "@/app/(site)/loading";

const MovieBanner = () => {
  const { movieData, currentMovieIndex, nextMovie } = useMovieData();

  const [isLoading, setIsLoading] = useState(true);

  const { handleRouting } = useRoutes();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    //Switches to next movie every 20 seconds
    const interval = setInterval(() => {
      nextMovie();
    }, 20000); //20 seconds

    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(interval);
    };
  }, [currentMovieIndex, nextMovie]);

  const currentMovie = movieData[currentMovieIndex];

  return (
    <div className="relative h-[80vh] select-none mb-5">
      {isLoading ? (
        <Loading />
      ) : (
        currentMovie && (
          <>
            <video
              className=" h-screen w-full object-cover brightness-[40%] absolute"
              autoPlay
              muted
              loop
              poster={currentMovie.thumbnail_url || undefined}
              src={currentMovie.video_url || undefined}
            >
              Your browser does not support the video tag.
            </video>
            {/* Fix UI  */}
            <div className="absolute top-[70%]  ml-12 sm:ml-32 flex flex-col gap-3">
              <div className="w-full">
                <p className="font-bold text-xl sm:text-3xl md:text-4xl drop-shadow-xl">
                  {currentMovie.title}
                </p>
              </div>
              <div className="flex gap-x-4 text-sm sm:text-base p-2">
                <p>{currentMovie.year}</p>•<p>{currentMovie.genre}</p>•
                <p>{currentMovie.duration}</p>
              </div>
              <div className="hidden lg:block max-w-2xl">
                <p className="text-sm sm:text-base drop-shadow-xl line-clamp-2">
                  {currentMovie.description}
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 w-[400px]">
                <button
                  onClick={() => handleRouting(currentMovie)}
                  className="text-white px-4 py-3 text-sm lg:text-xl font-semibold flex items-center justify-center gap-3 bg-gray-400 bg-opacity-30 hover:bg-opacity-40 rounded-md transition-transform hover:scale-105 cursor-pointer w-[90%] text-center"
                >
                  <FaPlay size={16} />
                  Watch Now
                </button>

                <button
                  className="text-white px-4 py-4 text-sm lg:text-xl font-semibold flex items-center justify-center gap-3 bg-gray-400 bg-opacity-30 hover:bg-opacity-40 rounded-md transition-transform hover:scale-105 cursor-pointer"
                  title="Watchlist"
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>

            <BannerCards movies={movieData} />
          </>
        )
      )}
    </div>
  );
};

export default MovieBanner;
