import { MovieDetail } from "../lib/models/MovieDetail";

const MovieCard = ({
  movie
}: {
  movie: MovieDetail;
}) => {
  return (
    <div key={movie.imdbID} className="movie-item">
      <img src={movie.Poster} alt={movie.Title}></img>
      <div className="p-2 text-center">
        <h3>{movie.Title}</h3>
        <h4>Directed By : {movie.Director}</h4>
        <p>Plot : {movie.Plot}</p>
        <p className="text-gray-500">Release Year : {movie.Year}</p>
        <p className="text-yellow-500 font-semibold">
          ⭐ IMDb: {movie.imdbRating}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;