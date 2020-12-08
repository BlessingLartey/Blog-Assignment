import React, { useState } from 'react'
import Home from './Home'





export default function SignUp(){
    const [firstname, setFirstName] =useState('')
const [lastname, setLastName] =useState('')
const [email, setEmail] =useState('')
const [password, setPassword] =useState('')
const [confirmpassword, setConfirmPassword] =useState('')
const [signup, setSignUp] =useState(false)


const handleFirstNameInput =(event)=>{
    setFirstName (event.target.value)
}

const handleLastNaameInput =(event) =>{
    setLastName(event.target.value)
}

const handleEmailInput =(event)=>{
    setEmail(event.target.value)
}

const handlePasswordInput =(event) =>{
    setPassword(event.target.value)
}

const handleConfirmPasswordInput =(event)=>{
    setConfirmPassword(event.target.value)
}

function handleSignUp(event){
    if (email === 'bbklartey@gmail.com' && password==='blessmanyo' && confirmpassword==='blessmanyo') {
        setSignUp (true)
    }
}

function handleLogOut(event){
    event.preventDefault()
    setSignUp(false)
}
    return(
        <div className="max-w-xl rounded px-5 pt-30">
            
            {
            signup
            ?
            <>
            
            <button className="rounded border-2 border-black text-black px-4 mt-4 " type='button' name='button' onClick={handleLogOut}>Log Out</button>
            <Home/>
            </>
            :
            <>
            <form className=" ml-20">
                <h1 className='text-3xl font-bold'>Creat An Accont</h1>
                <br></br>
                <label className="text-2xl text-black block font-bold pb-2">First Name:</label>
                <input className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type= 'firstname' name='firstname' value={firstname} onChange= {handleFirstNameInput}/>
                <br></br>
                <label className="text-2xl text-black block font-bold pb-2">Last Name:</label>
                <input className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type='lastname' name='lastname' value={lastname} onChange={handleLastNaameInput}/>
                <br></br>
                <label className="text-2xl text-black block font-bold pb-2">Email:</label>
                <input className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"  type='email' name='email' value={email} onChange={handleEmailInput}/>
                <br></br>
                <label className="text-2xl text-black block font-bold pb-2">password:</label>
                <input className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type='password' name='password' value={password} onChange={handlePasswordInput}/>
                <br></br>
                <label className="text-2xl text-black block font-bold pb-2">Confirm Password:</label>
                <input className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type='password' name='confirmpassword' value={confirmpassword} onChange={handleConfirmPasswordInput}/>
                <br></br>
               
                <button className="rounded border-2 border-black text-black px-4 mt-4 " onClick={handleSignUp}>Sign Up</button>
            </form>
            </>
            }
        </div>
    )
}