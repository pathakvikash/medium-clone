'use client';
import { categories, trendingArticles } from '../constants/constant';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import React, { useState, useEffect } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { BookmarkOutlined } from '@mui/icons-material';
import Link from 'next/link';

export const ArticleCard = ({ article, onBookmarkToggle }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden w-full'>
      <div className='flex'>
        <div className='p-4 w-[70%] flex-1 gap-3 flex flex-col justify-between'>
          <div className='flex items-center w-max text-gray-600 text-sm'>
            <img
              src={article.image}
              alt={article.author}
              className='w-6 h-6 object-cover rounded-full mr-2'
            />
            <p className=''>{article.author}</p>
          </div>

          <div className='flex items-start sm:max-h-[108px] flex-col justify-between'>
            <h3 className='text-xl flex w-max font-semibold text-gray-800'>
              {article.title}
            </h3>
            <p className='text-gray-700 max-w-xs sm:max-w-full break-words mt-2 line-clamp-2'>
              {article.content}
            </p>
          </div>
          <div className='flex justify-between items-start mt-4'>
            <div className='flex w-max gap-4'>
              <p className='text-gray-600 text-sm'>Date: {article.date}</p>
              <p className='text-gray-600 text-sm'>{article.readTime} read</p>
            </div>
            <button
              onClick={() => onBookmarkToggle(article.id)}
              className={`text-xl ${
                article.bookmarked ? 'text-blue-500' : 'text-gray-400'
              }`}
            >
              <BookmarkOutlined />
            </button>
          </div>
        </div>
        <div className='flex blog_post w-[30%]'>
          <img src={article.image} alt={article.title} className='mx-auto' />
        </div>
      </div>
    </div>
  );
};

function Hero() {
  return (
    <div>
      <header className='bg-yellow-400 hero  w-[100%] justify-center p-[3rem] items-center flex h-[550px]'>
        <div className='hero-content w-[80%] mx-[2rem]  flex justify-between'>
          <div className='flex flex-col pt-9'>
            <b>
              <p className='text-[85px] leading-[1] font-[400] pb-6 font-georgia font-gt-super font-cambria font-times-new-roman font-times font-serif'>
                Stay curious.
              </p>
            </b>

            <p className='text-[24px] font-[400] leading-[1] pb-5 break-words max-w-[400px]'>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <button className='bg-black text-white font-[400] py-2 px-9 text-md rounded-[99px] w-fit'>
              <Link href='/blogs'>Start Reading</Link>
            </button>
          </div>
          <div className='pattern justify-center flex items-center'>
            <img
              src='https://www.transparentpng.com/thumb/pattern/ISU3o3-artistic-psychedelic-png-free-image-pixabay.png'
              alt='pattern'
            />
          </div>
        </div>
      </header>
      <div className=''>
        <TrendingSection />
      </div>
    </div>
  );
}
export function TrendingSection() {
  const [visibleArticles, setVisibleArticles] = useState(6);

  const handleLoadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 3);
  };

  const renderCardLayout = (article, index) => {
    return (
      <div
        key={article.id}
        className='relative flex-auto flex gap-3 p-4 rounded-lg'
      >
        <span className='text-3xl opacity-[0.3] font-bold text-gray-500'>
          {(index + 1).toString().padStart(2, '0')}
        </span>
        <div className='flex flex-col'>
          <div className='flex items-center mb-2'>
            <AccountCircleOutlinedIcon className='mr-2' />
            <span className='text-lg font-normal'>{article.author}</span>
          </div>
          <h3 className='text-lg mb-2 font-bold'>{article.title}</h3>
          <p className='text-gray-500 mb-2 text-sm'>{`${article.date} · ${article.readTime} read`}</p>
        </div>
      </div>
    );
  };

  const cardLayouts = trendingArticles
    .slice(0, visibleArticles)
    .map(renderCardLayout);

  return (
    <div className='bg-gray-100 py-8 '>
      <div className='max-w-7xl mx-auto px-4 sm:-6 lg:px-8'>
        <div className='flex items-center'>
          <TrendingUpIcon className='mr-2' />
          <h2 className='font-[400] text-[16px] font-serif font-arial'>
            Trending Medium
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {cardLayouts}
        </div>
        {visibleArticles < trendingArticles.length && (
          <div className='flex justify-center mt-4'>
            <button
              className='bg-black text-white py-2 px-4 rounded-md'
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
