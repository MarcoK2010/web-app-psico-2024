import React from 'react'
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import DropDownCalendar from './components/DropDownCalendar';
import DropDownHour from './components/DropDownHour';
import FirstSectionForm from './components/FirstSectionForm';
const Appointment = () => {
  return (
   <>

   <section className='w-full'>
    <NavBar/>
    <FirstSectionForm/>
     <SideBar />
     
   </section>
    
   </>
  )
}

export default Appointment