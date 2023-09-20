import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RandomTweetsList from './RandomTweetsList'
import BarackObama from '../img/BarackObama.jpeg'
import ElonMusk from '../img/ElonMusk.jpeg'
import JustinBieber from '../img/JustinBieber.jpeg'
import KatyPerry from '../img/KatyPerry.jpeg'
import Rihanna from '../img/Rihanna.jpeg'

export const RandomTweetPage = () => {

  const [userId, setUserId] = useState("");
  const [randomTweet, setRandomTweet] = useState([]);
  const [userTweets, setUserTweets] = useState([]);
  const [showRandomTweet, setShowRandomTweet] = useState(false);

  useEffect(() => {
    fetchUserTweets();
  }, []);


  const handleClick = async (e) => {
    const clickedUserId = e.target.id;
    setUserId(clickedUserId)
    await fetchUserTweets(clickedUserId);
    console.log(`UserId: ${userId}`)
    toggleComponent();
  }

  const toggleComponent = () => {
    setShowRandomTweet(true);
  }

  const fetchUserTweets = async (userId) => {
    try {
      const response = await axios.get(`/api/randomtweet?user_id=${userId}`)

      setUserTweets(response.data)
      setRandomTweet(randomTweet)
      
    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  return (
    <div className="m-20 mb-20">
      <p className="m-5">This is the Most Influential People on Twitter!</p>
      <p>Click a picture to get a random tweet from one of them.</p>
      <div className="items-center justify-center space-between ">
        <div className="flex items-center mb-20 justify-center space-between pt-20">
          <img
            title="Barack Obama"
            className="rounded-full border-2 border-lime-500 h-40 cursor-pointer m-2 transition duration-300 ease-in-out hover:scale-110"
            onClick={handleClick}
            id="813286"
            src={BarackObama}
            alt="Barack Obama" />
          <img
            title="Elon Musk"
            className="rounded-full border-2 border-lime-500 h-40 cursor-pointer m-2 transition duration-300 ease-in-out hover:scale-110"
            onClick={handleClick}
            id="44196397"
            src={ElonMusk}
            alt="Elon Musk" />
          <img
            title="Justin Bieber"
            className="rounded-full border-2 border-lime-500 h-40 cursor-pointer m-2 transition duration-300 ease-in-out hover:scale-110"
            onClick={handleClick}
            id="27260086"
            src={JustinBieber}
            alt="Justin Bieber" />
          <img
            title="Katy Perry"
            className="rounded-full border-2 border-lime-500 h-40 cursor-pointer m-2 transition duration-300 ease-in-out hover:scale-110"
            onClick={handleClick}
            id="21447363"
            src={KatyPerry}
            alt="Katy Perry" />
          <img
            title="Rihanna"
            className="rounded-full border-2 border-lime-500 h-40 cursor-pointer m-2 transition duration-300 ease-in-out hover:scale-110"
            onClick={handleClick}
            id="79293791"
            src={Rihanna}
            alt="Rihanna" />
        </div>
        {showRandomTweet &&
          < RandomTweetsList
            userTweets={userTweets}
          />}
      </div>
    </div>
  );
};
