import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

const Header = () => {
    return <header className='fixed z-50 w-screen bg-slate-300 p-6 px-16'>
        {/* desktop & tablet */}
        <div className='hidden md:flex w-full h-full bg-blue-700 items-center justify-between'>
            <div className='flex items-center gap-2'>
            <p className='text-headingColor text-xl font-bold'>Gursha</p>
            </div>

            <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-16'>
                <li className='text-base text-textColor hover:text-headingColor 
                duration-100 transition-all ease-in-out cursor-pointer'>
                Menu
                </li>
                <li className='text-base text-textColor hover:text-headingColor 
                duration-100 transition-all ease-in-out cursor-pointer'>
                About Us
                </li>
                <li className='text-base text-textColor hover:text-headingColor 
                duration-100 transition-all ease-in-out cursor-pointer'>
                Service
                </li>
                <li className='text-base text-textColor hover:text-headingColor 
                duration-100 transition-all ease-in-out cursor-pointer'>
                Home
                </li>
            </ul>
            
            <div className='relative flex items-center justify-center'>
                <MdShoppingCart className='text-textColor text-2xl ml-8 cursor-pointer'/>
                {/* <p >cart</p> */}
                <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg text-center'>
                    <p className='text-xs font-semibold'>3</p>
                </div>
            </div> 

            <p className='flex w-10 min-w-[40px] h-10 min-h-[40px] rounded-full text-white bg-random
             drop-shadow-xl items-center justify-center cursor-pointer'>P</p>
            </div>
        </div>
        
        {/* mobile */}
        <div className='flex md:hidden w-full h-full bg-red-500'></div>
    </header>
}

export default Header;