import React from 'react';
import { Header } from './components'


const App = () => {
    return (
        <div className='w-screen h-auto flex flex-col bg-primaryColor'>
            <Header />

            <main className='mt-24 p-8 w-full'>Main Container</main>
        </div>
    )
}

export default App;