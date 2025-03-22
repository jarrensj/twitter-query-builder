'use client'

import { useState } from 'react';
import Link from 'next/link';

const Form2 = () => {
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [query, setQuery] = useState('');
  const [bothDirections, setBothDirections] = useState(false);

  const buildQuery = () => {
    if (user1 && user2) {
      const query1 = `https://x.com/search?q=(from%3A${encodeURIComponent(user1)})%20(to%3A${encodeURIComponent(user2)})&src=typed_query`;
      if (bothDirections) {
        const query2 = `https://x.com/search?q=(from%3A${encodeURIComponent(user2)})%20(to%3A${encodeURIComponent(user1)})&src=typed_query`;
        return `${query1} OR ${query2}`;
      }
      return query1;
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
        <h2 className="text-lg font-bold mb-2">
            Search for tweets between two users
        </h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="user1" className="block mb-2">
              From User:
            </label>
            <input
              type="text"
              id="user1"
              value={user1}
              onChange={(e) => setUser1(e.target.value)}
              className="border p-2 w-full"
              placeholder="jarrensj"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user2" className="block mb-2">
              To User:
            </label>
            <input
              type="text"
              id="user2"
              value={user2}
              onChange={(e) => setUser2(e.target.value)}
              className="border p-2 w-full"
              placeholder="omakasemoney"
            />
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="bothDirections"
              checked={bothDirections}
              onChange={(e) => setBothDirections(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="bothDirections">
              Create link for both directions
            </label>
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
          {bothDirections ? (
            <>
              <Link
                href={`https://x.com/search?q=(from%3A${encodeURIComponent(user1)})%20(to%3A${encodeURIComponent(user2)})&src=typed_query`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                {`search for tweets from ${user1} to ${user2}`}
              </Link>
              <br />
              <Link
                href={`https://x.com/search?q=(from%3A${encodeURIComponent(user2)})%20(to%3A${encodeURIComponent(user1)})&src=typed_query`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                {`search for tweets from ${user2} to ${user1}`}
              </Link>
            </>
          ) : (
            <Link
              href={query}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              {query}
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default Form2;
