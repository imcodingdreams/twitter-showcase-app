import React from 'react';
import dayjs from "dayjs";

export const TweetCard = ({ profileImg, user, username, formattedDate, text, retweets, favCount }) => {
  return (

    <div className="bg-gray-100 rounded-lg md:mx-auto mt-10 md:max-w-xl px-8 py-10">

        <div className='flex'>
          <div className='pl-10 basis-1/4'>
            <img className="w-12 h-12 rounded-full object-cover shadow" src={profileImg} alt="IMG"></img>
          </div>

          <div className='ml-2 justify-items-start basis-1/2'>
            <h2 className="text-lg font-semibold 
                text-gray-900">{user} </h2>
            <p className="text-gray-700">@{username}</p>
          </div>

          <div className='basis-1/4 text-end pr-10'>
            <small className="text-md text-gray-700">{formattedDate = dayjs(formattedDate).format("MM/DD/YY")}</small>
          </div>

        </div>

        <p className="mt-3 text-gray-700 text-sm">{text}</p>
        <div className="flex mt-5 pl-10">
          <div className="flex text-gray-700 text-sm mr-5 items-center">
            <svg className="w-6 h-6 stroke-lime-500" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>
            <span
              className="ml-1 text-gray-700 items-center">{retweets}</span>
          </div>
          <div className="flex text-gray-700 text-sm mr-6 items-center">
            <svg className="w-6 h-6 fill-lime-500 stroke-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span className="ml-1 text-gray-700 items-center">{favCount}</span>
          </div>
        </div>
    </div>
  );
};