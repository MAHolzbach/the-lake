import React, { useContext } from 'react'
import AppContext from '../AppContext'

import ServiceCard from './ServiceCard.jsx'

const Services = () => {
  const services = useContext(AppContext)

  return (
    <div className="services">
      <h1 className="services-title">Choose an adventure!</h1>
      {services.map((service) => (
        <ServiceCard key={service.name} service={service} />
      ))}
    </div>
  )
}

export default Services
