import * as React from 'react';
import { useSelector } from 'react-redux';
import { getMovies, getSeries } from '../features/movieSlice';
import MovieCard from './MovieCard';

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface data {
  Response: boolean;
  Search: IMovie[];
  totalResults: string;
}
interface IMovieListingProps {}

const MovieListing: React.FunctionComponent<IMovieListingProps> = (props) => {
  const movies = useSelector(getMovies);
  const movieCardRender = (): JSX.Element[] => {
    return movies.Search?.map(
      (data: IMovie, index: React.Key | null | undefined) => {
        return <MovieCard key={index} movies={data} />;
      }
    );
  };

  const series = useSelector(getSeries);
  const seriesCardRender = (): JSX.Element[] => {
    return series.Search?.map(
      (data: IMovie, index: React.Key | null | undefined) => {
        return <MovieCard key={index} movies={data} />;
      }
    );
  };
  // console.log(movies);

  return (
    <div className="">
        <h2 className='font-bold m-4'> Movies</h2>
      <div className=" movie-wrap flex flex-wrap justify-start gap-5">
    
        {movieCardRender()}
      </div>
     <h5 className='font-bold m-4'>Series</h5>
      <div className=" movie-wrap flex flex-wrap justify-start gap-5">
        
        {seriesCardRender()}
      </div>
     
    </div>
  );
};

export default MovieListing;
