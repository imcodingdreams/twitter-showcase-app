//initial configuration

//importing express as a module
const express = require('express');
//store the express method in a variable called app 
const app = express();

// set a port to run the app on
const port = 3001;


// to test if it's working, once the server starts, if it hits http://localhost:3000, it will send back a message(string) that says "Hello Ryan!"

// http:/localhost:3001/api/name
app.get('/api/tweets', (req, res) => {
  const response = {
    "data": [
      {
        "created_at": "2008-12-04T18:51:57.000Z",
        "id": "17874544",
        "id_str": "177101260",
        "screen_name": "TwitterSupport",
        "name": "Twitter Support",
        "retweet_count": 2348,
        "favorite_count": 10989,
        "text": "Yay, space! #Barbie became an astronaut in 1965. Since then, we've partnered with @ISS_CASIS to send Barbies to the @Space_Station as part of our larger effort to encourage girls to explore science and engineering. Get @NASASTEM resources here: http://nasa.gov/stem"
      },
      {
        "created_at": "2007-02-20T14:35:54.000Z",
        "id": "783214",
        "id_str": "177101260",
        "screen_name": "Twitter",
        "name": "Twitter", 
        "retweet_count": 2348,
        "favorite_count": 10989,
        "text": "Yay, space! #Barbie became an astronaut in 1965. Since then, we've partnered with @ISS_CASIS to send Barbies to the @Space_Station as part of our larger effort to encourage girls to explore science and engineering. Get @NASASTEM resources here: http://nasa.gov/stem"
      },
      {
        "pinned_tweet_id": "1389270063807598594",
        "created_at": "2018-11-21T14:24:58.000Z",
        "id": "1065249714214457345",
        "id_str": "177101260",
        "screen_name": "TwitterSpaces",
        "name": "Spaces",
        "retweet_count": 2348,
        "favorite_count": 10989,
        "text": "Yay, space! #Barbie became an astronaut in 1965. Since then, we've partnered with @ISS_CASIS to send Barbies to the @Space_Station as part of our larger effort to encourage girls to explore science and engineering. Get @NASASTEM resources here: http://nasa.gov/stem"
      },
      {
        "pinned_tweet_id": "1293595870563381249",
        "created_at": "2007-05-23T06:01:13.000Z",
        "id": "6253282",
        "id_str": "177101260",
        "screen_name": "TwitterAPI",
        "name": "Twitter API",
        "retweet_count": 2348,
        "favorite_count": 10989,
        "text": "Yay, space! #Barbie became an astronaut in 1965. Since then, we've partnered with @ISS_CASIS to send Barbies to the @Space_Station as part of our larger effort to encourage girls to explore science and engineering. Get @NASASTEM resources here: http://nasa.gov/stem"
      }
    ],
    "includes": {
      "tweets": [
        {
          "created_at": "2021-05-03T17:26:09.000Z",
          "id": "1389270063807598594",
          "text": "now, everyone with 600 or more followers can host a Space.\n\nbased on what we've learned, these accounts are likely to have a good experience hosting because of their existing audience. before bringing the ability to create a Space to everyone, we’re focused on a few things. 🧵"
        },
        {
          "created_at": "2020-08-12T17:11:04.000Z",
          "id": "1293595870563381249",
          "text": "Twitter API v2: Early Access released\n\nToday we announced Early Access to the first endpoints of the new Twitter API!\n\n#TwitterAPI #EarlyAccess #VersionBump https://t.co/g7v3aeIbtQ"
        }
      ]
    }
  };

  res.send(response);
});

  // http:/localhost:3001/api/name
  app.get('/api/name', (req, res) => {
    const response = {
      name: "Loo Lah's"
    };

    res.send(response);
  });

//to start the server

//listen is an express method to start the server
app.listen(port, () => {
  // optional- callback that will fire off once the server is up and running to confirm that is working
  console.log(`Example app listening on port ${port}`)
});

//to run the server in the terminal on the server: node server.js