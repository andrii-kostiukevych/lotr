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
  public movie?: MovieTypeData;
  public showModal = false;
  public movies: MovieTypeData[] = [];
  public columns = [
    {
      label: 'Name',
      prop: 'name',
      sorter: (a: MovieTypeData, b: MovieTypeData) => {
        return a.name.localeCompare(b.name);
      },
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
      prop: 'budgetInMillions',
      align: 'right'
    },
    {
      label: 'Run Time (in minutes)',
      prop: 'runtimeInMinutes',
      align: 'right',
      sorter: (a: MovieTypeData, b: MovieTypeData) => {
        return a.runtimeInMinutes - b.runtimeInMinutes;
      }
    },
    {
      label: 'Action',
      render: (createElement: any, value: any, record: MovieTypeData) => {
        return createElement(
          'vega-button',
          {
            'data-shrink': 0,
            'size': 'small',
            'onVegaClick': () => {
              this.movie = record;
              this.showModal = true
            },
          },
          'Detail',
        );
      }
    }
  ]

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovie()
      .pipe(tap((data) => this.movies = data.docs))
      .subscribe();
  }

  public onVegaClick() {
    this.showModal = false;
  }

}
