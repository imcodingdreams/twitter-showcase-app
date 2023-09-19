import React from 'react'
import { Link } from 'react-router-dom';
import X_icon from '../img/X_icon.png'

function Navbar() {
  return (
    <ul className='flex bg-lime-500'>
      <li className='pl-5 pr-2 py-1.5 justify-center items-center'><Link to="/"><img className="h-10 transition duration-300 ease-in-out hover:scale-110" src={X_icon} alt='IMG' /></Link></li>
        {/* <li className='ml-6'><Link to="/">Home</Link></li> */}
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/randomtweet">Random Tweet</Link></li>
    </ul>
  )
}

export default Navbar