import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {apiBaseURI} from '../app-params';
import {MoviesDto} from '../dto/movies-dto';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getMovie() {
    return this.http.get<MoviesDto>(`${apiBaseURI}/movie`);
  }
}
