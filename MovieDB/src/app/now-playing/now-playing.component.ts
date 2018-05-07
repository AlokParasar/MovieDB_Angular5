import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router,Params } from '@angular/router';

import { Movie } from '../movie';
import { MovieDataService } from '../movie-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  movies$: Observable<Movie[]>;
  
  constructor(
    private service: MovieDataService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit() {  
    this.getMovies();
  }

  public getMovies(){
    this.route.params.subscribe((params: Params)=>{
      const id= +params['id'];
      this.service.getNowPlayingMovies(id).subscribe(response => this.movies$ = response.json().results);
    });
  }

  public gotoTrailer(movie){
    this.router.navigate(['/trailer', movie.id]);
  }

}
