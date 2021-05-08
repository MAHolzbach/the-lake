import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const VehicleDetails = () => {
  const { service } = useParams()
  const [serviceData, setServiceData] = useState([])

  const vehicleDataEndpoints = {
    canoe: process.env.CANOE,
    jetski: process.env.JETSKI,
    kayak: process.env.KAYAK,
    scuba: process.env.SCUBA,
    waterski: process.env.WATERSKI,
    windsurf: process.env.WINDSURF,
  }

  useEffect(() => {
    const fetchserviceData = async () => {
      const response = await axios(vehicleDataEndpoints[service])
      setServiceData(response.data)
    }
    fetchserviceData()
  }, [])

  return (
    <div className={`vehicle-details ${service}`}>
      <div className="vehicle-details_content">
        <h1>{service}</h1>
      </div>
    </div>
  )
}

export default VehicleDetails
