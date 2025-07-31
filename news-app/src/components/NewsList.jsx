import React from 'react';
import './NewsList.css';
import NewsCard from './NewsCard.jsx';

export default function NewsList({ articles }) {
  if (!articles.length) {
    return <p className="no-news">No news found. Try another search.</p>;
  }

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}
