import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieDataService {
  asd:Observable<Response>;
  constructor(private http: Http) { }

  public getMovies(pagenr: number): Observable<Response> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=17fe18c6e12b6f243d2df02ee03f4e46&language=en-US&page=`+ pagenr);
  }

  public getTrailers(id: number): Observable<Response> {
      const url = "https://api.themoviedb.org/3/movie/"+ id +"/videos?api_key=17fe18c6e12b6f243d2df02ee03f4e46&language=en-US"
      return this.http.get(url);
    }
   
    public getTopRatedMovies(pagenr: number): Observable<Response> {
      return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=17fe18c6e12b6f243d2df02ee03f4e46&language=en-US&page=`+ pagenr);
    }
    public getUpcomingMovies(pagenr: number): Observable<Response> {
      return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=17fe18c6e12b6f243d2df02ee03f4e46&language=en-US&page=`+ pagenr);
    }
    public getNowPlayingMovies(pagenr: number): Observable<Response> {
      return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=17fe18c6e12b6f243d2df02ee03f4e46&language=en-US&page=`+ pagenr);
    }
    public getSearchMovies(query: string): Observable<Response> {
      const url = "https://api.themoviedb.org/3/search/movie?api_key=17fe18c6e12b6f243d2df02ee03f4e46&language=en-US&query="+ query +"&page=1&include_adult=false"
      return this.http.get(url);
    }
}
