import React, {useState} from 'react'
import './Home.css'
import Banner from './Banner';
import Gallery from './Gallery';
import Description from './Description';
import Booking from './Booking';
import {animated, useTransition} from 'react-spring';

function Home() {
  const [showBooking, setShowBooking] = useState(false);
  const transition = useTransition(showBooking, {
    config:{friction: 15,},
    from: {position: 'absolute', opacity:0},
    enter: { opacity: 1},
    leave: { opacity: 0},
    trail: 100,
  });
  return (
    <div className ='home'>
      <Gallery/>
      <Banner showBooking={() => {
        setShowBooking(!showBooking);
      }} />
      {transition((style, item) => {
        return !item ? <animated.div style={style} className='description'><Description/></animated.div> : <animated.div style={style} className='booking'><Booking/></animated.div>
      })
    }
    </div>
  )
}

export default Home