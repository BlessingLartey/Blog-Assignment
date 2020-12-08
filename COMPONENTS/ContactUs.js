import React from 'react'
import facebook from '../JPGs/facebook.png'
import whatsapp from '../JPGs/whatsapp.png'
import instagram from '../JPGs/instagram.png'

function ContactUs() {
    return (
        <div className=' px-40'>

            <center className='text-3xl font-bold'>contact us </center>

            <div className='flex px-40'>
            <img src={facebook} alt="facebook" className='w-5 h-5 rounded'/>
            Bake Sew Dec
            </div>

        
            <div className='flex py-20 px-40'>
            <img src={whatsapp} alt="whatsapp" className='w-5 h-5 rounded'/>
            0245644384
            </div>

            <div className='flex px-40'>
            <img src={instagram} alt="instagram" className='w-5 h-5 rounded'/>
            bake_sew_dec
            </div>
        </div>
    )
}

export default ContactUs
