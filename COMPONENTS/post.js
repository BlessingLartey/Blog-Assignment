import React, { useState } from 'react';
import { v1 as uuid } from "uuid"


function Add() {

    const [title, setTitle] = useState("")

    const [content, setContent] = useState("")

    const [author, setAuthor] = useState("")

    const [date, setDate] = useState("")

    const [post, setPost] = useState([]);




    const handleTitleInput = (event) => {
        setTitle(event.target.value)
    }

    const handleContentInput = (event) => {
        setContent(event.target.value)
    }
    const handleAuthorInput = (event) => {
        setAuthor(event.target.value)
    }
    const handleDateInput = (event) => {
        setDate(event.target.value)
    }

    const handlePost= (event) => {
        event.preventDefault();
         setPost(
             [
                 ...post,
                 {
                     id: uuid(),
                     title: title,
                     author: author,
                     content: content,
                     date: date
                 }
             ]);
        
        setTitle("");
        setAuthor("");
        setContent("")
        setDate("");
    };






        return (
            <div>
            <div className="max-w-xl rounded px-5 pt-30">
                
                <form className=" ml-20">
                    <label className="text-2xl text-black block font-bold pb-2">TITLE:</label>
                    <input className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='title' value={title} onChange={handleTitleInput} />
                    <br></br>
                    <label className="text-2xl text-black block font-bold  pb-2">AUTHOR:</label>
                    <input className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='content' value={content} onChange={handleContentInput} />
                    <br></br>
                    <label className="text-2xl text-black block font-bold  pb-2">CONTENT:</label>
                    <input className="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='authourname' value={author} onChange={handleAuthorInput} />
                     <br></br>
                    <label className="text-2xl text-black block font-bold  pb-2">DATE:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="date" name='date' value={date} onChange={handleDateInput} />
                    <br></br>
                    <label>
                        <center><button className="rounded border-2 border-black text-black px-4 mt-4 " type="button" name="button" onClick={handlePost}>Post</button></center>
                    </label>
                </form>
                <center><h1 className="font-bold text-black text-4xl mt-80 mb-10">All Posts</h1></center>
                <ul className="ml-32 w-full mt-4">
                {
                    post.map((post) => (
                        <li className="bg-white border-2 m-4 py-6 border-gray-900 w-full" key={post.id}>
                            <h1 className="font-bold text-2xl">{post.title}</h1>
                            <br></br>
                            <h3 className="font-bold text-xl"> By {post.content}</h3>
                            <br></br>
                             <p>{post.author}</p>
                            <br></br>
                            {post.date}
                        </li>
                        )
                    )
                }
                </ul>
            
            </div>
            </div>
        );
    }

    export default Add;