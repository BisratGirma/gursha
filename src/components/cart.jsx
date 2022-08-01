import React from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';
// import { AnimatePresence, motion } from 'framer-motion';

const Cart = () => {
    return <div className='absolute -top-0 -right-0 flex p-4 mr-2 border-solid'>
        
            <div className='relative flex items-center justify-center'>
                <MdOutlineShoppingBag className='text-textColor text-2xl cursor-pointer'/>
                <div className='absolute -top-2 -right-3 w-5 h-5 rounded-[50%] bg-cartNumBg text-center'>
                    <p className='text-xs text-white font-semibold'>3</p>
                </div>
            </div> 
        
        
        
    </div>
}

export default Cart;