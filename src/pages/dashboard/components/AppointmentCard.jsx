import React, { useState, useEffect } from 'react';
import "./dateCard.css";
import axios from "axios";

function AppointmentCard() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const url = "http://127.0.0.1:8000/api/v1/";
    const urlAxios = url + "appointment/pending";

    try {
      const token = JSON.parse(localStorage.getItem("token"))["token"];
      console.log(token);

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const response = await axios.get(urlAxios, config);
      console.log("Respuesta del servidor:", response.data);
      setData(response.data);

    } catch (error) {
      console.log("Algo salió mal en la solicitud GET", error);
      setError(error);
    }
  };

  // useEffect para ejecutar fetchData cuando el componente se monte
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="appointment-cards">
      {error && <p>Error al obtener datos: {error.message}</p>}
      {data.length > 0 ? (
        data.map((appointment, index) => (
          <div key={index} className="card lg:card-side bg-base-100 shadow-xl w-60 lg:w-96 lg:h-64">
            <div className="date font-bold text-5xl content-center text-center p-5">
              <h1>
                {new Date(appointment.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
                <h1 className="text-black">{new Date(appointment.date).getDate()}</h1>
              </h1>
            </div>
            <div className="card-body">
              <h2 className="font-bold text-base">Place</h2>
              <p className="font-semibold text-base">{appointment.patient.place}</p>
              <h2 className="font-bold text-base">Psychologist</h2>
              <p className="font-semibold text-base">
                {appointment.doctor.firstName} {appointment.doctor.lastName}
              </p>
              <h2 className="font-bold text-base">Hour</h2>
              <p className="font-semibold text-base">{appointment.hour}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No hay citas pendientes</p>
      )}
    </div>
  );
}

export default AppointmentCard;
