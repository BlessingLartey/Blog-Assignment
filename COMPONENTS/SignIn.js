import React, { useState } from 'react'
import Home from './Home'

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
        <div >
            <div className=" rounded px-5 pt-30">
        {
            signin
            ?
            <>
            
            <button className="rounded border-2 border-black text-black px-4 mt-4 " type='button' name='button' onClick={handleLogOut}>Log Out</button>
            <Home/>
            </>
            :
            <>
        <form className=" ml-20">
        <h1 className='text-3xl font-bold'>Already have an account?</h1>
                    <br></br>
            <label className="text-2xl text-black block font-bold pb-2">Email:</label>
            <input className="mb-8 shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type='email' name='email' value={email} onChange={handleEmailInput}/>
            <br></br>
            <label className="text-2xl text-black block font-bold pb-2">Password:</label>
            <input className="mb-8 shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type='password' name='password' value={password} onChange={handlePasswordInput}/>
            <br></br>
            
            <button className="rounded border-2 border-black text-black px-4 mt-4 " type="button" name="button" onClick={handleSignIn}>Sign In</button>
            
        </form>
        </>
        }
            </div> 
        </div>

    )
    }