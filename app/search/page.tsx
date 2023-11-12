'use client';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { useMovieData } from '@/hooks/useMovieData';
import { useRoutes } from '@/hooks/useRoutes';
import Cards from '@/components/Cards';

import { BiErrorCircle, BiSearch } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

export default function Search() {
  const { movieData } = useMovieData();
  const [inputValue, setInputValue] = useState<string>('');
  const [clearIconVisible, setClearIconVisible] = useState(false);

  const { handleRouting } = useRoutes();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setClearIconVisible(!!e.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
    setClearIconVisible(false);
  };

  const filteredSearchResults = movieData.filter((mov) =>
    mov.title?.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="h-fit w-full mb-10">
      <div className="relative mt-8 flex justify-center pl-12 pb-10">
        <form className="w-[90%] h-[70px] flex items-center justify-start px-4 bg-[#252833] outline-none placeholder-gray-500 capitalize rounded-md text-gray-400 focus-within:text-white">
          <BiSearch size={28} className="absolute inset-y-0 top-6 " />
          <input
            type="text"
            placeholder="Movies, shows and more"
            className=" w-full h-full px-10 bg-[#252833] outline-none placeholder-gray-400 focus:text-white font-medium text-xl rounded-md"
            value={inputValue}
            onChange={handleInputChange}
          />
          {clearIconVisible && (
            <RxCross2
              size={28}
              className="cursor-pointer"
              onClick={handleClearInput}
            />
          )}
        </form>
      </div>
      <div className="flex flex-wrap pl-28 gap-4">
        {inputValue && filteredSearchResults.length > 0 ? (
          filteredSearchResults.map((movie) => (
            <div
              key={movie.id}
              className="group rounded-lg cursor-pointer hover:scale-110 hover:-translate-y-6 z-20 bg-hoverBg bg-opacity-0 hover:bg-opacity-100"
            >
              <Image
                onClick={() => handleRouting(movie)}
                unoptimized
                src={movie.thumbnail_url || ''}
                alt={movie.title || 'Movie Title'}
                width="0"
                height="0"
                className="w-64 h-40 rounded-lg cursor-pointer object-cover"
              />
              <div className=" w-60 pl-4 pt-2 pb-2">
                <p className="font-semibold pb-2">{movie.title}</p>
                <p className="text-slate-400">{movie.year}</p>
                <p className="opacity-0 group-hover:opacity-100 text-clip break-normal line-clamp-3 pt-1">
                  {movie.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <>
            {inputValue && (
              <div className=" flex flex-col w-full items-center justify-center py-20">
                <BiErrorCircle size={60} />
                <p className="text-white font-semibold text-center">
                  Could not find &quot;{inputValue}&quot;
                </p>

                <p className="text-slate-400 font-semibold">
                  Try searching for something else or try with a different
                  spelling
                </p>
              </div>
            )}
          </>
        )}
      </div>
      {!inputValue && <Cards title="Popular Searches" />}
    </div>
  );
}
