// import React from 'react'
// import { useEffect, useState } from 'react'
// import { TweetCard } from './TweetCard'
// import axios from 'axios'



// export const RandomTweetPage = () => {

//   // const [randomTweet, setRandomTweet] = useState([]);






//   // useEffect(() => {
//   //   axios.get('/api/randomtweet')
//   //     .then(response => {
//   //       const data = response.data.statuses;

//   //       setRandomTweet(data);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching tweets:', error);
//   //     });
//   // }, []);

//   return (
//     <div className="m-20">
//       <p className="my-5">This is the the Most Influential People on Twitter!</p>
//       <p>Click the botton to get a random tweet from one of them.</p>
//       <div className="flex items-center p-20 justify-center">
//         <div className="p-10">
//           <img src='' alt='IMG' />
//           <p>Barack Obama</p>
//         </div>
//         <div className="p-10">
//           <img src='' alt='IMG' />
//           <p>Elon Musk</p>
//         </div>
//         <div className="p-10"> 
//           <img src='' alt='IMG' />
//           <p>Justin Bieber</p>
//         </div>
//         <div className="p-10">
//           <img src='' alt='IMG' />
//           <p>Katy Perry</p>
//         </div>
//         <div className="p-10">
//           <img src='' alt='IMG' />
//           <p>Rihanna</p>
//         </div>
//       </div>
//       <button className="bg-lime-500 text-black mb-10 w-max px-2 rounded">Random Tweet</button>
//       <TweetCard />
//     </div>
//   )
// }




//-------------------------------------------

import React from 'react'
// import { useEffect, useState } from 'react'
import axios from 'axios'
import BarackObama from '../img/BarackObama.jpeg'
import ElonMusk from '../img/ElonMusk.jpeg'
import JustinBieber from '../img/JustinBieber.jpeg'
import KatyPerry from '../img/KatyPerry.jpeg'
import Rihanna from '../img/Rihanna.jpeg'
// import { TweetCard } from './TweetCard';


export const RandomTweetPage = (e) => {
  function generateRandomTweet() {
    const userId = e.currentTarget.id;
    axios.get('/api/randomtweet?user_id=' + userId)
    console.log(`UserID: ${userId}`)
  }


  // const [influentPplTweets, setInfluentialPplTweets] = useState([]);
  // const [tweetInfo, setTweetInfo] = useSatate ([]);
  // const [userInfo, setUserInfo] = useSatate([]);
  // const [randomTweet, setRandomTweet] = useState([]);


  // useEffect(() => {
  //   // Fetch tweets from the backend server
  //   fetchInfluentialPplTweets();
  // }, []);


  // const fetchInfluentialPplTweets = async () => {
  //   try {
  //     const response = await axios.get('/api/randomtweet');
  //     console.log(`Response: ${response}`)

  //     setTweetInfo(response.data.data);
  //     setUserInfo(response.data.includes.user)
  //     // console.log(`Tweets: ${tweets}`);

  //   } catch (error) {
  //     console.error('Error fetching tweets:', error);
  //   }
  // };

  return (
    <div className="m-20">
      <p className="m-5">This is the Most Influential People on Twitter!</p>
      <p>Click a picture to get a random tweet from one of them.</p>
      <div className="items-center justify-center space-between ">
        <div className="flex items-center justify-center space-between pt-20">
          <img title="Barack Obama" className="rounded-full border-2 border-lime-500 h-40 cursor-pointer m-2 transition duration-300 ease-in-out hover:scale-110" onClick={generateRandomTweet} id="813286" src={BarackObama} alt="Barack Obama" />
          <img title="Elon Musk" className="rounded-full border-2 border-lime-500 h-40 cursor-pointer m-2 transition duration-300 ease-in-out hover:scale-110" onClick={generateRandomTweet} id="44196397" src={ElonMusk} alt="Elon Musk" />
          <img title="Justin Bieber" className="rounded-full border-2 border-lime-500 h-40 cursor-pointer m-2 transition duration-300 ease-in-out hover:scale-110" onClick={generateRandomTweet} id="27260086" src={JustinBieber} alt="Justin Bieber" />
          <img title="Katy Perry" className="rounded-full border-2 border-lime-500 h-40 cursor-pointer m-2 transition duration-300 ease-in-out hover:scale-110" onClick={generateRandomTweet} id="21447363" src={KatyPerry} alt="Katy Perry" />
          <img title="Rihanna" className="rounded-full border-2 border-lime-500 h-40 cursor-pointer m-2 transition duration-300 ease-in-out hover:scale-110" onClick={generateRandomTweet} id="79293791" src={Rihanna} alt="Rihanna" />
        </div>
        {/* <div className="flex justify-center space-between ">
          <p>Barack Obama</p>
          <p>Elon Musk</p>
          <p>Justin Bieber</p>
          <p>Katy Perry</p>
          <p>Rihanna</p>
        </div> */}
      {/* <div className="flex items-center justify-center space-between p-20">
        <div className="p-3">
          <img className="rounded-full border-2 border-lime-500 w-50 mb-4 cursor-pointer" onClick={generateRandomTweet} id="813286" src={BarackObama} alt="Barack Obama" />
          <p>Barack Obama</p>
        </div>
        <div className="p-3">
          <img className="rounded-full border-2 border-lime-500 w-50 mb-4 cursor-pointer" onClick={generateRandomTweet} id="44196397" src={ElonMusk} alt="Elon Musk" />
          <p>Elon Musk</p>
        </div>
        <div className="p-3">
          <img className="rounded-full border-2 border-lime-500 w-50 mb-4 cursor-pointer" onClick={generateRandomTweet} id="27260086" src={JustinBieber} alt="Justin Bieber" />
          <p>Justin Bieber</p>
        </div>
        <div className="p-3">
          <img className="rounded-full border-2 border-lime-500 w-50 mb-4 cursor-pointer" onClick={generateRandomTweet} id="21447363" src={KatyPerry} alt="Katy Perry" />
          <p>Katy Perry</p>
        </div>
        <div className="p-3">
          <img className="rounded-full border-2 border-lime-500 w-50 mb-4 cursor-pointer" onClick={generateRandomTweet} id="79293791" src={Rihanna} alt="Rihanna" />
          <p>Rihanna</p>
        </div>
      </div> */}
      {/* <button className="bg-lime-500 text-black mb-10 w-max px-2 rounded">Random Tweet</button> */}
      {/* {influentPplTweets.map(tweet => (
        <TweetCard
          key={tweet.id}
          profileImg={tweet.user.profile_image_url}
          user={tweet.user.name}
          username={tweet.user.screen_name}
          formatDate={tweet.created_at}
          text={tweet.full_text}
          retweets={tweet.retweet_count}
          favCount={tweet.favorite_count}
        />
      ))} */}
      </div>
    </div>
  );
};

export default RandomTweetPage;











