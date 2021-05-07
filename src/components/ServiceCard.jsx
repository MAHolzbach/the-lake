import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-card-component'
import CardImage from './CardImage.jsx'

const ServiceCard = ({ service }) => (
  <NavLink to={`/services/${service.name}`} className="card__wrapper">
    <Card
      bordered
      hoverType={'up'}
      style={{ width: 'inherit' }}
      className="card"
    >
      <div className="card__image">
        <CardImage img={service.name} />
      </div>
      <h2>{service.renderName}</h2>
    </Card>
  </NavLink>
)

export default ServiceCard
