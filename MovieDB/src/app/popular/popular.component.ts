import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router,Params } from '@angular/router';

import { Movie } from '../movie';
import { MovieDataService } from '../movie-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
  providers: [MovieDataService]
})

export class PopularComponent implements OnInit{

  movies$: Observable<Movie[]>;
  
  constructor(
    private service: MovieDataService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit() {  
    this.getMovies();
  }

  public navigatePage(pageNumber :number){
    
    this.router.navigate(['/popular', pageNumber]);
    this.getMovies();
  }

  public getMovies(){
    this.route.params.subscribe((params: Params)=>{
      const id= +params['id'];
      this.service.getMovies(id).subscribe(response => this.movies$ = response.json().results);
    });
  }

  public next(){
    const id = +this.route.snapshot.paramMap.get('id') + 1;  
    this.router.navigate(['/popular', id]);
    this.getMovies(); 
  }

  public previous(){
    const id = +this.route.snapshot.paramMap.get('id') - 1;
    if(id>0){
      this.router.navigate(['/popular', id]);
      this.getMovies();
    }
  }
  public gotoTrailer(movie){
    this.router.navigate(['/trailer', movie.id]);
  }
}
