import React, { useState, useEffect } from "react";
import "./dateCard.css";
import axios from "axios";

function EventCard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const url = "http://127.0.0.1:8000/api/v1/";
    const urlAxios = url + "activity/pending/";

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
    <div className="activity-cards">
      {error && <p>Error al obtener datos: {error.message}</p>}
      {data.length > 0 ? (
        data.map((activity) => (

          <div key={activity.id} className="card lg:card-side bg-base-100 shadow-xl w-60 lg:w-96 lg:h-64">
            <div className="date2 font-bold text-5xl content-center text-center p-5 ">
              <h1>
                {new Date(activity.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
              </h1>
              <h1 className="text-black">
                {new Date(activity.date).getDate()}
              </h1>
            </div>
            <div className="card-body">
              <h2 className="font-bold text-base">Place</h2>
              <p className="font-semibold text-base">{activity.place}</p>
              <h2 className="font-bold text-base">Subjet</h2>
              <p className="font-semibold text-base">{activity.activityType}</p>
              <h2 className="font-bold text-base">Hour</h2>
              <p className="font-semibold text-base">{activity.hour}</p>
            </div>
          </div>

        ))
      ) : (
        <p>No hay actividades pendientes</p>
      )}
    </div>
  );
}

export default EventCard;
