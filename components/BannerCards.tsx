"use client";
import React, { FC } from "react";
import Image from "next/image";

import { Movie } from "@/types";
import { useRoutes } from "@/hooks/useRoutes";

interface BannerCardsProps {
  movies: Movie[];
}

const BannerCards: FC<BannerCardsProps> = ({ movies }) => {
  const { handleRouting } = useRoutes();

  return (
    <div className="absolute right-0 md:right-10 bottom-[2%] mt-4">
      <div className="flex flex-row gap-2 cursor-pointer ">
        {movies.slice(0, 4).map((movie) => (
          <div
            key={movie.id}
            className="group bg-zinc-800 relative w-20 h-10 md:w-24 md:h-14 rounded-lg"
          >
            <Image
              onClick={() => handleRouting(movie)}
              unoptimized
              src={movie.thumbnail_url || ""}
              alt={movie.title || "Movie Title"}
              width={96}
              height={56}
              className="w-20 h-10 md:w-24 md:h-14 rounded-lg object-cover hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCards;
