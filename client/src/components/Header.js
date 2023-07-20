import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";

export const Header = () => {
  const [name, setName] = useState("Unknown");
  // update `name` to be the name from your sever
  useEffect(() => {
    // make an http request to our server for the name
    axios.get('/api/name').then(response => {
      // const [name, setName] = useState("Unknown");
      setName(response.data.name);
    });
  }, []);
  return (
    <h1>{name} TWITTER SHOWCASE</h1>
  )
}
