import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';

const loginOptions = [
  { icon: <FcGoogle className='text-2xl' />, text: 'Sign in with Google' },
  { icon: <SiGmail className='text-2xl' />, text: 'Sign in with Gmail' },
  { icon: <AiFillApple className='text-2xl' />, text: 'Sign in with Apple' },
  {
    icon: <AiOutlineTwitter className='text-2xl' />,
    text: 'Sign in with Twitter',
  },
  { icon: <BsFacebook className='text-2xl' />, text: 'Sign in with Facebook' },
];

function LoginCard({ onLogin, onClose }) {
  return (
    <div className=' bg-white fixed flex inset-0 items-center justify-center'>
      <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 gap-2 '>
        <div className='text-center relative'>
          <h2 className='text-2xl text-cyan-900 font-bold'>Welcome back</h2>
          <span
            className='cursor-pointer absolute top-[-10px] right-3'
            onClick={onClose}
          >
            &#x2715;
          </span>
        </div>
        <div className='rounded-xl bg-white shadow-xl flex flex-col p-6 sm:p-16'>
          <div className='flex flex-col gap-3'>
            {loginOptions.map((option, index) => (
              <button
                key={index}
                onClick={onLogin}
                className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'
              >
                <div className='relative flex items-center space-x-4 justify-center'>
                  {option.icon}
                  <span className='block font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
            <div className='text-center py-9 text-gray-600'>
              No account?{' '}
              <Link
                onClick={onClose}
                href={'/signup'}
                className='text-green-500 font-bold'
              >
                {' '}
                Create one
              </Link>
            </div>
            <div className='text-center  text-gray-600'>
              Forgot email or trouble signing in?{' '}
              <a className=' underline'> Get help. </a>
            </div>
          </div>

          <div className='mt-8 text-gray-600'>
            <p className='text-xs text-center'>
              Click “Sign In” to agree to Medium’s{' '}
              <a href='#' className='underline'>
                Terms of Service
              </a>{' '}
              acknowledge that Medium’s{' '}
              <a href='#' className='underline'>
                Privacy Policy
              </a>{' '}
              applies to you. .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
