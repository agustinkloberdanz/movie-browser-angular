import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonInput, IonButton, IonAlert, IonToast, IonSearchbar, IonProgressBar } from '@ionic/angular/standalone';
import { Movie, MoviesListService } from '../../services/movies-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
  standalone: true,
  imports: [IonProgressBar, IonSearchbar, IonToast, IonAlert, IonButton, IonInput, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonImg, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoviesListPage {
  search = ''
  movies: Movie[] = []
  message = ''

  constructor(private moviesService: MoviesListService) { }


  async handleClick() {
    const movie = this.search

    if (movie && movie.trim() != '') {
      return this.getMovies()
    } else {
      this.movies = []
      this.message = 'The movie name is required'
    }
  }

  async handleChange(event: any) {
    const movie = event.target.value
    this.search = movie

    if (movie && movie.trim() != '') {
      return this.getMovies()
    } else {
      this.movies = []
      this.message = 'The movie name is required'
    }
  }

  async getMovies() {
    await this.moviesService.get(this.search).subscribe(res => {
      if (res.Response === 'False') {
        this.movies = []
        this.message = res.Error
      } else {
        const response = res.Search
        this.movies = response
      }
      console.log(res)
    })

  }


}
