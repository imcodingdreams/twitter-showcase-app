// import React from 'react'
// import { useState, useEffect } from 'react';
// import axios from "axios";
// import dayjs from "dayjs";
// // import { HiOutlineArrowsUpDown } from "react-icons/hi2"
// // import { AiOutlineHeart } from "react-icons/ai"

// export const TweetCard = () => {

//   const [id, setId] = useState("Unknown");
//   const [profileImg, setProfileImg] = useState("Unknown");
//   const [name, setName] = useState("Unknown");
//   const [username, setUsername] = useState("Unknown");
//   const [date, setDate] = useState("Unknown");
//   const [formatDate, setFormatDate] = useState(date);
//   const [text, setText] = useState("Unknown");
//   const [retweets, setRetweets] = useState("Unknown");
//   const [favCount, setFavCount] = useState("Unknown");
//   // const [tweets, setTweets] = useState([]);

//   //update `tweets to be the tweets from your sever
//   useEffect(() => {
//     // make an http request to our server for the tweets
//     axios.get('/api/tweets')
//       .then(response => {

//         const formattedDate = dayjs().format("MM/DD/YY");
//         const data = response.data.statuses;

//         setId(data[0].id);
//         setProfileImg(data[0].user.profile_image_url);
//         setName(data[0].user.name);
//         setUsername(data[0].user.screen_name);
//         setDate(data[0].created_at);
//         setFormatDate(formattedDate);
//         setText(data[0].full_text);
//         setRetweets(data[0].retweet_count);
//         setFavCount(data[0].favorite_count);

//       });

//   }, []);


//   //if retweet_status is not null. then use retweet_status full_text property, else use full_text property on statuses


//   return (
//     <div className="bg-gray-100 rounded-lg md:mx-auto mt-10 md:max-w-xl justify-center">
//       {/* flex bg-gray-100 shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-xl justify-center */}
//       <div className="flex items-start px-4 py-6 mx-w-full">
//         <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={profileImg} alt="avatar"></img>
//         <div>
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-semibold text-gray-900 -mt-1">{name} </h2>
//             <small className="text-md text-gray-700">{formatDate}</small>
//           </div>
//           <p className="text-gray-700 flex items-start">@{username} </p>
//           <p className="mt-3 text-gray-700 text-sm">{text} </p>
//           <div className="mt-4 flex items-center">
//             <div className="flex mr-2 text-gray-700 text-sm mr-3">
//               <span className="text-gray-700">Retweets: {retweets}</span>
//             </div>
//             <div className="flex mr-2 text-gray-700 text-sm mr-8">
//               <span className="text-gray-700">Favorites: {favCount}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// SearchPage
//-------------------------------------------/>

// import React, { useState } from 'react'
// import TweetList from './SearchedTweetsList';

// export const SearchPage = () => {

//   const [userInput, setUserInput] = useState("");
//   const [data, setData] = useState(false);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const response = await fetch(`/api?input=${input}`);
//   //   const data = await response.json();
//   //   setData(data);
//   // }

//   const fetchData = (value) => {
//     fetch('/api/search')
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//       })
//   }

//   const handleChange = (value) => {
//     setUserInput(value);
//     fetchData(value);
//   }

//   return (
//     <div className="m-20">
//       <p className="my-5">
//         Search for recent tweets of your favorite user.
//       </p>
//       <p>You can search by @username or keyword.
//       </p>

//       <form className="m-20">
//         <input
//           value={userInput}
//           onChange={e => setUserInput(e.target.value)}
//           placeholder="Search here..." className="rounded p-2 text-black" type="text"
//         />
//         <button
//           // onClick={() => setShowTweets(true)}
//           className="bg-lime-500 text-black w-max px-2 rounded ml-1" type="submit">Search
//         </button>
//       </form>
//       {
//         data && <div>{JSON.stringify(data)}</div>
//       }
//       < TweetList />

//     </div>
//   );
// };

//------------------------------------------------

//http:/localhost:3001/api/name
// app.get('/api/search', async (req, res) => {

//   const searchResponse = await main();
//   res.send(searchResponse);

// });

// app.get('/api/randomtweet', async (req, res) => {

//   // const [randomTweet, setRandomTweet] = useState([]);

//   // const randomTweets = [
//   //   // Your data for the first API call
//   // ];
//   // res.json(randomTweets);

//   const randomResponse = await main()
//   res.send(randomResponse);

// });

// async function retrieveRandomTweet() {

//   const getBarackObamaTweets = 'https://api.twitter.com/2/users/813286/tweets&tweet_mode=extended&count=10';
//   const getElonMuskTweets = 'https://api.twitter.com/2/users/44196397/tweets';
//   const getJustinBieberTweets = 'https://api.twitter.com/2/users/27260086/tweets';
//   const getKatyPerryTweets = 'https://api.twitter.com/2/users/21447363/tweets';
//   const getRihannaTweets = 'https://api.twitter.com/2/users/79293791/tweets';




//   const bearerToken = 'Bearer ' + process.env.BEARER_TOKEN;
//   console.log(bearerToken);
//   try {
//     let randomResponse = await fetch(getBarackObamaTweets, getElonMuskTweets, getJustinBieberTweets, getKatyPerryTweets, getRihannaTweets, {
//       method: 'get',
//       headers: {
//         'Authorization': (bearerToken),
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     });

//     let randomResponseJsonData = await randomResponse.json();
//     console.log(`jsonData: ${randomResponseJsonData
// }`);
//     return randomResponseJsonData;
//   } catch (err) {
//     return err;
//   }
// }


// server

  // const apiBaseUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&tweet_mode=extended&count=10&lang=en';
  // const obamaTweets = 'https://api.twitter.com/2/users/813286/tweets';
  // const elonMuskTweets = 'https://api.twitter.com/2/users/44196397/tweets';
  // const justinBieberTweets = 'https://api.twitter.com/2/users/27260086/tweets';
  // const katyPerryTweets = 'https://api.twitter.com/2/users/21447363/tweets';
  // const rihannaTweets = 'https://api.twitter.com/2/users/79293791/tweets';



  // const influentPplTweets = 'https://api.twitter.com/2/tweets';

  // const searchTweetsInput = 'https://api.twitter.com/1.1/search/tweets.json?q=${inputValue}&tweet_mode=extended&count=10&lang=en&result_type=popular';


// const users = ['@BarackObama', '@katyperry', '@elonmusk', '@rihanna', '@justinbieber'];
    // const randomTweets = await getRandomTweets(users);
    // return randomTweets;

// const obamaId = '813286';
  // const elonMuskId = '44196397';
  // const justinBieberId = '27260086';
  // const katyPerryId = '21447363';
  // const rihannaId = '79293791';


  // const searchTweetsInput = 'https://api.twitter.com/2/users/44196397/tweets/tweet_mode=extended&count=10&lang=en&result_type=popular';

  // const searchTweetsInput =`https://api.twitter.com/2/users/${id}/tweets?expansions=author_id&tweet.fields=public_metrics,created_at`

  // ${searchInput.value}
