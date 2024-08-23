import React from 'react'
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import AddAppoinment from './components/AddAppoinment';
import FirstSectionForm from './components/FirstSectionForm';

import SecondSectionForm from './components/SecondSectionForm';


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
    <SecondSectionForm/>
    <AddAppoinment/>
     <SideBar color3={'#ff076f'}/>
     
   </section>
    
   </>
  )
}

export default Appointment