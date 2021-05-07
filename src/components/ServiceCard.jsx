import React from 'react'
import { Card } from 'react-card-component'
import CardImage from './CardImage.jsx'

const ServiceCard = ({ service }) => (
  <div className="card__wrapper">
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
  </div>
)

export default ServiceCard
