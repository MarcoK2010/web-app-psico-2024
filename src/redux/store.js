import {configureStore} from '@reduxjs/toolkit'
import Reducer from '../redux/slice'
//en este lugar estara almacenado los datos+
export const store = configureStore({
  reducer: {
    task: Reducer
  },

});

