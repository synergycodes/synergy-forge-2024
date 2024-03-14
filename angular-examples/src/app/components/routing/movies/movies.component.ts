import { Component, OnInit, inject } from '@angular/core';
import Movie from '../../../models/movie';
import { MoviesService } from '../../../services/movies.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  private readonly moviesService = inject(MoviesService);

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }
}
