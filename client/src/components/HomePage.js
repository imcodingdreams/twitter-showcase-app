import React from 'react'
import { Header } from './Header'
import { Link } from 'react-router-dom';


export const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <p>Search for tweets from your favorite users or generate random tweets from one of the celebrities provided.</p> */}
      <p className='m-20'>
        Welcome to 'Xplore Twitter' - where the Twitterverse meets your curiosity! <br /> Ever wondered what your favorite Twitter celebs are tweeting lately? Simply type in their username, and we'll serve up their latest tweets, hot off the Twitter presses! <br /> But wait, there's more! Feeling lucky? Give our 'Random Tweet Roulette' a spin, and you might discover a hidden gem from the Twittersphere you never knew you needed. Explore, laugh, and be inspired, all in one click!
      </p>
      <div className="m-20">
        <button className="bg-lime-500 text-black w-max px-2 rounded"><Link to="/search">Search</Link></button>
        <button className="bg-lime-500 text-black w-max px-2 rounded ml-2"><Link to="/randomtweet">Random</Link></button>
      </div>
    </div>
  )
}