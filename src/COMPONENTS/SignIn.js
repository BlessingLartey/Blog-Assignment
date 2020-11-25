import React, { useState } from 'react'

import '../App.css'

export default function SignIn(){

    const[email, setEmail] = useState('')
    const[password, setPassword] =useState('')
    const[signin, setSignIn] =useState(false)

    const handleEmailInput =(event) =>{
        setEmail (event.target.value)
    }

    const handlePasswordInput =(event) =>{
        setPassword(event.target.value)

    }

    function handleSignIn(event){
        if (email === 'bbklartey@gmail.com' && password==='blessmanyo') {
            setSignIn (true)
        }
    }
    
    function handleLogOut(event){
        event.preventDefault()
        setSignIn(false)
    }
    
    return(
        <div>
        {
            signin
            ?
            <>
            
            <button className='style' onClick={handleLogOut}>Log Out</button>
            
            </>
            :
            <>
        <form className="App-header">
        <h1>Already have an account?</h1>
                    <br></br>
            <label>Email:</label>
            <input type='email' name='email' value={email} onChange={handleEmailInput}/>
            <br></br>
            <label>Password:</label>
            <input type='password' name='password' value={password} onChange={handlePasswordInput}/>
            <br></br>
            
                    
                
                    
                    <button onClick={handleSignIn}>Sign In</button>
                   
                    

        </form>
        </>
        }

        </div>

    )
    }