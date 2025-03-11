
import { api, buildQueryString } from "./AxiosInstance";
import { Endpoints } from "./Endpoint";
import { MovieDetail } from "./models/MovieDetail";

export const fetchAllMovies = async (): Promise<MovieDetail[]> => {
  try {
    const response = await api.get<MovieDetail[]>(Endpoints.allMovies);
    return response.data;
  }
  catch (ex) {
    console.error("Error fetching movies:", ex);
    throw new Error("Failed to fetch movies");
  }
};


export const fetchMoviesByQuery = async (
  queryParams: string
): Promise<MovieDetail[]> => {
  try {
    const queryStringParams = buildQueryString(queryParams);
    const queryString = queryStringParams ? `?${queryStringParams}` : "";
    const response = await api.get<MovieDetail[]>(
      `${Endpoints.searchMovies}${queryString}`
    );
    return response.data;
  }
  catch (ex) {
    console.error("Error fetching movies by query:", ex);
    throw new Error("Failed to fetch movies by query");
  }
};
