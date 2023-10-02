'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const AboutPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const paths = ['Start reading', 'Start write', 'Become a member'];

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='bg-[#242424] text-white p-8'>
      <h1 className='text-6xl font-medium m-9 mt-20'>
        Everyone has a story to tell.
      </h1>

      <div className={`transition-all duration-300 gap-[50px] flex flex-col`}>
        <p className='leading-9'>
          Medium is a home for human stories and ideas. Here, anyone can share
          insightful perspectives, useful knowledge, and life wisdom with the
          world—without building a mailing list or a following first. The
          internet is noisy and chaotic; Medium is quiet yet full of insight.
          It’s simple, beautiful, collaborative, and helps you find the right
          audience for whatever you have to say.
        </p>

        <p className=' leading-9'>
          We believe that what you read and write matters. Words can divide or
          empower us, inspire or discourage us. In a world where the most
          sensational and surface-level stories often win, we’re building a
          system that rewards depth, nuance, and time well spent. A space for
          thoughtful conversation more than drive-by takes, and substance over
          packaging.
        </p>
        <blockquote className='text-3xl italic mt-4'>
          Ultimately, our goal is to deepen our collective understanding of the
          world through the power of writing.
        </blockquote>

        <p className=' leading-9'>
          Over 100 million people connect and share their wisdom on Medium every
          month. Many are professional writers, but just as many
          aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur
          novelists, and anyone burning with a story they need to get out into
          the world. They write about what they’re working on, what’s keeping
          them up at night, what they’ve lived through, and what they’ve learned
          that the rest of us might want to know too.
        </p>
        <p className=' leading-9'>
          Instead of selling ads or selling your data, we’re supported by a
          growing community of Medium members who align with our mission. If
          you’re new here, start exploring. Dive deeper into whatever matters to
          you. Find a post that helps you learn something new, or reconsider
          something familiar—and then share your own story.
        </p>
      </div>

      <div className='flex flex-col mt-20 w-full'>
        {paths.map((item, index) => (
          <div
            key={index}
            className='flex flex-col hover:bg-white hover:text-black cursor-pointer'
          >
            <hr className='pt-4 ' />
            <Link
              className='text-6xl h-[200px] flex items-center justify-between font-serif font-thin'
              href={
                item === 'Start reading'
                  ? '/'
                  : item === 'Start write'
                  ? '/write'
                  : '/'
              }
              key={index}
              title={item}
            >
              {item}
              <div
                className={`about-page__collapsible-card cursor-pointer text-2xl mt-4 ${
                  isCollapsed ? 'rotate-0' : 'rotate-180'
                }`}
                onClick={handleCollapse}
              >
                &#9660;
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
