import React from 'react'
import Nav from './COMPONENTS/Nav'
import Home from './COMPONENTS/Home'
import ContactUs from './COMPONENTS/ContactUs'
import AboutUs from './COMPONENTS/AboutUs'
import './App.css'
import SignIn from './COMPONENTS/SignIn'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'




export default function App() {
  return(
    <div>
    
    <Router>
    <div className= 'App'>

      <Nav/>
      <Switch>
      <Route path='/' component= {Home} exact/>
      <Route path='/aboutus' component= {AboutUs}/>
      <Route path='/contactus' component= {ContactUs}/>
      <Route path='/signin' component={SignIn}/>
      </Switch>

    </div>

    </Router>
    </div>
  )
}
