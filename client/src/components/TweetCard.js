import React from 'react'
// import { faHeart } from "@fontawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { useState, useEffect } from 'react';
import axios from "axios";

export const TweetCard = () => {
  const [id, setId] = useState("Unknown");
  const [name, setName] = useState("Unknown");
  const [username, setUsername] = useState("Unknown");
  const [date, setDate] = useState("Unknown");
  const [text, setText] = useState("Unknown");
  const [retweets, setRetweets] = useState("Unknown");
  const [favCount, setFavCount] = useState("Unknown");
  // update `tweets to be the tweets from your sever
  useEffect(() => {
    // make an http request to our server for the tweets
    axios.get('/api/tweets').then(response => {
      console.log(response.data)
      const data = response.data.data
        setId(data[1].id);
        setName(data[1].name);
        setUsername(data[1].screen_name);
        setDate(data[1].created_at);
        setText(data[1].text);
        setRetweets(data[1].retweet_count);
        setFavCount(data[1].favorite_count);
    });
  }, []);
  return (
    <div className="tweetCardContainer">
      <>
        <p>{id}</p>
        <h5>{name}</h5>
        <h6>@{username}</h6>
        <p>{retweets}</p>
        <p>{favCount}</p>
      </>
      <>
        <p>{date}</p>
      </>
      <p>{text}</p>
      <img src='' alt='IMG' />
      {/* <FontAwesomeIcon icon={faHeart} /> */}
      {/* <img src='./heart-64.png'></img> */}
    </div>
  )
};

// export const TweetCard = () => {
//   return (
//     <container className="tweetCardContainer">
//       <div>
//         <>
//           <h5>{name}</h5>
//           <h6>{username}</h6>
//         </>
//         <>
//           <h5>{date}</h5>
//         </>
//         <p>15 FREE Cybersecurity Courses offered by Homeland Security and CISA (Cyber & Infrastucture Security Agency)</p>
//         <img src='' alt='IMG' />
//         {/* <FontAwesomeIcon icon={faHeart} /> */}
//         {/* <img src='./heart-64.png'></img> */}
//       </div>
//     </container>
//   )
// }
