import React from 'react'
const NavBar=()=>
{
    return(
        <div className='flex border-1 justify-around h-16 items-center'>
            <p className='font-bold text-xl'>Blog-Verse</p>
            <button className=' hover:border-1 rounded-2xl text-gray-700 hover:bg-blue-200 px-5 py-2'>home</button>
            <div className='flex gap-7'>
                <button className='font-semibold  text-gray-700 '>signin</button>
                <button className='bg-blue-600 text-white px-5 py-2 rounded-4xl cursor-pointer'>signup</button>
            </div>
        </div>
        
    
    )
}
export default NavBar;