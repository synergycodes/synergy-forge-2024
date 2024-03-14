import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Movie from '../../../../models/movie';
import { MoviesService } from '../../../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie!: Movie;

  private readonly moviesService = inject(MoviesService);
  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'] ?? '1';
      this.movie = this.moviesService.getMovieById(id);
    });
  }
}
