import React from 'react'
import { Header } from './Header'

export const HomePage = () => {
  return (
    <div>
      <Header />
      <p>Search for tweets from your favorite users or generate random tweets from one of the celebrities provided.</p>
      <div>
        <button>Search</button>
        <button>Random</button>
      </div>
    </div>
  )
}
