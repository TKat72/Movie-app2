import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducer: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    },

})
console.log("Im here", movieSlice.actions)
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
