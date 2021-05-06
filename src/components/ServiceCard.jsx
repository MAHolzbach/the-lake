import React from 'react'
import { Card } from 'react-card-component'

import { Canoe, Fishing, Jetski, Kayak, Scuba, Waterski } from './SvgComponents'

const ServiceCard = ({ service }) => {
  const svgComponents = {
    Canoe,
    Fishing,
    Jetski,
    Kayak,
    Scuba,
    Waterski,
  }
  const CardSvg = svgComponents[service.name]
  console.log(service)
  return (
    <Card bordered outlined hoverType={'up'}>
      {CardSvg ? <CardSvg /> : null}
      <h2>{service.name}</h2>
    </Card>
  )
}

export default ServiceCard
