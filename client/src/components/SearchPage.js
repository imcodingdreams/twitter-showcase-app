import React, { useState } from 'react'
import TweetList from './SearchedTweetsList';

export const SearchPage = () => {

  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api?input=${input}`);
    const data = await response.json();
    setData(data);
  }

  return (
    <div className="m-20">
      <p className="my-5">
        Search for recent tweets of your favorite user.
      </p>
      <p>You can search by @username or keyword.
      </p>
      <form onSubmit={handleSubmit} className="m-20">
        <input
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder="Search here..." className="rounded p-2 text-black" type="text"
        />
        <button
          onClick={() => setShowTweets(true)}
          className="bg-lime-500 text-black w-max px-2 rounded ml-1" type="submit">Search
        </button>
      </form>
      {
        data && <div>{JSON.stringify(data)}</div>
      }
      < TweetList />

    </div>
  );
};