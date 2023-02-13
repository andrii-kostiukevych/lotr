import {Component, OnInit} from '@angular/core';
import {tap} from 'rxjs';
import {BooksService} from './books.service';
import {FullBookTypeData} from './types/full-book-type-data';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: FullBookTypeData[] = [];
  public columns = [
    {
      label: 'Book Name: ',
      prop: 'name'
    }
  ]

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.booksService.getBooks()
      .pipe(tap((data) => this.books = data.docs))
      .subscribe();
  }

  onClick(book: FullBookTypeData, event: any) {
    if (event.detail) {
      this.booksService.getChapters(book._id)
        .pipe(tap((data) => {
          book.chapters =  data.docs;
        }))
        .subscribe();
    }
  }
}
