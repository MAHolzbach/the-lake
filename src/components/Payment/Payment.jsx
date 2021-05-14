import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import DatePicker from 'react-date-picker'
import AppContext from '../../AppContext'

import paymentCard from '../../images/payment.png'

const Payment = () => {
  const { selectedBoat } = useContext(AppContext)

  const history = useHistory()
  if (!selectedBoat) {
    history.push('/boats')
  }

  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const totalDays = endDate?.getDate() - startDate?.getDate() + 1
  const finalPrice = selectedBoat?.price * totalDays

  return (
    <div className="payment">
      <img
        src={paymentCard}
        alt="credit card"
        className="payment__card-image"
      />
      <div className="payment__date-select">
        <div className="payment__date-select__start">
          <p className="payment__date-select__start__text">Pickup</p>
          <DatePicker
            onChange={setStartDate}
            value={startDate}
            className="date-picker"
            minDate={new Date()}
          />
        </div>
        <div className="payment__date-select__end">
          <p className="payment__date-select__end__text">Return</p>
          <DatePicker
            onChange={setEndDate}
            value={endDate}
            className="date-picker"
            minDate={startDate}
          />
        </div>
      </div>
      <div className="payment__details">
        <p className="payment__details__text">Order Details</p>
        <div className="payment__details__time">
          <p className="payment__details__time__text">
            {selectedBoat?.renderName}:
          </p>
          <p className="payment__details__time__price">
            {totalDays || '0'} days
          </p>
        </div>
        <div className="payment__details__total">
          <p className="payment__details__total__text">Total:</p>
          <p className="payment__details__total__price">${finalPrice || '0'}</p>
        </div>
      </div>
      <button className="payment__button">Pay</button>
    </div>
  )
}

export default Payment
