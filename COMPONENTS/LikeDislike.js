import React, { useState } from 'react'

export default function LikeDislike(){

    const [like, setLike] =useState(0)
    const[dislike, setDislike] =useState(0)
    

    const handleClick=()=> setLike(like +1)
    const handleDislike=()=> setDislike(dislike +1)



    return(
        <div>
            <button className='rounded bg-blue-500 px-3' onClick={handleClick}>Like {like}</button>
            < button className='rounded bg-red-500 px-3' onClick= {handleDislike}>Dislike {dislike}</button>
        </div>

    )
}