import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router,Params } from '@angular/router';

import { Trailer } from '../trailer';
import { MovieDataService } from '../movie-data.service';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
  
  trailers$: Observable<Trailer[]>;
  
  constructor(
    private service: MovieDataService,
    private route: ActivatedRoute,
    private router: Router,
    private domSanitizer: DomSanitizer
  ) { 
  
  }
  
  ngOnInit() {
    this.gettTrailers();
  }

  public gettTrailers(){
    this.route.params.subscribe((params: Params)=>{
      const id= +params['id'];
      this.service.getTrailers(id).subscribe(response => this.trailers$ = response.json().results);
    });
   console.log(this.trailers$);
  }

  public getEmbedUrl(item){
    return this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+ item.key);
  }
}
