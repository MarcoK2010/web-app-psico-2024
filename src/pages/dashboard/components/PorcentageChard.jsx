import React, { useState, useEffect } from "react";
import axios from "axios";

const PorcentageChard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const url = "http://127.0.0.1:8000/api/v1/";
    const urlAxios = url + "goal/metrics";

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


  const appointments = data ? data.appointments : 0;
  const totalAppointments = data ? data.totalAppointments : 1;
  const asistenciaPorcentaje = (appointments / totalAppointments) * 100;

  return (
    <div className="col-start-3 col-end-3 pb-10 md:px-20">
      <div className="card w-80 py-4 shadow-2xl">
        <div className="card-body items-center text-center">
          <h1 className='font-semibold text-2xl'>Monthly Goal</h1>
          <h1 className='font-bold text-6xl'>{asistenciaPorcentaje.toFixed(0)}%</h1>
          <div>
            <progress
              className="progress progress-success w-56 h-5"
              value={asistenciaPorcentaje}
              max="100"
            ></progress>
          </div>
          {error && <p className="text-red-500">Error: {error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default PorcentageChard;