import EventContainer from '@/components/Events/EventContainer'
import React from 'react'

const Events = () => {
  return (
    <>
        <EventContainer
            bgColor='--black'
            boxColor='--white'
            caption='TMC JOGGING'
            textColor='--white'
            stroke='#fff'
            fill='#000'
        />

        <EventContainer
            bgColor='--white'
            boxColor='--black'
            caption='MATRICULATION'
            textColor='--red'
            stroke='#E60012'
            fill='#fff'
        />

        <EventContainer
            bgColor='--red'
            boxColor='--white'
            caption='CONVOCATION'
            textColor='--black'
            stroke='#fff'
            fill='#00'
        />
    </>
  )
}

export default Events