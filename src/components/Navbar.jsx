import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <ul className="navbar-list">
      <NavLink
        className="navbar-item"
        exact
        to="/"
        activeStyle={{ boxShadow: 'inset 0 -2px 0 0 #0177fb' }}
      >
        Home
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/boats"
        activeStyle={{ boxShadow: 'inset 0 -2px 0 0 #0177fb' }}
      >
        Boats
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/info"
        activeStyle={{ boxShadow: 'inset 0 -2px 0 0 #0177fb' }}
      >
        Info
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/join"
        activeStyle={{ boxShadow: 'inset 0 -2px 0 0 #0177fb' }}
      >
        Join
      </NavLink>
    </ul>
  </div>
)

export default Navbar
