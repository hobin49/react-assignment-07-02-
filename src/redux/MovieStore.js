import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   movies: [],
};


const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    updateMovieStore: (state, action) => {
      console.log(action);
      return (state = {
        ...state,
        ...action.payload,
      })
    },
  }
});

export default MovieSlice.reducer;
export const { updateMovieStore } = MovieSlice.actions;
