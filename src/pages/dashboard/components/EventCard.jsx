import React from "react";
import "./dateCard.css";
 
function EventCard() {

  /*
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
*/


  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-60 lg:w-96 lg:h-64">
      <div className="date2 font-bold text-5xl content-center text-center p-5 ">
        <h1>
          MAY
          <p className="text-black">30</p>
        </h1>
      </div>
      <div className="card-body">
        <h2 className="font-bold text-base">Place</h2>
        <p className="font-semibold text-base">El Semillero Hall</p>
        <h2 className="font-bold text-base">Subjet</h2>
        <p className="font-semibold text-base">Mind and Healt</p>
        <h2 className="font-bold text-base">Hour</h2>
        <p className="font-semibold text-base">8:00 - 10:00</p>
      </div>
    </div> 
  );
}

export default EventCard;
