import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './landing.scss'

const Landing = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios(process.env.SERVICES)
      setServices(response.data)
    }
    fetchServices()
  }, [])

  return (
    <div className="landing">
      <h1 className="landing-title">The Lake</h1>
      <h3 className="landing-subtitle">
        Welcome to New York&apos;s premier outdoor aquatic adventure
        destination!
      </h3>
      {/* <h3 className="landing-text">
      Located in beautiful Massarappaconsanononakeequa, we have everything you
      need for a great adventure!
    </h3> */}
    </div>
  )
}

export default Landing
