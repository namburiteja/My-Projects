import React from 'react';
import './SearchBar.css';

const countries = [
  { code: "in", name: "India" },
  { code: "us", name: "USA" },
  { code: "gb", name: "UK" },
  { code: "au", name: "Australia" },
  { code: "ca", name: "Canada" },
  { code: "de", name: "Germany" },
  { code: "jp", name: "Japan" },
  { code: "fr", name: "France" }
];


export default function SearchBar({ onSearch, setCountry }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    if (query !== '') {
      onSearch(query);
    }
  };

  return (
        <form className="search-form" onSubmit={handleSubmit}>
    <input type="text" name="search" placeholder="Search news..." />
    <button type="submit">🔍</button>
    <select onChange={(e) => setCountry(e.target.value)}>
        {countries.map((c) => (
        <option key={c.code} value={c.code}>{c.name}</option>
        ))}
    </select>
    </form>

  );
}
