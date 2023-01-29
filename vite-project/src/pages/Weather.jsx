import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Footer from '../components/Footer';

export const Weather = () => {
  const [city, setCity] = useState("");
  const URL = '';

  useEffect(() => {

  }, []);

  const getCity = async (e) => {
    setCity(e.target.value);
    if(e.code === "Enter") {
      fetchCity();
    }
  }

  const fetchCity = () => {
    // await fetch()
    //   .then((res) => res.json())
    //   .then((data) => {
          
    //   }).catch((err) => {

    //   }).finally(()=> {
    //     setTimeout(() => {

    //     },2000);
    //   })
    return city
  }
  return (
    <div className=''>
      <Navbar city={city} fetchCity={fetchCity}/>
      <Search getCity={getCity} fetchCity={fetchCity}/>
      <Footer />
    </div>
  )
}

export default Weather;