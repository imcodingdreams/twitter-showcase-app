import React from 'react'
import { TweetCard } from './TweetCard'


const RandomTweetsList = ({randomTweets}) => {

  return (
    <div>
      {randomTweets?.map(tweet => (
        <TweetCard
          key={tweet.id}
          profileImg={tweet.author.profile_image_url}
          user={tweet.author.name}
          username={tweet.author.username}
          formatDate={tweet.created_at}
          text={tweet.text}
          retweets={tweet.public_metrics.retweet_count}
          favCount={tweet.public_metrics.like_count}
        />
      ))}
    </div>
  );
};

export default RandomTweetsList;