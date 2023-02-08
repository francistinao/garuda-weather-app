import React from 'react'
import { IoLocation } from 'react-icons/io5';

function Navbar({ city }) {
  const currentDate = new Date();
  const date = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`

  return (
    <div>
      <nav className='flex justify-between p-6 w-full h-3'>
        <h1 className='font-sans text-2xl text-white font-bold drop-shadow-md pt-3'>Garuda Forecast</h1>
        <h1 className='text-white text-2xl pt-5 drop-shadow-2xl'><span className="font-bold">Current Date:</span> {date}</h1>
        <div className='bg-zinc-700 flex justify-space w-92 h-20 gap-4 p-4 rounded-3xl bg-opacity-60'>
          <IoLocation className='w-auto h-auto text-white'/>
          <div>
            <p className='text-xs text-white pt-2'>Current Location</p>
            <h2 className='text-xl font-bold text-white'>{city?.name}</h2>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar