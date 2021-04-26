import React from 'react'
import { Card } from 'react-card-component'

import { Canoe, Fishing, Jetski, Kayak, Scuba, Waterski } from './SvgComponents'

const ServiceCard = ({ service }) => {
  const svgComponents = {
    canoe: Canoe,
    fishing: Fishing,
    jetski: Jetski,
    kayak: Kayak,
    scuba: Scuba,
    waterski: Waterski,
  }
  const CardSvg = svgComponents[service]
  return (
    <Card bordered outlined hoverType={'up'}>
      {CardSvg ? <CardSvg /> : null}
      <h2>{service}</h2>
    </Card>
  )
}

export default ServiceCard
