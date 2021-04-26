import React from 'react'

import ServiceCard from './ServiceCard.jsx'

const Services = () => {
  const services = ['jetski', 'waterski', 'fishing', 'kayak', 'scuba', 'canoe']
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
