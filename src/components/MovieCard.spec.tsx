import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { mockMovies } from "../lib/mockData/mockMovies";
import MovieCard from "./MovieCard";


describe("MovieCard Component", () => {
  it("renders movie details correctly", async () => {
    render(<MovieCard movie={mockMovies} />);

    // Check if elements are rendered correctly
    expect(screen.getByText(`${mockMovies.Title}`)).toBeInTheDocument();
    expect(screen.getByText(`Directed By : ${mockMovies.Director}`)).toBeInTheDocument();
    expect(screen.getByText(`Plot : ${mockMovies.Plot}`)).toBeInTheDocument();
    expect(screen.getByText(`Release Year : ${mockMovies.Year}`)).toBeInTheDocument();
    expect(screen.getByText(`⭐ IMDb: ${mockMovies.imdbRating}`)).toBeInTheDocument();

    // Check if image is loaded with correct src
    const img = screen.getByAltText('Black Space');
    expect(img).toHaveAttribute("src", "https://m.media-amazon.com/images/M/MV5BNzAxMzhkZTUtMzRmYS00YTkzLTg4ODctNjhmNGIzNTM4MmU3XkEyXkFqcGc@._V1_SX300.jpg");
  });
});
