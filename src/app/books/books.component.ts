import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {BookTypeData} from './book-type-data';
import {ChapterTypeData} from './chapter-type-data';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  private apiBaseURI = 'https://the-one-api.dev/v2';
  public books?: BookTypeData[];
  public chapters?: ChapterTypeData[];
  public columns = [
    {
      label: 'Book Name',
      prop: 'name'
    }
  ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    return this.http.get(`${this.apiBaseURI}/book`)
      .subscribe((value: any) => this.books = value.docs);
  }

  private getChapters(id: string) {
    return this.http.get(`${this.apiBaseURI}/book/${id}/chapter`)
      .subscribe((value: any) => this.chapters = value.docs);
  }
}
