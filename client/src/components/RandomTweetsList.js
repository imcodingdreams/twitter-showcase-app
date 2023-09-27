import React, {useEffect, useState} from 'react'
import { TweetCard } from './TweetCard'
import LoadingSpinner from './LoadingSpinner';


const RandomTweetsList = ({ userTweets, setIsLoading, isLoading}) => {

  const [randomTweet, setRandomTweet] = useState(null);

  const getRandomTweet = () => {
    if (userTweets && userTweets.length > 0) {
      const randomIndex = Math.floor(Math.random() * userTweets.length);
      const randomTweet = userTweets[randomIndex];
      setIsLoading(true)
      setRandomTweet(randomTweet);
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getRandomTweet();
  }, [userTweets]);

  return (
    <div>
      {isLoading &&
        <LoadingSpinner
          isLoading={isLoading}
        />
      }
      {randomTweet && (
        <TweetCard
          key={randomTweet.id}
          profileImg={randomTweet.author.profile_image_url}
          user={randomTweet.author.name}
          username={randomTweet.author.username}
          formatDate={randomTweet.created_at}
          text={randomTweet.text}
          retweets={randomTweet.public_metrics.retweet_count}
          favCount={randomTweet.public_metrics.like_count}
        />
      )}
    </div>
  );
};

export default RandomTweetsList;
