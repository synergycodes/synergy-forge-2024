import { Injectable } from '@angular/core';
import Movie from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies = [
    new Movie('1', 'The Shawshank Redemption', 'drama'),
    new Movie('2', 'Notting Hill', 'Romantic comedy'),
    new Movie('3', 'Forest Gump', 'drama'),
    new Movie('4', 'Shutter Island', 'thriller'),
    new Movie('5', 'Prisoners', 'thriller')
  ];

  getMovies(): Array<Movie> {
    return this.movies;
  }

  getMovieById(id: string): Movie {
    const defaultMovie = new Movie('1', 'The Shawshank Redemption', 'drama');

    return this.movies.find(m => m.id === id) ?? defaultMovie;
  }
}
