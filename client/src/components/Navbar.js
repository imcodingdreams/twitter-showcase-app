import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <ul>
      <li><img src='' alt='IMG' /></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/randomtweet">Random Tweet</Link></li>
    </ul>
  )
}

export default Navbar