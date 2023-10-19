'use client';
import { ChangeEvent, useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

export default function Search() {
  const [inputValue, setInputValue] = useState<string>('');
  const [clearIconVisible, setClearIconVisible] = useState(false);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setClearIconVisible(!!e.target.value);
  };
  const handleClearInput = () => {
    setInputValue('');
    setClearIconVisible(false);
  };

  return (
    <div className="relative h-fit w-full mt-8 flex justify-center pl-12 pb-10">
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
  );
}
