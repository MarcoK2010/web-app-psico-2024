import axios from "axios";



// Función que realiza la solicitud POST
const refreshAuth = async (refreshToken) => {

    const token = localStorage.getItem('Token')
    const url = 'http://127.0.0.1:8000/api/v1/auth/token/verify/'; // Reemplaza con tu URL de API
    const data = {
        "token": token
    // Enviar el refreshToken en el cuerpo de la solicitud
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Respuesta del servidor:', response.data);
        return response.data; // Retornar la respuesta para utilizarla en otra parte
    } catch (error) {
        console.error('Error al realizar la solicitud POST:', error);
        return null; // Retornar null en caso de error
    }
};

export default refreshAuth;
