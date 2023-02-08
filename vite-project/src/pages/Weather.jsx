import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { fetchCity } from '../lib/fetchJson';

export const Weather = () => {
  const [cityData, setCityData] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    const searchValue = e.target.querySelector('#search').value
    {/* If the target of the event is also null, will return value for CityData to null*/}
    if(!searchValue) {
      setCityData(null)
      return
    }

    const { data, res } = await fetchCity(searchValue)

  {/* If fetching of API is unsuccessful, will return the value for CityData to null */}
  {/* Error handling */}
    if(!res.ok) {
      setCityData(null)
      return
    }

    setCityData(data)
  }

  return (
    <div className=''>
      <Navbar city={cityData}/>
      <Search handleSearch={handleSearch}/>
      {/* if city data is not empty or undefined since cityData variable is an object*/}
      {cityData && <Modal data={cityData} />}
      <Footer />
    </div>
  )
}

export default Weather;