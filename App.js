import React from 'react'
import Navigation from './COMPONENTS/Navigation'
import logo from './COMPONENTS/logo'
import ContactUs from './COMPONENTS/ContactUs'
import AboutUs from './COMPONENTS/AboutUs'
import newWelcome from './JPGs/newWelcome.jpg'
import './index.css'
import SignIn from './COMPONENTS/SignIn'
import Post from './COMPONENTS/post'
import SignUp from './COMPONENTS/SignUp'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



export default function App() {
  return( 
    <Router>
    

      <Navigation/>
      <div>
        <img src={newWelcome} alt=" newWelcome" className='w-full h-40 object-cover'/>
      </div>
      <Switch>
      <Route path='/' component= {logo} exact/>
      <Route path='/aboutus' component= {AboutUs}/>
      <Route path='/contactus' component= {ContactUs}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/post' component={Post}/>
      </Switch>

   

    </Router>
  )
}