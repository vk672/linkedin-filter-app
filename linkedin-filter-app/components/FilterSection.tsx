import React, { useState, useEffect } from 'react';
import { fetchSuggestions, SuggestionItem } from '@/lib/api';

const FilterSection = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);

  useEffect(() => {
    const loadSuggestions = async () => {
      if (query.trim().length === 0) return;
      const results = await fetchSuggestions('companyType', query);
      setSuggestions(results);
    };

    const debounce = setTimeout(() => {
      loadSuggestions();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search company types..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <ul>
        {suggestions.map((item) => (
          <li key={item.id} className="mb-1">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;
