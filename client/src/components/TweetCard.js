import React from 'react';
import dayjs from "dayjs";

export const TweetCard = ({ profileImg, user, username, formattedDate, text, retweets, favCount }) => {
  return (
    <div>
      <div className="bg-gray-100 rounded-lg md:mx-auto mt-10 md:max-w-xl justify-center">
        <div className="bg-gray-100 rounded-lg md:mx-auto mt-10 md:max-w-xl justify-center">
          <div className="flex items-start px-4 py-6 mx-w-full">
            <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={profileImg} alt="IMG"></img>
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 -mt-1">{user} </h2>
                <small className="text-md text-gray-700">{formattedDate = dayjs(formattedDate).format("MM/DD/YY")}</small>
              </div>
              <p className="text-gray-700 flex items-start">@{username} </p>
              <p className="mt-3 text-gray-700 text-sm">{text} </p>
              <div className="mt-4 flex items-center">
                <div className="flex mr-2 text-gray-700 text-sm mr-3">
                  <span className="text-gray-700">Retweets: {retweets}</span>
                </div>
                <div className="flex mr-2 text-gray-700 text-sm mr-8">
                  <span className="text-gray-700">Favorites: {favCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};