import React from 'react';
import './NewsCard.css';

export default function NewsCard({ article }) {
  return (
    <div className="news-card">
      <img
        src={article.image_url || 'https://via.placeholder.com/200x150?text=No+Image'}
        alt="news"
        className="news-image"
      />

      <div className="news-content">
        <h3 className="news-title">{article.title}</h3>
        <p className="news-desc">{article.description || 'No description available.'}</p>
        <p className="news-source">
          <strong>Source:</strong> {article.source_id || 'Unknown'}
        </p>
        <a
          className="news-link"
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
