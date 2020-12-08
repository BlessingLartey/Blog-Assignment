import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function Navigation() {
  

    return (
        
            <div  className='nav'>
               <h1 className='font-bold'><Link to='/'><li>logo</li></Link></h1>

                     <Link  to='/aboutus'><li> about us</li></Link>

                     <Link to='/contactus'><li> contact us</li></Link>

                     <Link to='/signin'><li> sign in</li></Link> 

                     <Link to='/signup'><li> sign up</li></Link> 

                    
                   
            </div>
       
    )
}

export default Navigation
