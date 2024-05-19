import {
  AsyncThunkAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import movieAPIs from '../apis/movieAPIs';
import { apikey } from '../apis/APIKey';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';

const initialState = {
  movies: [],
  series: [],
};

export const fetchAsyncMovie = createAsyncThunk(
  'fetchAction/Movie',
  async () => {
    const response = await movieAPIs.get(
      `?apikey=${apikey}&s=${'harry'}&type=${'movie'}`
    );
    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  'fetchAction/Series',
  async () => {
    const response = await movieAPIs.get(
      `?apikey=${apikey}&s=${'friends'}&type=${'series'}`
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovie.pending, () => {
      console.log('pending');
    });
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(fetchAsyncMovie.fulfilled, (state, { payload }) => {
      return { ...state, movies: payload };
    });
    builder.addCase(fetchAsyncMovie.rejected, () => {
      console.log('fetch data failed');
    });
    builder.addCase(fetchAsyncSeries.fulfilled, (state, { payload }) => {
      return { ...state, series: payload };
    });
  },
});

export const { addMovies } = movieSlice.actions;
export const getMovies = (state: { movies: { movies: any } }) =>
  state.movies.movies;
export const getSeries = (state: { movies: { series: any } }) =>
  state.movies.series;
export default movieSlice.reducer;
