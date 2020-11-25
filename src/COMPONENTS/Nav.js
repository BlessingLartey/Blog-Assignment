import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
             <nav>
            
               
                <h1>logo</h1>
                
                <ul className='nav-links'>
                <Link to='/aboutus'>
                <li> about us</li>
                </Link>
                <Link to='/contactus'>
                <li> contact us</li>
                </Link>
                <Link to='/signin'>
                <li> sign in</li>
                </Link>
            </ul>
            </nav>
        </div>
    )
}

export default Nav
