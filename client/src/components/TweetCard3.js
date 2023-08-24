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


