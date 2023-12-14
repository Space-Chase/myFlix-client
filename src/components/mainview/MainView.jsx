import { useState } from "react";
import {MovieCard} from "../moviecard/MovieCard";
/*import {MovieView} from "../movieview/MovieView"; */
export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "A",
      image:
        "",
     director: "",
    },
    {
      id: 2,
      title: "B",
      image:
        "",
     director: "",
    },
    {
      id: 3,
      title: "C",
      image:
        "",
     director: "",
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
