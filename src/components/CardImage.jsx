import React from 'react'

import breeze from '../images/breeze.png'
import lancer from '../images/lancer.png'
import nina from '../images/nina.png'
import pinta from '../images/pinta.png'
import santaMaria from '../images/santaMaria.png'
import waverunner from '../images/waverunner.png'

const CardImage = ({ img }) => {
  const images = {
    breeze,
    lancer,
    nina,
    pinta,
    santaMaria,
    waverunner,
  }

  return (
    <div>
      <img className="card-image" src={images[img]} />
    </div>
  )
}

export default CardImage
