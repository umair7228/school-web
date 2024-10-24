'use client'
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [hamBurger, setHamBurger] = useState(false);

  const toggleHamBurger = () => {

    setHamBurger(!hamBurger); 
  };

  return (
    <header>
      <nav className='absolute z-10 flex w-full items-center justify-between py-4 px-28 lg:px-28 xl:px-28 2xl:px-28 xs:px-6'>
        {/* Logo */}
        <Link href='/' className='text-2xl text-white/90 font-semibold'>
          UMAIR <span className='text-green-500'>.</span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleHamBurger}
          className='lg:hidden text-white focus:outline-none'
        >
          <Menu className='w-8 h-8' />
        </button>

        {/* Full Navbar Links (hidden on mobile, visible on larger screens) */}
        <ul className={`lg:flex gap-6 hidden`}>
          <li>
            <Link href='/' className='text-gray-300 hover:text-white/90 text-xl'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className='text-gray-300 hover:text-white/90 text-xl'>
              About
            </Link>
          </li>
          <li>
            <Link href='/gallery' className='text-gray-300 hover:text-white/90 text-xl'>
              Gallery
            </Link>
          </li>
          <li>
            <Link href='/contact' className='text-gray-300 hover:text-white/90 text-xl'>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hire Me Button for larger screens */}
        <Link
          href='https://www.linkedin.com/in/umairnawaz7228/'
          className='hireBtn text-xl px-4 py-2 hidden lg:block'
          target='_blank'
        >
          Hire Me
        </Link>

        {/* Mobile Menu (showing on mobile screens) */}
        <div
          className={`${
            hamBurger ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full backdrop-blur-[6px] text-center animate-topToBottom lg:hidden p-6 space-y-4 text-white flex flex-col gap-4
           `}
        >
          <ul className='space-y-10'>
            <li>
              <Link href='/' className='py-2 px-14 rounded-3xl shadow-lg shadow-zinc-300/40 border-2 border-zinc-400' onClick={toggleHamBurger}>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='py-2 px-14 rounded-3xl shadow-lg shadow-zinc-300/40 border-2 border-zinc-400' onClick={toggleHamBurger}>
                About
              </Link>
            </li>
            <li>
              <Link href='/gallery' className='py-2 px-14 rounded-3xl shadow-lg shadow-zinc-300/40 border-2 border-zinc-400' onClick={toggleHamBurger}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href='/contact' className='py-2 px-14 rounded-3xl shadow-lg shadow-zinc-300/40 border-2 border-zinc-400' onClick={toggleHamBurger}>
                Contact
              </Link>
            </li>
          </ul>
          {/* Hire Me Button for mobile */}
          <Link
            href='https://www.linkedin.com/in/umairnawaz7228/'
            className='hireBtn py-2 px-14'
            target='_blank'
            onClick={toggleHamBurger}
          >
            Hire Me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
