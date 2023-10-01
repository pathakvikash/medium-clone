'use client';
import { categories, trendingArticles } from '../constants/constant';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { BookmarkOutlined } from '@mui/icons-material';
import Link from 'next/link';

export const ArticleCard = ({ article, onBookmarkToggle }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden w-full'>
      <div className='flex flex-col sm:flex-row'>
        <div className='p-4 flex-1'>
          <div className='flex items-center text-gray-600 text-sm'>
            <img
              src={article.image}
              alt={article.author}
              className='w-6 h-6 object-cover rounded-full mr-2'
            />
            <p>{article.author}</p>
          </div>

          <div className='flex items-start max-h-[108px] flex-col justify-between'>
            <h3 className='text-xl font-semibold text-gray-800'>
              {article.title}
            </h3>
            <p className='text-gray-700 max-w-xs max-h-sm break-words mt-2 line-clamp-2'>
              {article.content}
            </p>
          </div>
          <div className='flex flex-col sm:flex-row justify-between items-center mt-4'>
            <div>
              <p className='text-gray-600 text-sm'>Date: {article.date}</p>
              <p className='text-gray-600 text-sm'>
                Time to Read: {article.readTime} min
              </p>
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
        <div className=''>
          <img
            src={article.image}
            alt={article.title}
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

function Hero() {
  return (
    <div>
      <header className='bg-yellow-500 py-8 flex items-center p-9 h-[550px]'>
        <div className='flex flex-col pt-9 '>
          <b>
            <p className='text-8xl font-medium pb-6 font-georgia font-gt-super font-cambria font-times-new-roman font-times font-serif'>
              Stay curious.
            </p>
          </b>

          <p className='text-2xl pb-5 break-words max-w-[400px]'>
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <button className='bg-black text-white py-2 px-9 text-md rounded-[99px] w-fit'>
            <Link href='/blogs'>Start Reading</Link>
          </button>
        </div>
      </header>
      <TrendingSection />
    </div>
  );
}
export function TrendingSection() {
  const [visibleArticles, setVisibleArticles] = useState(4);

  const handleLoadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 10);
  };

  return (
    <div className='bg-gray-100 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:-6 lg:px-8'>
        <div className='flex items-center '>
          <TrendingUpIcon className='mr-2' />
          <h2 className='font-bold font-serif font-arial'>Trending Medium</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {trendingArticles.slice(0, visibleArticles).map((article, index) => (
            <div
              key={article.id}
              className='relative flex flex-col p-4 rounded-lg '
            >
              {/* Numbering */}
              <span className='text-4xl text-black font-bold absolute top-2 right-[100%]'>
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div className='flex items-center mb-2'>
                <AccountCircleOutlinedIcon className='mr-2' />
                <span className='text-lg font-normal'>{article.author}</span>
              </div>
              <h3 className='text-lg mb-2 font-bold'>{article.title}</h3>
              <p className='text-gray-500 mb-2 text-sm'>
                {`${article.date} · ${article.readTime} min read`}
              </p>
            </div>
          ))}
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
