import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchedTweetsList from './SearchedTweetsList';

export const SearchPage = () => {

  const [userInput, setUserInput] = useState("");
  const [searchedTweets, setSearchedTweets] = useState([]);
  const [showTweets, setShowTweets] = useState(false);


  function clearInput() {
    document.getElementById('input').innerHTML = "";
    document.getElementById('input').value = null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
    console.log(`UserInput: ${userInput}`)
    clearInput();
  }

  useEffect(() => {
    // Fetch tweets from the backend server
    fetchSearchedTweets();
    console.log(`searchedTweets: ${searchedTweets}`)
  }, []);

  const handleClick = async () => {
    await fetchSearchedTweets(userInput);
    toggleComponent();
  }

  const toggleComponent = () => {
    setShowTweets(true);

  }

  const fetchSearchedTweets = async (userInput) => {
    try {
      const response = await axios.get(`/api/search?search_input=${userInput}`)

      setSearchedTweets(response.data)

    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  return (
    <div className="m-20">
      <p className="my-5">
        Search for recent tweets of your favorite user.
      </p>
      <p>You can search by @username or keyword.
      </p>

      <form onSubmit={handleSubmit} className="m-20">
        <div className='flex justify-center items-center'>
          <input
            id="input"
            className="rounded p-2 text-black"
            type="text"
            defaultValue={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Search here..."
          />
          <button
            onClick={handleClick}
            type="submit"
            className="bg-lime-500 text-black w-max px-2 rounded ml-1"
          >Search
          </button>
        </div>
      </form>
      {showTweets &&
        < SearchedTweetsList
          searchedTweets={searchedTweets}
        />}
    </div>
  );
};