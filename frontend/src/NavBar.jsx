import React from 'react'
import {Link} from 'react-router-dom'
const NavBar=()=>
{
    return(
        <div className='flex border-1 justify-around h-16 items-center w-full'>
            <p className='font-bold sm:text md:text-xl'>Blog-Verse</p>
            <Link to="/" className=' hover:border-1 rounded-2xl text-gray-700 hover:bg-blue-200 px-5 py-2 md:text-2xl'>home</Link>
            <div className='flex gap-7'>
                <Link to="/signin" className='font-semibold  text-gray-700 sm:text md:text-xl'>signin</Link>
                <Link to="/signup" className='bg-blue-600 text-white px-5 py-2 rounded-4xl cursor-pointer sm:text md:text-xl'>signup</Link>
            </div>
        </div>
        
    
    )
}
export default NavBar;