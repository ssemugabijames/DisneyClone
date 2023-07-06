import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    popular: null,
    hollywood: null,
    newTo: null,
    kidsTv: null,
    original: null,
    trending: null
}

const MovieReducer = createSlice({
    name: "Movie",
    initialState,
    reducers: {
        setDisneyMovies: ( state, action) =>{
            state.popular = action.payload.popular;
            state.hollywood = action.payload.hollywood;
            state.newTo = action.payload.newTo;
            state.kidsTv = action.payload.kidsTv;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        },
    },
});

export const { setDisneyMovies } = MovieReducer.actions;

export const selectPopular = (state) => state.movie.popular;
export const selectHolloywood = (state) => state.movie.hollywood;
export const selectNewTo = (state) => state.movie.newTo;
export const selectKidsTv = (state) => state.movie.kidsTv;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default MovieReducer.reducer;