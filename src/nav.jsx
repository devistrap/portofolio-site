import { useState } from 'react'
import './App.css'

function App() {
  return (
    <nav className=' w-screen bg-gradient-to-r from-blue-300 to-blue-500 h-24 font-serif shadow-2xl'>

      <div className='flex flex-col w-fit absolute'>
        <img src='./logo/png/logo-no-background.png' className='object-cover h-14 w-14 mt-3 animate-spin-slow'></img>
        <p>bart nieman</p>
      </div>
    
      <div className='flex flex-row justify-end'>
      <button className='mx-5 my-2 h-20 bg-blue-900 hover:bg-gray-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-full text-2xl shadow-xl'>contact</button>
      <button className='mx-5 my-2 h-20 bg-blue-900 hover:bg-gray-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-full text-2xl shadow-xl'>experience</button>
      <button className='mx-5 my-2 h-20 bg-blue-900 hover:bg-gray-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-full text-2xl shadow-xl'>projects</button>
      </div>
    
    </nav>
  )
}

export default App
