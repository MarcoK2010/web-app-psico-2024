import React from 'react'
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import DropDownCalendar from './components/DropDownCalendar';
import DropDownHour from './components/DropDownHour';
import FirstSectionForm from './components/FirstSectionForm';
import axios from "axios";


const Appointment = () => {
  
const url = "http://127.0.0.1:8000//api/v1";



const urlAxios = url + "activity/pending/";


try {
  const respose = axios.get(urlAxios);
  console.log("Respuesta del servidor", respose.data);
  return respose.data;
  
} catch (error) {
  console.log("Algo salio mal en el login");
};


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