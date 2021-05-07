import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AppContext from './AppContext'

import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'
import Services from './components/Services.jsx'
import VehicleDetails from './components/VehicleDetails.jsx'

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
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/services/:service">
              <VehicleDetails />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  )
}

export default App
