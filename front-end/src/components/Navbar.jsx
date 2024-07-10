import "/home/gambi/P4/Gari-Zetu-Evolution/front-end/src/index.css";
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'> Gari-Zetu</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar