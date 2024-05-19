// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Footer from './movie-component/Footer';
import Header from './movie-component/Header';
import MovieDetails from './movie-component/MovieDetails';
import MovieListing from './movie-component/MovieListing';
import PageNotFound from './movie-component/PageNotFount';
import Home from './movie-component/Home';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div className="container mx-auto w-full h-full">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movie/:id" Component={MovieDetails} />
          <Route Component={PageNotFound} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
