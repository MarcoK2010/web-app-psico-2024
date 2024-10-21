

import axios, { AxiosInstance } from 'axios';

const BASE_URL = '"http://127.0.0.1:8000//api/v1"';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});

// Función para configurar el token de acceso
const setAccessToken = (token: string) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};

// Exportar la instancia y la función para establecer el token
export { axiosInstance, setAccessToken };