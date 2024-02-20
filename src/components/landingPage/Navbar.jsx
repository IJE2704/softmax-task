"use client"
import Image from 'next/image';
import { useState } from 'react';
import softmaxLogo from '@/assets/softmaxLogo.png';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:w-[1100px] mx-auto p-4 flex justify-between items-center">
      {/* Logo */}
      <div className=" flex-1 lg:flex-none flex items-center">
        <a href="" className='text-4xl font-bold text-[#20B486]'>
          <Image
            className='hover:scale-110'
            src={softmaxLogo}
            width={50}
            height={50}
            alt='logo'
          ></Image>
        </a>
      </div>

      {/* Navbar Links (hidden on mobile) */}
      <div className="hidden md:flex">
        <a href="#" className="mx-4 hover:text-[#20B486]">
          Home
        </a>
        <a href="#" className="mx-4 hover:text-[#20B486]">
          About
        </a>
        <a href="#" className="mx-4 hover:text-[#20B486]">
          Services
        </a>
        <a href="#" className="mx-4 hover:text-[#20B486]">
          Contact
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex md:hidden justify-end relative">
        <button onClick={toggleNavbar} className="">
          {isOpen ? ( // If menu is open, show close button
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : ( // If menu is closed, show menu button
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
        <div className='absolute md:hidden bottom-[-170px]'>
        {isOpen && (
          <div className="md:hidden w-full bg-[#20B486]">
            <a href="#" className="block py-2 px-4">
              Home
            </a>
            <a href="#" className="block py-2 px-4">
              About
            </a>
            <a href="#" className="block py-2 px-4">
              Services
            </a>
            <a href="#" className="block py-2 px-4">
              Contact
            </a>
          </div>
        )}
      </div>
      </div>

      {/* Responsive Navbar Menu (shown on mobile) */}
      
      <div className='hidden md:flex justify-center items-center '>
        <Link href='/check'><button className='px-[24px] py-[10px] rounded hover:font-bold'>Log in</button></Link>
        <Link href='/registration'><button className='px-[24px] py-[10px] bg-[#20B486] hover:bg-[#16674d] rounded text-white'>Register</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
