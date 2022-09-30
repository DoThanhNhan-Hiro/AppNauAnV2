
import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './slice/favorite'
import viewedReducer from './slice/viewed'
const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        viewed: viewedReducer
    },
  })
export default store;