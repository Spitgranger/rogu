import React from 'react'
import './Booking.css'
import Calendar from "./Calendar"
import SwipeButton from './SwipeButton'

function Booking() {
  return (
    <div className='booking'>
      <div className='breakdown'>
        <h1>Reservation Breakdown</h1>
        <h3>32 Hours over 4 days: <span>412.16</span></h3>
        <h3>Booking Fee: <span>30.32</span></h3>
        <h2>Total: <span>442.47</span></h2>
        <SwipeButton color='#ff385c' text='SWIPE TO BOOK'/>
      </div>
    </div>
  )
}

export default Booking