import React, { useState } from 'react'
import axios from 'axios'
import SearchedTweetsList from './SearchedTweetsList';
import LoadingSpinner from './LoadingSpinner';

export const SearchPage = () => {

  const [userInput, setUserInput] = useState("");
  const [searchedTweets, setSearchedTweets] = useState([]);
  const [showTweets, setShowTweets] = useState(false);
  const [selectedOption, setSelectedOption] = useState('keyword');
  const [isLoading, setIsLoading] = useState(false);

  //If the user is searching by @username
  //once it press search, search for that user
  //if the user exists, get the autonr Id
  //Store the userId and send it to the other endpoint
  //Make a request to the api using the endpoint to retrieve the timeline of that user

  //It means that I'll have to make two API requests.
  //One to grab the authorID
  //The other one to get the timeline of that user 

  function handleRadioChange(e) {
    setSelectedOption(e.target.value);
    // const inputColor = document.getElementsByName('radio')
  }


  function clearInput() {
    document.getElementById('input').innerHTML = "";
    document.getElementById('input').value = null;
    setUserInput('undefined')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`UserInput: ${userInput}`);
    clearInput();
  }

  const handleClick = async () => {
    setIsLoading(true)
    await fetchSearchedTweets(userInput);
    setIsLoading(false)
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

        {/* <div className=''> */}
        <div class="flex items-center justify-center mb-4">
          <input
            id="keyword"
            type="radio"
            value="keyword"
            checked={selectedOption === 'keyword'}
            onChange={handleRadioChange}
            class="w-4 h-4 checked:active:bg-lime-500"
          />
          <label
            for="keyword"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keyword
          </label>
        </div>
        <div class="flex items-center justify-center">
          <input
            id="username"
            type="radio"
            value="username"
            checked={selectedOption === 'username'}
            onChange={handleRadioChange}
            class="w-4 h-4 checked:active:bg-lime-500"
          />
          <label
            for="Username"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">@username
          </label>
        </div>
        {/* </div> */}
        <input
          id="input"
          className="rounded p-2 text-black mt-20"
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
      </form>
      {isLoading &&
        <LoadingSpinner
          isLoading={isLoading}
        />
      }
      {showTweets &&
        < SearchedTweetsList
          searchedTweets={searchedTweets}
        />}
    </div>
  );
};