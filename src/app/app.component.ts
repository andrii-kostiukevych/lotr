import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tabItems = [
    {label: 'Books', dataTarget: 'books'},
    {label: 'Movies', dataTarget: 'movies'},
  ];
  public currentTab?: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.currentTab = window.location.pathname.slice(1);
  }

  public onTabClick(e: any) {
    this.router.navigateByUrl(`/${e.detail}`);
  }
}
