import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'

import breeze from '../images/breeze.png'
import lancer from '../images/lancer.png'
import nina from '../images/nina.png'
import pinta from '../images/pinta.png'
import santaMaria from '../images/santaMaria.png'
import waverunner from '../images/waverunner.png'

const BoatDetails = () => {
  const { boat } = useParams()
  const [boatData, setBoatData] = useState([])

  const images = {
    breeze,
    lancer,
    nina,
    pinta,
    santaMaria,
    waverunner,
  }

  const vehicleDataEndpoints = {
    breeze: process.env.BREEZE,
    lancer: process.env.LANCER,
    nina: process.env.NINA,
    pinta: process.env.PINTA,
    santaMaria: process.env.SANTAMARIA,
    waverunner: process.env.WAVERUNNER,
  }

  useEffect(() => {
    const fetchBoatData = async () => {
      const response = await axios(vehicleDataEndpoints[boat])
      setBoatData(response.data)
    }
    fetchBoatData()
  }, [])

  return (
    <div className={`vehicle-details ${boat}`}>
      <div className="vehicle-details__content">
        <div className="vehicle-details__data">
          <h1 className="vehicle-details__title">{boatData.renderName}</h1>
          <p className="vehicle-details__class">{boatData.class}</p>
          <p className="vehicle-details__price">
            {boatData.price}{' '}
            <span className="vehicle-details__price__text">/day</span>
          </p>
        </div>
        <div className="vehicle-details__image-wrapper">
          <img className="vehicle-details__image" src={images[boat]} />
        </div>
      </div>
      <NavLink to="/book" className="vehicle-details__navlink">
        <button className="vehicle-details__button">Rent</button>
      </NavLink>
    </div>
  )
}

export default BoatDetails
