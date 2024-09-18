import React, { useState, useEffect } from "react";
import axios from "axios";
import './circularChard.css';

const CircularChard = () => {
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


  const asistenciaPorcentaje = data ? (data.assistance / data.totalAppointments) * 100 : 0;

  return (
    <>
      <div className="col-start-3 col-end-3 pb-10 md:px-20">
        <div className="card w-80 py-4 shadow-2xl">
          <div className="card-body items-center text-center">
            <h1 className='font-bold text-2xl'>
              Assistance
            </h1>
            <div className="radial-progress"
              style={{
                "--value": asistenciaPorcentaje,
                "--size": "7.5rem",
                "--thickness": "1rem"
              }}
              role="progressbar">
              <h1 className='text-black text-2xl'>
                {asistenciaPorcentaje.toFixed(0)}%
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CircularChard;