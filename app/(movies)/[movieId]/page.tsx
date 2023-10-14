'use client';
import React, { useState, useEffect } from 'react';
import { useMoviesContext } from '@/providers/MoviesProvider';
import { Movie } from '@/types';

import { BiArrowBack } from 'react-icons/bi';
import { BsPlayBtn } from 'react-icons/bs';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';
import { useRoutes } from '@/hooks/useRoutes';

interface MovieIdPageProps {
  params: {
    movieId: number;
  };
}

const WatchMovie = ({ params }: MovieIdPageProps) => {
  const { movieData } = useMoviesContext();
  const [matchedMovie, setMatchedMovie] = useState<Movie | null>(null);
  const { handleBackBtn } = useRoutes();
  const movieIdToWatch = params.movieId;

  useEffect(() => {
    const matchId = movieData?.find((movie) => movie.id == movieIdToWatch);
    if (matchId) {
      setMatchedMovie(matchId);
    } else {
      setMatchedMovie(null);
    }
  }, [movieData, movieIdToWatch]);

  const handleContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      className="text-white bg-midnight h-screen w-screen flex flex-col items-center justify-center"
    >
      {matchedMovie && (
        <>
          <nav className="fixed top-0 w-full p-4 z-40 flex items-center gap-2 bg-midnight bg-opacity-40 drop-shadow-2xl shadow-white">
            <BiArrowBack
              size={30}
              onClick={handleBackBtn}
              className="w-10 text-white cursor-pointer transition ease-in"
            />
            <p className="font-semibold">
              {matchedMovie && matchedMovie.title}
            </p>
            <div className="fixed hidden sm:flex gap-x-8 items-center right-4 px-4">
              <div className="flex items-center gap-x-3 hover:scale-110 cursor-pointer">
                <BsPlayBtn size={22} />
                <p className="">Quality</p>
                <p className="text-gray-400">Full HD</p>
              </div>
              <div className="flex  items-center gap-x-3 hover:scale-110 cursor-pointer">
                <HiOutlineChatBubbleBottomCenterText size={22} />
                <p>Audio Language</p>
              </div>
            </div>
          </nav>

          <p>{matchedMovie && matchedMovie.title}</p>
          <video
            className=" h-screen w-full object-cover absolute"
            autoPlay
            loop
            controls
            poster={matchedMovie.thumbnail_url || undefined}
            src={matchedMovie.video_url || undefined}
          >
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </div>
  );
};

export default WatchMovie;
