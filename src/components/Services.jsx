import React from 'react'

import ServiceCard from './ServiceCard.jsx'

const Services = () => {
  const services = [
    'Jetski',
    'Waterski',
    'Fishing',
    'Kayaking',
    'Scuba',
    'Canoeing',
  ]
  return (
    <div className="services">
      <h1 className="services-title">Choose an adventure!</h1>
      {services.map((service) => (
        <ServiceCard key={service} service={service} />
      ))}
    </div>
  )
}

export default Services
