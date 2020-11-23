import React from 'react'
import Post from './Post'
import SignUp from './SignUp'
import [BrowserRouter as Router, switch, Route] from 'react-router-dom'

export default function Navbar(){
    return(
        <Router>
            <switch>
                <Route path='/' component={SignUp} />
                <Route path='/post' component={Post}/>

            </switch>
        </Router>
    )
}