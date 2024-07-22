import React from 'react'
import DropDownCalendar from './DropDownCalendar'
import DropDownHour from './DropDownHour'
import DropDownPlace from './DropDownPlace'
import DropDownPacient from './DropDownPacient'

const FirstSectionForm = () => {
  return (
    <>
        <div className='flex flex-wrap justify-evenly pt-10 '>
            <DropDownCalendar/>
            <DropDownHour/>
           
        </div>
        <div className='flex flex-wrap justify-evenly pt-10 '>
        <DropDownPlace/>
        <DropDownPacient/>
        </div>
    </>
  )
}

export default FirstSectionForm