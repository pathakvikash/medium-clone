'use client';
import React, { useState } from 'react';
import { trendingArticles, categories } from '../constants/constant';
import { useRouter, usePathname } from 'next/navigation';
import Hero from '../components/Hero';
import { ArticleCard } from '../components/Hero';
const sideFooterOption = [
  'Status',
  ' Blog',
  ' Writers',
  ' Careers',
  ' Privacy',
  ' Terms',
  ' About',
  ' Text',
  'to',
  'speech',
  'Teams',
];
export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {isHome && <Hero />}
      <div className='xl:px-[10rem] sm:py-[3rem]'>
        <div className='sidebar flex xl:flex-row flex-col-reverse sm:flex-col-reverse'>
          <BlogSection />

          <CategorySection />
        </div>
      </div>
    </>
  );
}

function CategorySection() {
  return (
    <>
      <div className='flex flex-col mx-3'>
        <div className='w-full max-w-screen-lg '>
          <div className='bg-white rounded-lg gap-6 flex flex-col p-8'>
            <div className='h-5 pr-32 flex-col justify-start items-start inline-flex'>
              <div className="text-neutral-800 text-base font-medium font-['Helvetica Neue'] leading-tight">
                Discover more of what matters to you
              </div>
            </div>
            <div className='flex flex-wrap gap-3 justify-between '>
              {categories.map((category, index) => (
                <div
                  key={index}
                  className='bg-gray-100 py-5 flex items-center justify-center w-min h-[38px] rounded-full px-6 cursor-pointer whitespace-nowrap min-h-min'
                >
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
            <div className='h-5 pr-72 left-0 top-[194px]  flex-col justify-start items-start inline-flex'>
              <div className="text-green-700 text-sm font-normal font-['Helvetica Neue'] leading-tight">
                See more topics
              </div>
            </div>
          </div>
        </div>
        <hr className='border-gray-200 mb-9' />
        <div className='xl:hidden md:hidden sm:hidden mx-16 flex gap-1 flex-wrap'>
          {sideFooterOption.map((item, index) => (
            <p
              className="m-2 text-neutral-500 text-sm font-normal font-['Helvetica Neue'] leading-tight"
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
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
    <div className='container'>
      <div className='flex flex-wrap gap-6'>
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
            onClick={() => setShowMore(showMore + 2)}
            className='bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300'
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
