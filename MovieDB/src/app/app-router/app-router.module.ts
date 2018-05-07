import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { PopularComponent }   from '../popular/popular.component';
import { TopRatedComponent } from '../top-rated/top-rated.component';
import { UpcomingComponent } from '../upcoming/upcoming.component';
import { NowPlayingComponent} from '../now-playing/now-playing.component';
import { TrailerComponent} from '../trailer/trailer.component';
import { SearchComponent} from '../search/search.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/popular/1', pathMatch: 'full' },
  { path: 'popular/:id', component: PopularComponent},
  { path: 'trailer/:id', component: TrailerComponent},
  { path: 'toprated/:id', component: TopRatedComponent },
  { path: 'upcoming/:id', component: UpcomingComponent },  
  { path: 'nowplaying/:id', component: NowPlayingComponent },
  { path: 'search/:id', component: SearchComponent },
  { path: '**', component: PopularComponent }
];




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
})

export class AppRouterModule { }