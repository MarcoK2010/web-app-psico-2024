import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authslice'
//en este lugar estara almacenado los datos+
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },

});