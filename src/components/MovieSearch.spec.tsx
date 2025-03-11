import { render, screen, fireEvent } from "@testing-library/react";
import MovieSearch from "./MovieSearch";
import { fetchMoviesByQuery } from "../lib/MoviesAPI";
import { mockMoviesList } from "../lib/mockData/mockMovies";

jest.mock("../lib/MoviesAPI", () => ({
  fetchMoviesByQuery: jest.fn(),
}));

describe("MovieSearch Component", () => {
  const mockSetAllMovies = jest.fn();
  const mockGetAllMovies = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the search input and button", () => {
    render(<MovieSearch setAllMovies={mockSetAllMovies} getAllMovies={mockGetAllMovies} />);

    expect(screen.getByPlaceholderText("Enter search text")).toBeDefined();
    expect(screen.getByRole("button", { name: "Search" })).toBeDefined();
  });

  it("updates the input value when typing", () => {
    render(<MovieSearch setAllMovies={mockSetAllMovies} getAllMovies={mockGetAllMovies} />); 

    const input = screen.getByPlaceholderText("Enter search text") as HTMLInputElement;    
    fireEvent.change(input, { target: { value: "Inception" } });
    expect(input.value).toBe("Inception");
  });

  it("calls fetchMoviesByQuery when searching with a query", async () => {    
    (fetchMoviesByQuery as jest.Mock).mockResolvedValue(mockMoviesList);

    render(<MovieSearch setAllMovies={mockSetAllMovies} getAllMovies={mockGetAllMovies} />);  
      
    const input = screen.getByPlaceholderText("Enter search text") as HTMLInputElement;
    const button = screen.getByRole("button", { name: "Search" });
    fireEvent.change(input, { target: { value: "Inception" } });
    fireEvent.click(button);
    expect(fetchMoviesByQuery).toHaveBeenCalledWith("Inception");
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(mockSetAllMovies).toHaveBeenCalledWith(mockMoviesList);
  });

  it("calls getAllMovies when searching with an empty query", () => {
    render(<MovieSearch setAllMovies={mockSetAllMovies} getAllMovies={mockGetAllMovies} />);    
    const button = screen.getByRole("button", { name: "Search" });
    fireEvent.click(button);
    expect(fetchMoviesByQuery).not.toHaveBeenCalled();
    expect(mockGetAllMovies).toHaveBeenCalled();
  });
});
