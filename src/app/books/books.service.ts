import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {apiBaseURI} from '../app-params';
import {BooksDto} from '../dto/books-dto';
import {ChaptersDto} from '../dto/chapters-dto';

@Injectable()
export class BooksService {


  constructor(private http: HttpClient) {}

  public getBooks(): Observable<BooksDto> {
    return this.http.get<BooksDto>(`${apiBaseURI}/book`);
  }

  public getChapters(id: string): Observable<ChaptersDto> {
    return this.http.get<ChaptersDto>(`${apiBaseURI}/book/${id}/chapter`);
  }
}
