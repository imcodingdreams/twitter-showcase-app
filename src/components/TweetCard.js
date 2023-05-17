import React from 'react'
// import { faHeart } from "@fontawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";

export const TweetCard = () => {
  return (
    <container className="tweetCardContainer">
      <div>
        <>
          <h5>Security Trybe</h5>
          <h6>@SecurityTrybe</h6>
        </>
        <>
          <h5>02/23/2023</h5>
        </>
        <p>15 FREE Cybersecurity Courses offered by Homeland Security and CISA (Cyber & Infrastucture Security Agency)</p>
        <img src='' alt='IMG' />
        {/* <FontAwesomeIcon icon={faHeart} /> */}
        {/* <img src='./heart-64.png'></img> */}
      </div>
    </container>
  )
}
