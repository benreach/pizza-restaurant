"use client"

import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2025-04-10")
function CountDown() {
  return (
<Countdown date={endingDate} className='font-bold text-4xl md:text-6xl lg:text-7xl text-red-500'/>
  )
}

export default CountDown