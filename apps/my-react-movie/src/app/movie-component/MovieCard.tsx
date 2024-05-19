import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IMovie {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
  }
interface IMovieCardProps {
    movies: IMovie,
}

const MovieCard: React.FunctionComponent<IMovieCardProps> = ({movies}) => {
  return (
    <div className='card w-72 flex mt-5'>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
          <img className="rounded-t-lg w-screen" src={movies.Poster} alt={movies.Title}  />
     
      <div className="p-5">
       
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movies.Title} </h5>
         
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movies.Year}</p>
          {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" stroke-line-join="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a> */}
          <Link to={'/movie/'+movies.imdbID}>Read</Link>
      </div>
  </div>
    </div>
  );
};

export default MovieCard;
