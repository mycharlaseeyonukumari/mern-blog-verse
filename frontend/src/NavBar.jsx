import React from 'react'
import {Link} from 'react-router-dom'
const NavBar=()=>
{
    return(
        <div className='flex border-1 justify-around h-16 items-center w-full'>
            <p className='font-bold text-xl'>Blog-Verse</p>
            <Link to="/homepage" className=' hover:border-1 rounded-2xl text-gray-700 hover:bg-blue-200 px-5 py-2'>home</Link>
            <div className='flex gap-7'>
                <Link to="/signin" className='font-semibold  text-gray-700 '>signin</Link>
                <Link to="/signup" className='bg-blue-600 text-white px-5 py-2 rounded-4xl cursor-pointer'>signup</Link>
            </div>
        </div>
        
    
    )
}
export default NavBar;