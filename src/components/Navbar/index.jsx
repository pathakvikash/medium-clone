import React from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';

function Navbar() {
  const navText = ['Our story', 'Membership', 'Write', 'Sign In'];
  return (
    <div className='topbar bg-white flex items-center justify-between h-16 border-b border-lightgray fixed w-full'>
      <Link href='/' className='flex items-center'>
        <img
          className=' w-14 h-14 object-contain m-2 p-2 cursor-pointer'
          src='https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png'
          alt='medium'
        />
        <h1>Medium</h1>
      </Link>

      <div className=' flex flex-grow-[0.3] items-center justify-evenly p-4 mx-4'>
        {navText.map((item, index) => (
          <p key={index} title='Home' placement='right-end'>
            {item}
          </p>
        ))}
        <div className='bg-black text-white font-bold flex items-center rounded-full p-2'>
          <Button color='inherit'>Getting Started</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
