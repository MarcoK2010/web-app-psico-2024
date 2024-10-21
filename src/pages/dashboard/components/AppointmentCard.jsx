import React, { useState, useEffect } from 'react';
import "./dateCard.css";
import axios from "axios";

function AppointmentCard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const url = "http://127.0.0.1:8000/api/v1/";
    const urlAxios = url + "appointment/pending/";

    const token = JSON.parse(localStorage.getItem("access"));
    if (!token) {
      setError(new Error("Token no encontrado"));
      return;
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      const response = await axios.get(urlAxios, config);
      setData(response.data);
    } catch (error) {
      setError(error);
      console.log("Algo salió mal en la solicitud GET", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="appointment-cards">
      {error && <p>Error al obtener datos: {error.message}</p>}
      {data.length > 0 ? (
        data.map((appointment) => (
          <div key={appointment.id} className="card lg:card-side bg-base-100 shadow-xl w-60 lg:w-96 lg:h-64">
            <div className="date font-bold text-5xl content-center text-center p-5">
              <h1>
                {new Date(appointment.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
              </h1>
              <h1 className="text-black">
                {new Date(appointment.date).getDate()}
              </h1>
            </div>
            <div className="card-body">
              <h2 className="font-bold text-base">Place</h2>
              <p className="font-semibold text-base">{appointment.patient.place}</p>
              <h2 className="font-bold text-base">Psychologist</h2>
              <p className="font-semibold text-base">
                {appointment.doctor?.firstName} {appointment.doctor?.lastName}
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