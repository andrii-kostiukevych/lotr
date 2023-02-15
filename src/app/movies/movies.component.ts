import { Component, OnInit } from '@angular/core';
import {tap} from 'rxjs';
import {MovieTypeData} from '../books/types/movie-type-data';
import {MoviesService} from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies: MovieTypeData[] = [];
  public columns = [
    {
      label: 'Name',
      prop: 'name'
    },
    {
      label: 'Tomatoes Score',
      prop: 'rottenTomatoesScore'
    },
    {
      label: 'Award Wins',
      prop: 'academyAwardWins'
    },
    {
      label: 'Budget',
      prop: 'budgetInMillions'
    },
    {
      label: 'Revenue In Millions',
      prop: 'boxOfficeRevenueInMillions'
    },
    {
      label: 'Run Time (in minutes)',
      prop: 'runtimeInMinutes'
    }
  ]

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovie()
      .pipe(tap((data) => this.movies = data.docs))
      .subscribe();
  }

}
