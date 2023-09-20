
require('dotenv').config()
const express = require('express');
const app = express();
const port = 3001;

app.get(`/api/search`, async (req, res) => {

  console.log(req.query)
  const userInput = req.query.search_input;
  const searchResponse = await retrieveSearchData(userInput);
  res.send(searchResponse);
  //if userInput starts with an @ use username. If is not valid, throw an error.
});

async function retrieveSearchData(userInput) {

  const searchTweetsURL = `https://api.twitter.com/2/tweets/search/recent/?query=${userInput}&tweet.fields=author_id,created_at,public_metrics,text&user.fields=name,profile_image_url,username&expansions=author_id`

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


    let jsonData = await searchResponse.json([]);

    const tweetsWithIncludesInfo = jsonData.data.map((tweet) => {
      const includesInfo = jsonData.includes.users.find(
        (user) => user.id === tweet.author_id
      );

      const { name, profile_image_url, username } = includesInfo;

      return {
        ...tweet,
        author: {
          name,
          profile_image_url,
          username,
        },
      };
    });

    // console.log(jsonData)
    // console.log(jsonData);
    //loop through each tweet (jsonData.data) tweets
    //search for user data in includes (jsonData.includes) attach to the tweet
    return tweetsWithIncludesInfo; //this needs to be an array of tweets
    //loop through for each author_id get the properties in includes/user
  } catch (err) {
    return err;
  }
}


app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
});

//---------------------------------------------------------

app.get(`/api/randomtweet`, async (req, res) => {

  console.log(req.query)
  const userId = req.query.user_id;
  const fetchResponse = await retrieveUserData(userId);
  res.send(fetchResponse);
  //if userInput starts with an @ use username. If is not valid, throw an error.
});

async function retrieveUserData(userId) {
  console.log(`UserId: ${userId} random`)

  const randomTweetsURL = `https://api.twitter.com/2/users/${userId}/tweets?expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=name,username,profile_image_url`

  // https://api.twitter.com/2/users/813286/tweets?expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=name,username,profile_image_url

  const bearerToken = 'Bearer ' + process.env.BEARER_TOKEN;
  console.log(bearerToken);

  try {
    let fetchResponse = await fetch(randomTweetsURL, {
      method: 'get',
      headers: {
        'Authorization': (bearerToken),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    let jsonData = await fetchResponse.json([]);
    console.log(jsonData)

    const tweetsWithIncludesInfo = jsonData.data.map((tweet) => {
      const includesInfo = jsonData.includes.users.find(
        (user) => user.id === tweet.author_id
      );

      const { name, profile_image_url, username } = includesInfo;

      return {
        ...tweet,
        author: {
          name,
          profile_image_url,
          username,
        },
      };
    });

    return tweetsWithIncludesInfo;

  } catch (err) {
    return err;
  }
}
