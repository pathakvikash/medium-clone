'use client';
import React, { useState } from 'react';
import LoginCard from '../Auth/SignIn';
import { Button } from '@mui/material';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const navText = authenticated
    ? ['Search', 'Write', 'Notifications', 'Account']
    : ['About', 'Membership', 'Write'];

  const handleLogin = () => {
    setAuthenticated(true);
    setShowLoginForm(false);
  };

  const handleLoginFormToggle = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className='topbar gap-2 flex items-center justify-between h-[76px] border-b border-lightgray fixed w-full'>
      {authenticated ? (
        <>
          <img
            className='w-14 h-14 object-contain m-2 p-2 cursor-pointer'
            src='https://www.svgrepo.com/show/354057/medium-icon.svg'
            alt='medium'
          />
          <div className='w-64 relative search'>
            <input
              type='text'
              placeholder='Search Medium'
              className='w-full py-2 pl-10 pr-10 rounded-full bg-gray-200 focus:outline-none focus:bg-white'
            />
            <SearchIcon className='absolute left-3 top-2 text-gray-600' />
            <button className='absolute right-0 top-0 h-full w-10 text-gray-600 hover:text-gray-800 flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 15l-5-5m0 0l-5 5m5-5V3'
                />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <Link href='/' className='flex items-center'>
          <img
            className='w-14 h-14 object-contain m-2 p-2 cursor-pointer'
            src='https://www.svgrepo.com/show/354057/medium-icon.svg'
            alt='medium'
          />
          <h1 className='text-2xl font-serif font-thin'>Medium</h1>
        </Link>
      )}

      <div className='flex items-center justify-between p-4'>
        <div className='sm:hidden gap-3 hidden md:flex mr-3'>
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
          card fkj
        </div>
      )}
    </div>
  );
}

export default Navbar;
