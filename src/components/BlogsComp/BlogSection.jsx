'use client';
import React, { useState } from 'react';
import { trendingArticles } from '../../constants/constant';
import { ArticleCard } from '../../components/Hero';

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
    <div className='container p-6'>
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

export default BlogSection;
