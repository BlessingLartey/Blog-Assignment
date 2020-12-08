import React from 'react'
import LikeDislike from './LikeDislike'
import {Link} from 'react-router-dom'


function Home() {
    return (
        <div>
            
           <button> <Link to='/post'><li className="rounded border-2 border-black text-black px-4 mt-4 " type='button' name='button'> post</li></Link></button>
           
          <center className=' px-20'>
                
            <h1 className='text-3xl font-bold'>BAKE IT, SEW IT, DEC IT</h1>
            <br></br>
            <h2 className='text-3xl'>Bake It</h2>
            <br></br>
            <p className='w-full'>This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. This is how we bake the bakable. </p>
            <br></br>
            <LikeDislike/>
            <br></br>
            <h2 className='text-3xl'>Sew It</h2>
            <br></br>
            <p>This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. This is hwo we sew the sewable. </p>
            <br></br>
            <LikeDislike/>
            <br></br>
            <h2 className='text-3xl'>Dec It</h2>
            <br></br>
            <p>This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. This is how we decorate the decoratable. </p>
            <LikeDislike/>
            </center>
   
        </div>
    )
}

export default Home
