import React from 'react'
import { Header } from './Header'
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <p>Search for tweets from your favorite users or generate random tweets from one of the celebrities provided.</p>
      <div>
        <button><Link to="/search">Search</Link></button>
        <button><Link to="/randomtweet">Random</Link></button>
      </div>
    </div>
  )
}
