import React from 'react'
import { NavLink } from 'react-router-dom'

const Landing = () => (
  <div className="landing">
    <h1 className="landing__title">Seabreeze Marina</h1>
    <div>
      <h3 className="landing__subtitle">
        Welcome to Virginia&apos;s premier yacht club!
      </h3>
      <NavLink to="/boats" className="landing__navlink">
        <button className="landing__button">Get Started</button>
      </NavLink>
    </div>
  </div>
)

export default Landing
