import React, { useContext } from 'react'
import AppContext from '../../AppContext'

import BoatCard from '../BoatCard/BoatCard.jsx'

const Boats = () => {
  const { boats } = useContext(AppContext)

  return (
    <div className="boats">
      <h1 className="boats-title">Begin your journey!</h1>
      {boats.map((boat) => (
        <BoatCard key={boat.name} boat={boat} />
      ))}
    </div>
  )
}

export default Boats
