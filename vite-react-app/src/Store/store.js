import { configureStore } from '@reduxjs/toolkit'

import orderReducer from './slice/orderSlice'
import  userReducer  from './slice/userSlice'
import  serchReduser  from './slice/serchSlice'
import menuReduser from './slice/menuSlice'

export const store = configureStore({
    reducer: {
      menu:menuReduser,
      order:orderReducer,
      user:userReducer,
      serch:serchReduser,
    },
  }) 