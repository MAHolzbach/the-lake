import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AppContext from './AppContext'

import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'
import Services from './components/Services.jsx'

const App = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios(process.env.SERVICES)
      setServices(response.data)
    }
    fetchServices()
  }, [])

  return (
    <AppContext.Provider value={services}>
      <div>
        <Navbar />
        <Landing />
        <Services />
      </div>
    </AppContext.Provider>
  )
}

export default App
