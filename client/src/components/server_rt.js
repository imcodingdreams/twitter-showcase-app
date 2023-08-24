// //initial configuration
// require('dotenv').config()

// const { json } = require('express');
// //importing express as a module
// const express = require('express');
// //store the express method in a variable called app 
// const app = express();

// // set a port to run the app on
// const port = 3001;

// //http:/localhost:3001/api/name
// app.get('/api/tweets', async (req, res) => {

//   const response = await main();
//   res.send(response);
// });



// async function retrieveTwitterData() {
//   // const apiBaseUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=recent&count=5';
//   const apiBaseUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&tweet_mode=extended';
//   const bearerToken = 'Bearer ' + process.env.BEARER_TOKEN;
//   console.log(bearerToken);
//   try {
//     let response = await fetch(apiBaseUrl, {
//       method: 'get',
//       headers: {
//         'Authorization': (bearerToken),
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     });

//     let jsonData = await response.json();
//     console.log(`jsonData: ${jsonData}`);
//     return jsonData;
//   } catch (err) {
//     return err;
//   }
// }



// async function main() {
//   console.log("First");

//   let result = await retrieveTwitterData();
//   console.log(`Result: ${result}`);

//   console.log("Second");
//   return result;
// }

// main();



// //to start the server

// //listen is an express method to start the server
// app.listen(port, () => {
//   // optional- callback that will fire off once the server is up and running to confirm that is working
//   console.log(`Example app listening on port ${port}`)
// });



// //to run the server in the terminal on the server: node server.js








// //-------------------------

// require('dotenv').config()
// const express = require('express');
// const app = express();
// const port = 3001;

// app.use(express.json());

// app.get('/api/tweets', async (req, res) => {

//   const response = await main();
//   res.send(response);

// });

// app.get('/api/randomtweet', async (req, res) => {
//   try {
//     const users = ['@BarackObama', '@katyperry', '@elonmusk', '@rihanna', '@justinbieber']; // Add 5 specific user screen names here
//     const randomTweets = await getRandomTweets(users);
//     res.json(randomTweets);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching tweets' });
//   }
// });

// async function retrieveTwitterData(screenName) {
//   // const apiBaseUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=recent&count=5';
//   //const apiBaseUrl = `https://api.twitter.com/1.1/statuses/tweets.json?screen_name=${screenName}&count=1`;
//   const apiBaseUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&tweet_mode=extended&count=10';
//   const bearerToken = 'Bearer ' + process.env.BEARER_TOKEN;
//   console.log(bearerToken);
//   try {
//     let response = await fetch(apiBaseUrl, {
//       method: 'get',
//       headers: {
//         'Authorization': (bearerToken),
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     });

//     let jsonData = await response.json();
//     console.log(`jsonData: ${jsonData}`);
//     return jsonData;
//   } catch (err) {
//     return err;
//   }
// }

// async function getRandomTweets(users) {
//   const tweets = [];
//   for (const user of users) {
//     const userTweets = await retrieveUserData(user);
//     const randomIndex = Math.floor(Math.random() * userTweets.length);
//     tweets.push(userTweets[randomIndex]);
//   }
//   return tweets;
// }

// async function main() {
//   console.log("First");

//   let result = await retrieveTwitterData();
//   console.log(`Result: ${result}`);

//   console.log("Second");
//   return result;
// }

// main();



// //to start the server

// //listen is an express method to start the server
// app.listen(port, () => {
//   // optional- callback that will fire off once the server is up and running to confirm that is working
//   console.log(`Example app listening on port ${port}`)
// });



// //to run the server in the terminal on the server: node server.js