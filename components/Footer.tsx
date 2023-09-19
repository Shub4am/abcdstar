import Link from 'next/link';
import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillApple, AiOutlineCheck } from 'react-icons/ai';
import { BiLogoPlayStore } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className="container flex flex-col h-fit w-[90%] ml-24 px-4 mt-2 mb-10">
      <div className=" flex flex-col sm:flex-row justify-center sm:justify-between items-center ">
        <div className="flex flex-col items-center justify-center sm:items-start pb-4 sm:pb-0">
          <p className="font-semibold capitalize pb-2 sm:pb-5">company</p>
          <ul className="flex flex-col text-gray-500 gap-2">
            <li>
              <Link href="/" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-4 sm:-mt-8 flex flex-col items-center justify-center sm:items-start pb-4 sm:pb-0">
          <p className="font-semibold pb-2 sm:pb-5">View Website in</p>
          <ul className="text-gray-500 ">
            <li className="flex gap-2 ">
              <AiOutlineCheck className="self-center " />
              <Link href="/" className="hover:text-white">
                English
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-4 sm:mt-0 flex flex-col items-center justify-center sm:items-start pb-4 sm:pb-0">
          <p className="font-semibold capitalize pb-2 sm:pb-5 ">need help?</p>
          <ul className="flex flex-col text-gray-500 gap-2 ">
            <li>
              <Link href="/" className="hover:text-white">
                Visit Help Center
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Share Feedback
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-4 sm:-mt-8 ">
          <p className="font-semibold pb-2 sm:pb-5">Connect with Us</p>
          <ul className="flex text-white gap-2 items-center justify-around ">
            <li>
              <Link href="/" className="hover:text-blue-600">
                <FiFacebook size={26} />
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-zinc-700">
                <FaXTwitter size={26} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex pt-10 justify-between">
        <div>
          <p>© 2023 ABCD. All Rights Reserved.</p>
          <ul className="flex text-gray-500 gap-x-4">
            <li>
              <Link href="/" className="hover:text-white">
                Terms Of use
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-10 items-center ">
          <BiLogoPlayStore size={30} className="cursor-pointer" />
          <AiFillApple size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
