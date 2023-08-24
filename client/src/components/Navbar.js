import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <ul className='bg-lime-500'>
      {/* <li><img src='' alt='IMG' /></li> */}
      <li className='ml-6'><Link to="/">Home</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/randomtweet">Random Tweet</Link></li>
    </ul>
  )
}

export default Navbar