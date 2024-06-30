'use client'

import { useState } from 'react';
import Link from 'next/link';

const Form = () => {
  const [handle, setHandle] = useState('');
  const [keywords, setKeywords] = useState(''); // all required keywords that must be found in the tweet
  const [query, setQuery] = useState('');

  const buildQuery = () => {
    let queryParts = [];

    if (keywords) {
      queryParts.push(keywords.split(' ').map(word => encodeURIComponent(word)).join('%20'));
    }
    if (handle) {
      queryParts.push(`from%3A${handle}`);
    }

    if (queryParts.length > 0) {
      return `https://x.com/search?q=${queryParts.join('%20')}&src=typed_query&f=top`;
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(buildQuery());
  };

  return (
    <>
      <div className="mt-4">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="handle" className="block mb-2">
              Tweet by:
            </label>
            <input
              type="text"
              id="handle"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="border p-2 w-full"
              placeholder="jarrensj"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="keywords" className="block mb-2">
              All these words must be found in the tweet:
            </label>
            <input
              type="text"
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="border p-2 w-full"
              placeholder="hi"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white"
            > 
              Generate
            </button>
          </div>
        </form>
      </div>
      {query && (
        <div className="mt-4 break-words text-xs flex-wrap">
          <Link
            href={query}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            {query}
          </Link>
        </div>
      )}
    </>
  );
};

export default Form;
