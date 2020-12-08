import React from 'react'
import bake from '../JPGs/bake.jpg'
import sew from '../JPGs/sew.jpg'
import dec from '../JPGs/dec.jpg'
import '../App.css'

function AboutUs() {
    return (
        <div>
            <center>
            <h1 className='text-3xl font-bold'>About us</h1>
            <h1 className='py-10 text-2xl font-bold'>What we do</h1>
            </center>
           
            <div className='flex px-20'>
                 <img src={bake} alt=" bake" className='w-80 h-80 object-cover'/>
            
                 <div>
                 <h1 className='text-center text-1xl font-bold'>Baking</h1>
                 
                 <p className='px-20 py-20'>We bake as we bake and bake the bakable. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us.This is us. This is us. This is us. This is us. This is us.This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us.This is us.This is us.This is us.This is us. This is us. This is us. This is us. This is us. This is us. This is us.This is us.This is us. This is us. This is us.</p>
                 </div>
    </div>

            <div className='flex px-20 py-10'>
                 <img src={sew} alt="sew" className='w-80 h-80 object-cover'/>
                 <div>
                 <h1 className='text-center text-1xl font-bold'>Sewing</h1>
                 <p className='px-20 py-20'>We sew as we sew and sew the sewable. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us.This is us. This is us. This is us. This is us. This is us.This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us.This is us.This is us.This is us.This is us. This is us. This is us. This is us. This is us. This is us. This is us.This is us.This is us. This is us. This is us.</p>
                 </div>
            </div>

            <div className='flex px-20 py-10'>
                 <img src={dec} alt=" dec" className='w-80 h-80 object-cover'/>
                 <div>
                 <h1 className='text-center text-1xl font-bold'>Decorating</h1>
                 <p className='px-20 py-20 '>We decorate as we decorate and decorate the decoratable. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us.This is us. This is us. This is us. This is us. This is us.This is us. This is us. This is us. This is us. This is us. This is us. This is us. This is us.This is us.This is us.This is us.This is us. This is us. This is us. This is us. This is us. This is us. This is us.This is us.This is us. This is us. This is us.</p>
                 </div>
            </div>

        </div>
    )
}

export default AboutUs
