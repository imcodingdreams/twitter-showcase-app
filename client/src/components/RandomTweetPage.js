import React from 'react'
import { TweetCard } from './TweetCard'

export const RandomTweetPage = () => {
  return (
    <div>
      <p>Get a random tweet from one of this celebrities</p>
      <div>
        <img src='' alt='IMG' />
        <img src='' alt='IMG' />
        <img src='' alt='IMG' />
        <img src='' alt='IMG' />
        <img src='' alt='IMG' />
      </div>
      <button>Random Tweet</button>
      <TweetCard />
    </div>
  )
}
