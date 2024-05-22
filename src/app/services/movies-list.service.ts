import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Movie {
  imdbID: string;
  Title: string;
  Type: string;
  Year: string;
  Poster: string;
}

type ApiResponse = {Search: Movie[]}

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {
  http = inject(HttpClient)


  API_KEY: string = 'f37609be'
  URL: string = `https://www.omdbapi.com/?apikey=${this.API_KEY}&s=`

  get(search: string): Promise<ApiResponse> {
    return firstValueFrom(
      this.http.get<ApiResponse>(this.URL+search)
    )
  }
  
}
