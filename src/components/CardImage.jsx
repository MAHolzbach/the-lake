import React from 'react'

import canoe from '../images/canoe.png'
import jetski from '../images/jetski.png'
import kayak from '../images/kayak.png'
import scuba from '../images/scuba.png'
import waterski from '../images/waterski.png'
import windsurf from '../images/windsurf.png'

const CardImage = ({ img }) => {
  const images = {
    canoe,
    jetski,
    kayak,
    scuba,
    waterski,
    windsurf,
  }

  return (
    <div>
      <img className="card-image" src={images[img]} />
    </div>
  )
}

export default CardImage
