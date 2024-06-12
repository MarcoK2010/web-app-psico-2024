import React from 'react'
import DropDownCalendar from './DropDownCalendar'
import DropDownHour from './DropDownHour'

const FirstSectionForm = () => {
  return (
    <>
        <div className='flex flex-wrap justify-evenly pt-10 '>
            <DropDownCalendar/>
            <DropDownHour/>
        </div>
    </>
  )
}

export default FirstSectionForm