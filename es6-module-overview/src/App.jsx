// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Watches from './components/watches/Watches'
import { useEffect } from 'react'

function App() {
  // const [count, setCount] = useState(0)

    const [watches,setWatches] = useState([])
    useEffect(()=>{
      fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data))
    },[])


  // const watches = [
  //   {
  //     "id": 1,
  //     "name": "Apple Watch Series 9",
  //     "brand": "Apple",
  //     "price": 399.99,
  //     "features": {
  //       "display": "Always-On Retina Display",
  //       "water_resistance": "50m",
  //       "connectivity": ["Bluetooth", "Wi-Fi", "Cellular"],
  //       "battery_life": "18 hours",
  //       "health_tracking": ["Heart Rate", "ECG", "Blood Oxygen"]
  //     },
  //     "image_url": "https://example.com/images/apple-watch-series-9.jpg"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Samsung Galaxy Watch 6",
  //     "brand": "Samsung",
  //     "price": 349.99,
  //     "features": {
  //       "display": "Super AMOLED",
  //       "water_resistance": "IP68",
  //       "connectivity": ["Bluetooth", "Wi-Fi", "LTE"],
  //       "battery_life": "40 hours",
  //       "health_tracking": ["Heart Rate", "Sleep Tracking", "Blood Pressure"]
  //     },
  //     "image_url": "https://example.com/images/galaxy-watch-6.jpg"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Garmin Venu 2",
  //     "brand": "Garmin",
  //     "price": 399.99,
  //     "features": {
  //       "display": "AMOLED",
  //       "water_resistance": "5 ATM",
  //       "connectivity": ["Bluetooth", "Wi-Fi"],
  //       "battery_life": "11 days",
  //       "health_tracking": ["Heart Rate", "Stress Tracking", "Pulse Ox Sensor"]
  //     },
  //     "image_url": "https://example.com/images/garmin-venu-2.jpg"
  //   },
  //   {
  //     "id": 4,
  //     "name": "Fitbit Sense 2",
  //     "brand": "Fitbit",
  //     "price": 299.95,
  //     "features": {
  //       "display": "Color Touchscreen",
  //       "water_resistance": "50m",
  //       "connectivity": ["Bluetooth", "Wi-Fi"],
  //       "battery_life": "6 days",
  //       "health_tracking": ["Heart Rate", "Stress Management", "Skin Temperature"]
  //     },
  //     "image_url": "https://example.com/images/fitbit-sense-2.jpg"
  //   },
  //   {
  //     "id": 5,
  //     "name": "Amazfit GTR 4",
  //     "brand": "Amazfit",
  //     "price": 199.99,
  //     "features": {
  //       "display": "AMOLED",
  //       "water_resistance": "5 ATM",
  //       "connectivity": ["Bluetooth", "Wi-Fi"],
  //       "battery_life": "14 days",
  //       "health_tracking": ["Heart Rate", "Sleep Tracking", "SpO2"]
  //     },
  //     "image_url": "https://example.com/images/amazfit-gtr-4.jpg"
  //   }
  // ]

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch=> <Watches key={watch.id} watch={watch}></Watches>)
      }
    </>
  )
}

export default App
