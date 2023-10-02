'use client';
import React, { useState } from 'react';
import LoginCard from '../Auth/SignIn';
import { Button } from '@mui/material';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import { MdNotificationAdd, MdAccountCircle } from 'react-icons/md';
import { TfiPencilAlt } from 'react-icons/tfi';
import { SiMedium } from 'react-icons/si';
import { GiExtractionOrb } from 'react-icons/gi';

function Navbar() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const navText = ['About', 'Membership', 'Write'];

  const handleLogin = () => {
    setAuthenticated(true);
    setShowLoginForm(false);
  };

  const handleLoginFormToggle = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div
      className={`topbar z-20 ${
        authenticated ? 'bg-white' : 'bg-yellow-400'
      } bg-white gap-2 flex items-center justify-between h-[76px] border border-black fixed w-full`}
    >
      {authenticated ? (
        <>
          <div className='flex items-center p-3 gap-3'>
            <SiMedium className='text-5xl ' />

            <div className='w-64 relative search'>
              <input
                type='text'
                placeholder='Search Medium'
                className='w-full py-2 pl-10 pr-10 rounded-full bg-gray-200 focus:outline-none focus:bg-white'
              />
              <SearchIcon className='absolute left-3 top-2 text-gray-600' />
              <button className='absolute right-0 top-0 h-full w-10 text-gray-600 hover:text-gray-800 flex items-center justify-center'>
                <GiExtractionOrb />
              </button>
            </div>
          </div>
        </>
      ) : (
        <Link href='/' className='flex gap-2 p-3 items-center'>
          <SiMedium className='text-5xl ' />
          <h1 className='text-2xl font-serif font-thin'>Medium</h1>
        </Link>
      )}

      <div className='flex items-center justify-between p-4'>
        <div className='sm:hidden gap-3 hidden md:flex mr-3'>
          {!authenticated ? (
            <div className='flex gap-3'>
              {navText.map((item, index) => (
                <Link
                  href={item.toLowerCase()}
                  key={index}
                  title='Home'
                  placement='right-end'
                >
                  {item}
                </Link>
              ))}
            </div>
          ) : (
            <div className='flex gap-6'>
              <div className='flex gap-3'>
                <TfiPencilAlt className='text-2xl' title='Write' />
                <p>Write</p>
              </div>
              <MdNotificationAdd className='text-2xl' title='Notifications' />
              <MdAccountCircle className='text-2xl' title='Profile' />
            </div>
          )}
        </div>

        {!authenticated ? (
          <div className='flex items-center gap-3'>
            <p
              className='hidden sm:flex md:flex cursor-pointer'
              onClick={handleLoginFormToggle}
            >
              Sign In
            </p>
            <div className='bg-black text-white font-bold flex items-center rounded-full px-3'>
              <Button color='inherit'>Get Started</Button>
            </div>
          </div>
        ) : null}
      </div>
      {showLoginForm && !authenticated && (
        <div className='fixed bg-white flex flex-col items-center justify-center '>
          <LoginCard onLogin={handleLogin} onClose={handleLoginFormToggle} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
