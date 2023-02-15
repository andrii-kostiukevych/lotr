import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {VegaComponentModule} from '@heartlandone/vega-angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthInterceptor} from './auth-interceptor/auth-interceptor';
import {BooksComponent} from './books/books.component';
import {BooksService} from './books/books.service';
import {MoviesComponent} from './movies/movies.component';
import {MoviesService} from './movies/movies.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MoviesComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    VegaComponentModule
  ],
  providers: [
    MoviesService,
    BooksService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
