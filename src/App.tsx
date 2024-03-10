import React, { useEffect, useState } from 'react';
import './App.css';
import movieData from './MovieData.json';

const mds = movieData.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(mds);

  const addMovie = () => {
    setListOMovies([
      ...mds,
      {
        Category: 'Action',
        Director: 'Christopher Nolan',
        Rating: 'PG-13',
        Title: 'Inception',
        Year: '2010',
      },
      {
        Category: 'Action',
        Director: 'Christopher Nolan',
        Rating: 'PG-13',
        Title: 'Interstellar',
        Year: '2014',
      },
    ]);
  };
  return (
    <>
      <h2> This is the movie colleciton list</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {listOMovies.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={addMovie}>Add Movie</button>
    </>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date());

  function refreshClock() {
    setTime(new Date());
  }
  useEffect(() => {
    const timerid = setInterval(refreshClock, 1000);
    return () => clearInterval(timerid);
  }, []);
  return (
    <div>
      <pre>{new Date().toLocaleTimeString()}</pre>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <MovieList />
      <Clock />
    </div>
  );
}

export default App;
