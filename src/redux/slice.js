import { createSlice } from "@reduxjs/toolkit";
import refreshAuth from "../api/auth.js"; 

// Reducer de Redux
export const slice = createSlice({
    name: "task",
    initialState: ["this is initial state"], // Estado inicial
    reducers: {
        // Puedes agregar funciones para actualizar el estado aquí
    }
});

// Verificar y crear espacios de local host para futuros token y refresh
const initializeTokens = () => {
    if (!localStorage.getItem('Token')) {
        console.log('No existe Token');
        localStorage.setItem("Token", ""); // Puedes cambiar el valor por defecto
    } else {
        console.log('Existe Token');
    }

    if (!localStorage.getItem('Refresh')) {
        console.log('No existe Refresh');
        localStorage.setItem("Refresh", ""); // Puedes cambiar el valor por defecto
    } else {
        console.log('Existe Refresh');
    }
};

initializeTokens();

// Llamada a refreshAuth y actualizar el token en localStorage si es necesario
const checkAuthAndUpdate = async () => {
    const accessToken = localStorage.getItem('Token');
    const refreshToken = localStorage.getItem('Refresh');

    if (accessToken && refreshToken) {
        const data = await refreshAuth(refreshToken);
        if (data && data.access) {
            localStorage.setItem('Access', data.access);
            console.log('Nuevo token de acceso guardado:', data.access);
        } else {
            console.log('Error al refrescar el token o respuesta inválida.');
        }
    } else {
        console.log('Tokens de acceso o actualización no encontrados en localStorage.');
    }
};

checkAuthAndUpdate();

export default slice.reducer;