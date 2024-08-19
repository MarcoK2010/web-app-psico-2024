import React from 'react'
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import FirstSectionForm from './components/FirstSectionForm';

import SecondSectionForm from './components/SecondSectionForm';


const Appointment = () => {

  return (
   <>
   <section className='w-full'>
    <NavBar/>
    <FirstSectionForm/>
    <SecondSectionForm/>
     <SideBar />
     
   </section>
    
   </>
  )
}

export default Appointment