import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AppContext from './AppContext'

import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'
import Boats from './components/Boats.jsx'
import VehicleDetails from './components/BoatDetails.jsx'

const App = () => {
  const [boats, setBoats] = useState([])

  useEffect(() => {
    const fetchBoats = async () => {
      const response = await axios(process.env.BOATS)
      setBoats(response.data)
    }
    fetchBoats()
  }, [])

  return (
    <AppContext.Provider value={boats}>
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/boats">
              <Boats />
            </Route>
            <Route exact path="/boats/:boat">
              <VehicleDetails />
            </Route>
          </Switch>
        </Router>
      </>
    </AppContext.Provider>
  )
}

export default App
