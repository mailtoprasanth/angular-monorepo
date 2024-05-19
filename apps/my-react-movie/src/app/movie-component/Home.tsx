import * as React from 'react';
import MovieListing from './MovieListing';
import { useDispatch } from 'react-redux';
import movieAPIs from '../apis/movieAPIs';
import { apikey } from '../apis/APIKey';
import { fetchAsyncMovie, fetchAsyncSeries } from '../features/movieSlice';
import { useEffect } from 'react';
import { ThunkDispatch } from '@reduxjs/toolkit';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const fetchMovie = async () => {
    dispatch(fetchAsyncMovie());
    dispatch(fetchAsyncSeries());
  };

  useEffect(() => {
    fetchMovie();
  }, [dispatch]);

  return (
    <div className="container">
      <MovieListing />
    </div>
  );
};

export default Home;
