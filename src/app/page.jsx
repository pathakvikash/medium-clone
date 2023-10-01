'use client';
import { useState } from 'react';
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
      <div className='xl:px-[18rem] sm:px-[1rem]'>
        <div className='sidebar flex flex-1'>
          <BlogSection />
          <div className=''>
            <CategorySection />
          </div>
        </div>
      </div>
    </>
  );
}

export function CategorySection() {
  return (
    <>
      <div className='flex flex-col justify-center'>
        <div className='w-full max-w-screen-lg mt-8'>
          <div className='bg-white rounded-lg gap-6 flex flex-col p-8'>
            <h2 className=' font-medium font-arial'>
              Discover more of what matters to you
            </h2>
            <div className='flex flex-wrap gap-3 '>
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
            <p className='mt-4'>
              <a
                className='text-[#2a7737] hover:underline'
                rel='noopener follow'
                href='/explore-topics?source=home'
              >
                See more topics
              </a>
            </p>
          </div>
        </div>
        <hr className='border-black mb-9' />
        <div className='xl:flex sm:block  md:flex mx-16 flex gap-1 flex-wrap'>
          {sideFooterOption.map((item, index) => (
            <p className='m-2' key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export const BlogSection = () => {
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
    <div className='container m-6  '>
      <h2 className='text-3xl font-semibold text-gray-800 mb-6'>
        Latest Articles
      </h2>

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
