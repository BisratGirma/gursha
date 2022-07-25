import React, { useState } from 'react'
import { Link }  from 'react-router-dom'
import {MdOutlineRestaurantMenu, MdPersonOutline, MdSettings, MdLogout ,MdOutlineDeliveryDining, MdOutlineNotifications} from 'react-icons/md'

const NavBar = () => {
    const list = (<ul className='flex md:flex-col flex-row md:gap-6 justify-between items-center'>
    <li className='flex items-center flex-col text-textColor hover:text-headingColor 
    duration-100 transition-all ease-in-out cursor-pointer'>
    <MdOutlineRestaurantMenu className='text-2xl'/>
    <p className='text-xs'>Menus</p>
    </li>
    <li className='flex items-center flex-col text-textColor hover:text-headingColor 
    duration-100 transition-all ease-in-out cursor-pointer'>
    <MdOutlineDeliveryDining className='text-2xl'/>
    <p className='text-xs'>Orders</p>
    </li>
    
    <li className='flex items-center flex-col text-textColor hover:text-headingColor 
    duration-100 transition-all ease-in-out cursor-pointer'>
    <MdOutlineNotifications className='text-2xl'/>
    <p className='text-xs'>Notifications</p>
    </li>
    <li className='md:hidden flex items-center flex-col text-textColor hover:text-headingColor 
    duration-100 transition-all ease-in-out cursor-pointer'>
    <MdPersonOutline className='text-2xl'/>
    <p className='text-xs'>Profile</p>
    </li>
    
</ul>)
    
    const [profileExtra, changeProfileState] = useState(false);
  
  
  return (
    <nav> 
    {/* desktop & tablet */}
    <div className='hidden md:flex mt-1 fixed top-16 justify-between items-center flex-col w-24 h-90vh border-solid border-2 border-random'>
        <div className='mt-4'>
            {list}
        </div>

        <div className='flex w-12 min-w-[48px] h-12 min-h-[48px] mb-6 rounded-full text-white bg-random
        drop-shadow-xl items-center justify-center cursor-pointer' onClick={()=>changeProfileState(profileExtra === false ? true : false)}>
            <MdPersonOutline  />
            {profileExtra && <div className='-top-[70px] -right-16 w-28 bg-white text-textColor shadow-xl rounded-lg flex flex-col items-center absolute'>
            <ul>
                <li className='px-5 py-1 flex items-center hover:bg-[#d3d3d34b] transition-all duration-100 ease-in-out'><MdSettings className='m-1'/> Setting</li>
                <li className='px-5 py-1 flex items-center hover:bg-[#d3d3d34b] transition-all duration-100 ease-in-out'><MdLogout className='m-1'/> Logout</li>
            </ul>
            
            </div>}
        </div>
    </div>
    
    {/* mobile */}
    <div className='flex md:hidden w-full'>
        <div className='fixed -bottom-0 w-screen px-8 py-2 flex border-solid border-2 border-random'>
            <div className='w-full border-2 border-headingColor'>
                {list}
            </div>
        </div>
    </div>
    </nav>
  )
}

export default NavBar