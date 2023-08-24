import React from 'react'
import { Header } from './Header'
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <p>Search for tweets from your favorite users or generate random tweets from one of the celebrities provided.</p>
      <div className="m-20">
        <button className="bg-lime-500 text-black w-max px-2 rounded"><Link to="/search">Search</Link></button>
        <button className="bg-lime-500 text-black w-max px-2 rounded ml-2"><Link to="/randomtweet">Random</Link></button>
      </div>
    </div>
  )
}