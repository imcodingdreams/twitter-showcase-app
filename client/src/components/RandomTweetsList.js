import React, {useEffect, useState} from 'react'
import { TweetCard } from './TweetCard'


const RandomTweetsList = ({userTweets}) => {

  // const [randomTweet, setRandomTweet] = useState(null);

  // const getRandomTweet = () => {
  //   if (userTweets && userTweets.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * userTweets.length);
  //     const randomTweet = userTweets[randomIndex];
  //     setRandomTweet(randomTweet);
  //   }
  // };

  // useEffect(() => {
  //   getRandomTweet();
  // }, [userTweets]);

  return (
    <div>
      {userTweets?.map(tweet => (
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