import React from 'react'
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import AddAppoinment from './components/AddAppoinment';
import FirstSectionForm from './components/FirstSectionForm';

import SecondSectionForm from './components/SecondSectionForm';


const Appointment = () => {

  return (
   <>
   <section className='w-full'>
    <NavBar/>
    <FirstSectionForm/>
    <SecondSectionForm/>
    <AddAppoinment/>
     <SideBar color3={'#ff076f'}/>
     
   </section>
    
   </>
  )
}

export default Appointment