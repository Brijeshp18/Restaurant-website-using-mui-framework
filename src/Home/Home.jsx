import React from 'react'
import Welcome from '../pages/welcom/Welcome'
import Partner from '../pages/partner/Partner'
import Booking from '../pages/booking/Booking'
import Ambience from '../pages/ambiance/Ambience'
import Delivery from '../pages/Delivery/Delivery'
import Dishes from '../pages/dishes/Dishes'

function Home() {
  return (
   <>
   <Welcome/>
   <Partner/>
   <Booking/>
   <Dishes/>
   <Ambience/>
   <Delivery/>
   
   
   </>
  )
}

export default Home