import React, { useState, useEffect, useContext } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'
import AppContext from '../../AppContext'
import Spinner from '../Spinner/Spinner.jsx'

import breeze from '../../images/breeze.png'
import lancer from '../../images/lancer.png'
import nina from '../../images/nina.png'
import pinta from '../../images/pinta.png'
import santaMaria from '../../images/santaMaria.png'
import waverunner from '../../images/waverunner.png'
import lengthIcon from '../../images/length-icon.svg'
import widthIcon from '../../images/width-icon.svg'
import capacityIcon from '../../images/capacity-icon.svg'

const BoatDetails = () => {
  const { setSelectedBoat } = useContext(AppContext)

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

  const boatDataEndpoints = {
    breeze: process.env.BREEZE,
    lancer: process.env.LANCER,
    nina: process.env.NINA,
    pinta: process.env.PINTA,
    santaMaria: process.env.SANTAMARIA,
    waverunner: process.env.WAVERUNNER,
  }

  useEffect(() => {
    const fetchBoatData = async () => {
      const response = await axios(boatDataEndpoints[boat])
      setBoatData(response.data)
    }
    fetchBoatData()
  }, [])

  return (
    <div className={`boat-details ${boat}`}>
      {!boatData.length > 0 ? (
        <Spinner />
      ) : (
        <>
          <div className="boat-details__content">
            <div className="boat-details__data">
              <div>
                <h1 className="boat-details__title">{boatData.renderName}</h1>
                <p className="boat-details__class">{boatData.class}</p>
                <p className="boat-details__price">
                  ${boatData.price}
                  <span className="boat-details__price__text">/day</span>
                </p>
              </div>
              <div className="boat-details__length">
                <img
                  src={lengthIcon}
                  alt="length"
                  className="boat-details__length__icon"
                />
                <p className="boat-details__length__text">Length</p>
                <p className="boat-details__length__value">{boatData.length}</p>
              </div>
              <div className="boat-details__width">
                <img
                  src={widthIcon}
                  alt="width"
                  className="boat-details__width__icon"
                />
                <p className="boat-details__width__text">Width</p>
                <p className="boat-details__width__value">{boatData.width}</p>
              </div>
              <div className="boat-details__capacity">
                <img
                  src={capacityIcon}
                  alt="capacity"
                  className="boat-details__capacity__icon"
                />
                <p className="boat-details__capacity__text">Capacity</p>
                <p className="boat-details__capacity__value">
                  {boatData.capacity} people
                </p>
              </div>
            </div>
            <div className="boat-details__image-wrapper">
              <img className="boat-details__image" src={images[boat]} />
            </div>
          </div>
          <NavLink
            to="/payment"
            className="boat-details__navlink"
            onClick={() => setSelectedBoat(boatData)}
          >
            <button className="boat-details__button">Rent</button>
          </NavLink>
        </>
      )}
    </div>
  )
}

export default BoatDetails
