import React, { useState, useCallback } from 'react';

import { api } from '../Services/api';

import './Styles/App.scss';

const App = () => {
  const [title, setTitle] = useState('');
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');

  const searchMovie = useCallback(async () => {
    const response = await api.GET(`?apikey=922db138&t=${title}`);
    if (response.Error) {
      setMovie({});
      setError(response.Error);
    } else {
      setError('');
      setMovie(response);
    }
  }, [title, setError]);

  return (
    <section className='app'>
      <div className='content'>
        <div className='action'>
          <input name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <button onClick={searchMovie}>Search</button>
        </div>
        { Object.keys(movie).length > 0 &&
          <div className='movie'>
            <p>Title: {movie.Title}</p>
            <p>{movie.Released.split(' ')[2]}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Plot}</p>
            <ul>
              {movie.Genre.split(', ').map((genre) => {
                return (
                  <li key={genre}>{genre}</li>
                );
              })}
            </ul>
          </div>
        }
        {error && <label className='error'>{error}</label>}
      </div>
    </section>
  );
}

export { App };
