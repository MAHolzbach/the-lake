import React from 'react'
import { NavLink } from 'react-router-dom'

import './landing.scss'

const Landing = () => (
  <div className="landing">
    <h1 className="landing__title">The Lake</h1>
    <h3 className="landing__subtitle">
      Welcome to New York&apos;s premier outdoor aquatic adventure destination!
    </h3>
    <NavLink to="/services" className="landing__navlink">
      <button className="landing__button">Get Started</button>
    </NavLink>
    {/* <h3 className="landing-text">
      Located in beautiful Massarappaconsanononakeequa, we have everything you
      need for a great adventure!
    </h3> */}
  </div>
)

export default Landing
