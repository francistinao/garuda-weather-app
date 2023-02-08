import React from 'react'
import { FiTarget } from'react-icons/fi';

function Search({ handleSearch }) {
  return (
    <div>
      <div className='grid place-items-center gap-5 mt-80'>
        <h1 className='text-white font-sans font-extrabold text-3xl'>The Only Weather Forecast You Need</h1>
        <hr className='w-2/12 h-2 bg-white rounded-xl'></hr>
      </div>
        <form onSubmit={handleSearch} className='flex justify-center gap-7 m-4'>
          <input id="search" type='text' placeholder='Search City' className='w-4/12 h-10 p-3 text-sm font-sans rounded-lg text-black mt-2 backdrop-blur-none focus:outline-none opacity-60'></input>
          <button type='submit'><FiTarget className='w-7 h-7 pt-2 text-white'/></button>
        </form>
    </div>
  )
}

export default Search