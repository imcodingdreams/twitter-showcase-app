//initial configuration

//importing express as a module
const express = require('express');
//store the express method in a variable called app 
const app = express();
// set a port to run the app on
const port = 3001;


// to test if it's working, once the server starts, if it hits http://localhost:3000, it will send back a message(string) that says "Hello Ryan!"
app.get('/', (req, res) => {
  res.send('Hello Ryan!')
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