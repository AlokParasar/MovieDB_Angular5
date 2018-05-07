import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router/app-router.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopularComponent } from './popular/popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TrailerComponent } from './trailer/trailer.component';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { MovieDataService }          from './movie-data.service';
import { MessageService }       from './message.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopularComponent,
    TopRatedComponent,
    NowPlayingComponent,
    UpcomingComponent,
    TrailerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieDataService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
