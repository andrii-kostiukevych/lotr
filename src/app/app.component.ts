import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tabItems = [
    { label: 'Books', dataTarget: 'nav-books' },
    { label: 'Movies', dataTarget: 'nav-movies' }
  ];
}
