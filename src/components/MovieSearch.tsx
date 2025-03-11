import { useState } from "react";
import { MovieDetail } from "../lib/models/MovieDetail";
import { fetchMoviesByQuery } from "../lib/MoviesAPI";

interface MovieSearchProps {
    setAllMovies: React.Dispatch<React.SetStateAction<MovieDetail[]>>;
    getAllMovies: () => void;
}

const MovieSearch: React.FC<MovieSearchProps> = ({setAllMovies, getAllMovies}) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = async () => {
    try {
      if (searchText) {
        const response: MovieDetail[] = await fetchMoviesByQuery(searchText);
        setAllMovies(response);
      } else {
        await getAllMovies();
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Enter search text"
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default MovieSearch;
