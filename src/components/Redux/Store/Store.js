
import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../Reducers/MovieReducer";
import UserReducer from "../Reducers/UserReducer";
export const Store = configureStore({
  reducer: {
    movie: MovieReducer, 
    user: UserReducer
  }
 
})


