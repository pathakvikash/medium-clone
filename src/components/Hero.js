'use client';
import { categories, trendingArticles } from '../constants/constant';
import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { BookmarkOutlined } from '@mui/icons-material';
import Link from 'next/link';

const ArticleCard = ({ article, onBookmarkToggle }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden flex max-w-[696px] max-h-[136px]'>
      <div className='p-4 flex-1'>
        <div className='flex items-center text-gray-600 text-sm'>
          <img
            src={article.image}
            alt={article.author}
            className='w-6 h-6 object-cover rounded-full mr-2'
          />
          <p>{article.author}</p>
        </div>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-semibold text-gray-800'>
            {article.title}
          </h3>
        </div>
        <p className='text-gray-700 mt-2'>{article.content}</p>
        <div className='flex justify-between items-center mt-4'>
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
      <div className='flex items-center justify-end'>
        <img
          src={article.image}
          alt={article.title}
          className='  object-cover rounded-lg'
        />
      </div>
    </div>
  );
};

function Hero() {
  return (
    <div>
      <header className='bg-yellow-500 py-8 flex items-center p-9 h-[455px]'>
        <div className='flex flex-col pt-9 '>
          <b>
            <p className='text-6xl pb-6 font-mono'>Stay curious.</p>
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
      <div className='flex p-6 flex-1'>
        <BlogSection />
        <hr className='' />
        <CategorySection />
      </div>
    </div>
  );
}

function TrendingSection() {
  const [visibleArticles, setVisibleArticles] = useState(3);

  const handleLoadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 10);
  };

  return (
    <div className='bg-gray-100 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:-6 lg:px-8'>
        <h2 className='text-2xl font-bold mb-4'>Trending Medium</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {trendingArticles.slice(0, visibleArticles).map((article, index) => (
            <div
              key={article.id}
              className='relative flex min-w-[408px] max-h-[101px]'
            >
              <span className='text-4xl text-black font-bold mr-2'>
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div className='bg rounded-md grid grid-cols-[auto,1fr]'>
                <div className='flex flex-col min-w-[100px]'>
                  <div className='author flex items-center mb-2'>
                    <AccountCircleOutlinedIcon className='mr-2' />
                    <span className='text-lg font-normal'>
                      {article.author}
                    </span>
                  </div>
                  <h3 className='text-lg mb-2 font-bold break-words '>
                    {article.title}
                  </h3>
                  <p className='text-gray-500 mb-2 text-sm'>
                    {`${article.date} · ${article.readTime} min read`}
                  </p>
                </div>
              </div>
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

function CategorySection() {
  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-screen-lg mt-8'>
        <div className='bg-white rounded-lg p-8'>
          <h2 className='text-2xl font-bold mb-4'>
            Discover more of what matters to you
          </h2>
          <div className='grid gap-4 grid-cols-3'>
            {categories.map((category, index) => (
              <div key={index} className='bg-white rounded p-4 cursor-pointer'>
                <a
                  className='text-black hover:underline'
                  rel='noopener follow'
                  href={category.link}
                >
                  {category.name}
                </a>
              </div>
            ))}
          </div>
          <p className='mt-4'>
            <a
              className='text-black hover:underline'
              rel='noopener follow'
              href='/explore-topics?source=home'
            >
              See more topics
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

const BlogSection = () => {
  const [articles, setArticles] = useState(trendingArticles);
  const [showMore, setShowMore] = useState(2);

  const handleBookmarkToggle = (articleId) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === articleId
          ? { ...article, bookmarked: !article.bookmarked }
          : article
      )
    );
  };

  return (
    <div className='container mx-auto py-12 '>
      <h2 className='text-3xl font-semibold text-gray-800 mb-6'>
        Latest Articles
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {trendingArticles.slice(0, showMore).map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onBookmarkToggle={handleBookmarkToggle}
          />
        ))}
      </div>

      {showMore < articles.length && (
        <div className='mt-6 text-center'>
          <button
            onClick={() => setShowMore(showMore + 2)} // Change the number to load more or fewer articles
            className='bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300'
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Hero;
