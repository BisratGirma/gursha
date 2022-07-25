import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
import { NavBar, MainContainer, CreateContainer, Cart } from './components'


const App = () => {
    const logo = <Link to={'/'}>
    <p className='text-headingColor text-xl font-bold'>Gursha</p>
</Link>
    return (
            <div className='w-screen h-auto flex bg-primaryColor'>
                <div className='absolute top-0 md:p-5 p-3 border-2 border-textColor'>
                    {logo}
                </div>
                <NavBar />
                <main className='fixed top-16  mt-1 flex md:left-24 md:w-[88%] lg:w-[91%] xl:w-[93%] w-full  justify-center items-center border-solid border-2 border-y-textColor'>
                    <Routes>
                        <Route path='/*' element={<MainContainer />} />
                        <Route path='/createItem' element={<CreateContainer />} />
                    </Routes>

                </main>
                <Cart />
            </div>  
    )
}

export default App;