import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TweetCard } from './TweetCard';


const SearchedTweetsList = () => {

  const [searchedTweets, setSearchedTweets] = useState([]);
  // const [tweetInfo, setTweetInfo] = useSatate ([]);
  // const [userInfo, setUserInfo] = useSatate([]);

  useEffect(() => {
    // Fetch tweets from the backend server
    fetchSearchedTweets();
    // console.log(`searchedTweets: ${searchedTweets}`)
  }, []);


  const fetchSearchedTweets = async () => {
    try {
      const response = await axios.get('/api/search');

      setSearchedTweets(response.data.data)
      console.log(`ST: ${searchedTweets}`);

    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  return (
    <div>
      {searchedTweets?.map(tweet => (
        <TweetCard
          key={tweet.id}
          // profileImg={tweet.user.profile_image_url}
          // user={tweet.user.name}
          // username={tweet.user.screen_name}
          // formatDate={tweet.created_at}
          // text={tweet.full_text}
          // retweets={tweet.retweet_count}
          // favCount={tweet.favorite_count}


          // profileImg={tweet.users.profile_image_url}
          // user={tweet.users.name}
          // username={tweet.username}
          formatDate={tweet.created_at}
          text={tweet.text}
          retweets={tweet.public_metrics.retweet_count}
          favCount={tweet.public_metrics.like_count}
        />
      ))}
    </div>
  );
};

export default SearchedTweetsList;