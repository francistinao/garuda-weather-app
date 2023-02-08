import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ReactComponent as Loading } from '../assets/loading.svg';
import windSpeed from '../assets/wind_speed.png';
import windDeg from '../assets/wind_deg.png';
import '.././index.css'

function Modal({ cityData }) {
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const cancelButtonRef = useRef(null);

  const toKelvin = 273.15;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading((isLoading) => !isLoading);
    }, 2000);
    return () => {
      clearTimeout(timeout)
    }
  }, [cityData])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl h-4xl flex flex-col justify-end p-4">
                <div className="bg-white px-1 p-55 sm:p-6 sm:pb-4">
                  {isLoading && <Loading className="w-full h-96 pt-7"/>}
                  {!isLoading && <> 
                  {/* Checking if cityData is not empty to render the data */}
                    {cityData !== null && (
                      <div>
                        <h1 className="text-4xl font-extrabold">Today at <span className="text-1xl changeBg text-white px-6 py-2 rounded-md">{cityData.name}</span></h1>
                        <h1 className="text-2xl font-lg mt-2">Country: <span className="font-bold">{cityData.sys.country}</span></h1>
                        <div className="flex flex-row w-full h-full gap-4">
                          <div className="mt-7 w-2/4 h-64 bg-white shadow-2xl rounded-md p-10">
                            <h1 className="text-7xl font-extrabold">{(cityData.main.temp - toKelvin).toFixed(2)}°</h1>
                            <div className="flex flex-row gap-1">
                              <p className="text-3xl pt-6 from-neutral-700">{cityData.weather[0].main}</p>
                              <img src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`} className="w-20"></img>
                            </div>
                            <p className="font-medium text-base">{cityData.weather[0].description}</p>
                          </div>
                          <div className="mt-7 w-2/4 h-64 bg-white shadow-2xl rounded-md p-10">
                            <ul className="text-base text-gray-800">
                              <li className="">Temperature in Kelvin: {cityData.main.temp}</li>
                              <li className="">Minimum Temperature: {cityData.main.temp_min}</li>
                              <li className="">Maximum Temperature: {cityData.main.temp_max}</li>
                              <li className="">Pressure: {cityData.main.pressure}</li>
                              <li className="">Humidity: {cityData.main.humidity}</li>
                              <li className="">Sea Level: {cityData.main.sea_level}</li>
                              <li className="">Ground Level: {cityData.main.grnd_level}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-8">
                          <h1 className="text-4xl font-extrabold">Wind Information</h1>
                          <div className="flex flex-row gap-3">
                            <div className="w-1/3 h-40 shadow-2xl rounded bg-white flex flex-row justify-center items-center gap-2 p-4">
                              <img src={windSpeed} className="w-16 h-16"></img>
                              <h1 className="font-bold text-2xl">Speed: </h1>
                              <p className="text-3xl">{cityData.wind.speed}</p>
                            </div>
                            <div className="w-1/3 h-40 shadow-2xl rounded bg-white flex flex-row justify-center items-center gap-2 p-4">
                              <img src={windDeg} className="w-20 h-16"></img>
                              <h1 className="font-bold text-2xl">Degree: </h1>
                              <p className="text-3xl">{cityData.wind.deg}</p>
                            </div>
                            <div className="w-1/3 h-40 shadow-2xl rounded bg-white flex flex-row justify-center items-center gap-5 p-4">
                              <h1 className="font-bold text-2xl">Gust: </h1>
                              <p className="text-3xl">{cityData.wind.gust}</p>
                            </div>
                          </div>
                        </div>
                        <div className="pt-10 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="button"
                            className="mt-4 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-bold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </>}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal