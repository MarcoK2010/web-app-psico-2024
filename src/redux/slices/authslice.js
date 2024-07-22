import { createSlice } from "@reduxjs/toolkit";

const initialState= {accessToken:""}


// Reducer de Redux
export const authSlice = createSlice({
    name: "auth",
    initialState , // Estado inicial
    reducers: {
		setAccessToken: (state, actions) => {
			return { ...state, accessToken: actions.payload };
		},    
    }
});
  
export const {
	setAccessToken,
} = authSlice.actions;
export default authSlice.reducer; 