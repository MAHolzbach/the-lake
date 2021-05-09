import React from 'react'
import { NavLink } from 'react-router-dom'
import CardImage from './CardImage.jsx'

const BoatCard = ({ boat }) => (
  <NavLink to={`/boats/${boat.name}`} className="card__wrapper">
    <div className="card__header">
      <p className="card__title">{boat.renderName}</p>
      {boat.status && (
        <div className="card__status">
          <p>{boat.status}</p>
        </div>
      )}
    </div>
    <div className="card__body">
      <div>
        <CardImage img={boat.name} />
      </div>
    </div>
    <div className="card__footer">
      <p className="footer__price">
        ${boat.price}
        <span className="footer__text">/day</span>
      </p>
    </div>
  </NavLink>
)

export default BoatCard
