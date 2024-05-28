import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Movie {
  imdbID: string;
  Title: string;
  Type: string;
  Year: string;
  Poster: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

  constructor(private http: HttpClient) { }

  private API_KEY: string = 'f37609be'
  private URL: string = `https://www.omdbapi.com/?apikey=${this.API_KEY}&s=`

  public get(search: string): Observable<any> {
    return this.http.get(this.URL + search)
  }

}
