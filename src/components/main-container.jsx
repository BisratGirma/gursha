import React from 'react'

const MainContainer = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='flex items-center md:justify-start justify-center p-4 flex-1'>
      <p className='text-2xl font-bold text-textColor'>
        Fast delivery to <span className='text-headingColor'>your place</span>
      </p></div>
      <div className='bg-cartNumBg p-4 flex-1'></div>
    </div>
  )
}

export default MainContainer