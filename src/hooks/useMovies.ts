import { useState, useEffect } from "react";
import { MovieDetail } from "../lib/models/MovieDetail";
import { fetchAllMovies } from "../lib/MoviesAPI";

export const useMovies = (): [MovieDetail[], boolean, string|null, ()=>void, React.Dispatch<React.SetStateAction<MovieDetail[]>>]  => {
  const [allMovies, setAllMovies] = useState<MovieDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getAllMovies = async () => {
    try {
      const response: MovieDetail[] = await fetchAllMovies();
      setAllMovies(response);
    } catch (ex) {
      console.error("Error while getting all movies", ex);
      setError((ex as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);
  return [allMovies, loading, error, getAllMovies, setAllMovies];
}