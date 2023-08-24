require('dotenv').config()

const { json } = require('express');
//importing express as a module
const express = require('express');
//store the express method in a variable called app 
const app = express();

// set a port to run the app on
const port = 3001;
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

app.get('/api/search', async (req, res) => {

  const searchResponse = await main();
  res.send(searchResponse);

});

async function retrieveSearchData(userInput) {

  const searchTweetsURL = `https://api.twitter.com/2/tweets/search/recent/?query=Ryan&tweet.fields=author_id,created_at,public_metrics,text&user.fields=name,profile_image_url,username&expansions=author_id`

  // https://api.twitter.com/2/users/813286/tweets?expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=name,username,profile_image_url

  // https://api.twitter.com/2/users/27260086/tweets?expansions=author_id&tweet.fields=public_metrics,created_at


  const bearerToken = 'Bearer ' + process.env.BEARER_TOKEN;
  console.log(bearerToken);

  try {
    let searchResponse = await fetch(searchTweetsURL, {
      method: 'get',
      headers: {
        'Authorization': (bearerToken),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    let jsonData = await searchResponse.json();
    console.log(`jsonData: ${jsonData}`);
    return jsonData;
  } catch (err) {
    return err;
  }
}



async function main() {

  let searchResult = await retrieveSearchData();
  // let randomResult = await retrieveRandomTweet();
  console.log(`SearchResult: ${searchResult}`);
  // console.log(`RandomResult: ${randomResult}`);

  return searchResult;
}

main();



//to start the server

//listen is an express method to start the server
app.listen(port, () => {
  // optional- callback that will fire off once the server is up and running to confirm that is working
  console.log(`Example app listening on port ${port}`)
});



//to run the server in the terminal on the server: node server.js




//------------------------

const randomTweetUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&tweet_mode=extended&count=10&lang=en';
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