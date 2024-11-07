import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'

import api from '../services/api'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store

export type RootReducer = ReturnType<typeof store.getState>

/*
1 - Create a store folder with a root file that will contain the store
2 - Import `configureStore` from the `@reduxjs/toolkit`
3 - Utilizing the above method, create a variable that will be our store, with an object as configuration of the store. That will contain our reducer root
4 - Create a type for the store using ReturnType<typeof store.getState>
*/
