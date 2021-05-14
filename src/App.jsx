import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AppContext from './AppContext'

import Navbar from './components/Navbar/Navbar.jsx'
import Landing from './components/Landing/Landing.jsx'
import Boats from './components/Boats/Boats.jsx'
import BoatDetails from './components/BoatDetails/BoatDetails.jsx'
import Payment from './components/Payment/Payment.jsx'
import About from './components/About/About.jsx'

const App = () => {
  const [boats, setBoats] = useState([])
  const [selectedBoat, setSelectedBoat] = useState(null)

  const context = {
    boats,
    selectedBoat,
    setSelectedBoat,
  }

  useEffect(() => {
    const fetchBoats = async () => {
      const response = await axios(process.env.BOATS)
      setBoats(response.data)
    }
    fetchBoats()
  }, [])

  return (
    <AppContext.Provider value={context}>
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
              <BoatDetails />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </>
    </AppContext.Provider>
  )
}

export default App
