import { MovieDetail } from "../models/MovieDetail";

export const mockMovies: MovieDetail = {
    "Title": "Black Space",
    "Year": "2020–",
    "imdbID": "tt13660638",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzAxMzhkZTUtMzRmYS00YTkzLTg4ODctNjhmNGIzNTM4MmU3XkEyXkFqcGc@._V1_SX300.jpg",
    "Director": "John Doe",
    "Plot": "An ordinary morning at a small-town High School turns into a nightmare when anonymous figures in masks have committed a massacre leaving four dead students.",
    "imdbRating": "6.7"
};

export const mockMoviesList: MovieDetail[] = [
    { 
        imdbID: "1", 
        Title: "Inception", 
        Director: "Christopher Nolan", 
        Year: "2010", 
        Poster: "url", 
        Plot: "A dream within a dream", 
        imdbRating: "8.8", 
        Type: "movie" 
    }
];