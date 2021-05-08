import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
          <h1 className="vehcile-details__title">{boatData.renderName}</h1>
        </div>
        <div className="vehicle-details__image-wrapper">
          <img className="vehicle-details__image" src={images[boat]} />
        </div>
      </div>
    </div>
  )
}

export default BoatDetails
