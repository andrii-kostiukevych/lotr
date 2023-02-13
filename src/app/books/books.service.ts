import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BooksDto} from '../dto/books-dto';
import {ChaptersDto} from '../dto/chapters-dto';

@Injectable()
export class BooksService {
  private apiBaseURI = 'https://the-one-api.dev/v2';

  constructor(private http: HttpClient) {}

  public getBooks(): Observable<BooksDto> {
    return this.http.get<BooksDto>(`${this.apiBaseURI}/book`);
  }

  public getChapters(id: string): Observable<ChaptersDto> {
    return this.http.get<ChaptersDto>(`${this.apiBaseURI}/book/${id}/chapter`);
  }
}
