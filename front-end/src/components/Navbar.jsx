import "../index.css";
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'> Gari-Zetu</div>
        <ul className='nav-menu'>
            <li>About</li>
            <li>Catalogue</li>
            <li>News</li>
            <li>Contact</li>
            <li className='nav-contact'>Login/Register</li>
        </ul>
    </div>
  )
}

export default Navbar