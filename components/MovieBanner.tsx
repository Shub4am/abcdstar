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
    <div className="relative h-screen select-none mb-5">
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
            <div className="absolute top-1/4 ml-12 sm:ml-32 ">
              <p className="h-full w-2/4 font-bold text-xl sm:text-3xl md:text-5xl drop-shadow-xl">
                {currentMovie.title}
              </p>
              <div className="flex gap-x-4 p-2">
                <p>{currentMovie.year}</p>•<p>{currentMovie.genre}</p>•
                <p>{currentMovie.duration}</p>
              </div>
              <p className="hidden lg:flex lg:w-[50%] drop-shadow-xl mt-3">
                {currentMovie.description}
              </p>
              <div className="flex flex-row items-center w-[70%] sm:w-[90%] lg:w-[50%] mt-5 gap-4">
                <button
                  onClick={() => handleRouting(currentMovie)}
                  className=" text-white px-3 py-3 text-sm lg:text-xl font-semibold flex flex-row items-center justify-center gap-3 bg-gray-400 bg-opacity-30 hover:bg-opacity-40 rounded-md transition hover:scale-105 cursor-pointer w-[60%]"
                >
                  <FaPlay size={16} />
                  Watch Now
                </button>

                <button
                  className=" text-white px-4 py-4 text-sm lg:text-xl font-semibold flex flex-row items-center gap-3 bg-gray-400 bg-opacity-30 hover:bg-opacity-40 rounded-md transition hover:scale-105 cursor-pointer "
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
