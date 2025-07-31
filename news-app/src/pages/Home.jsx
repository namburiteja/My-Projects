import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import CategoryFilter from '../components/CategoryFilter.jsx';
import NewsList from '../components/NewsList.jsx';
import './Home.css';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('in');
  const [category, setCategory] = useState('');

  const fetchNews = async () => {
    try {
      let url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${country}&language=en`;

      if (category) {
        url += `&category=${category}`;
      }

      if (query) {
        url += `&q=${query}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (data.results) {
        setArticles(data.results);
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setArticles([]);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [country, category, query]); // Added query here too

  const handleSearch = (q) => {
    setQuery(q);
  };

  // 🎯 From CategoryFilter
  const handleCategoryChange = (c) => {
    setCategory(c);
  };

  return (
    <div className="home-container">
    <SearchBar onSearch={handleSearch} setCountry={setCountry} />
    <CategoryFilter onCategoryChange={handleCategoryChange} />
    <NewsList articles={articles} />
  </div>
  );
}
