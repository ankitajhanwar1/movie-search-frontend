import { useMovies } from "../hooks/useMovies";
import "./Movies.css";
import MovieCard from "./MovieCard";
import MovieSearch from "./MovieSearch";

const MoviesBoard: React.FC = () => {
  const [allMovies, loading, error, getAllMovies, setAllMovies] = useMovies();  

  if (loading)
    return <p className="text-center text-gray-500">Loading movies...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  return (
    <>
      <MovieSearch setAllMovies={setAllMovies} getAllMovies={getAllMovies}/>
      <h2 className="text-2xl font-semibold text-center mb-4">Movies List</h2>
      {allMovies.length === 0 && <h3>No Movies found!</h3>}
      {allMovies.length > 0 && (
        <div className="movie-list">
          {allMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID}/>
          ))}
        </div>
      )}
    </>
  );
};

export default MoviesBoard;
