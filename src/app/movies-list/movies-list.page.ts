import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonInput, IonButton, IonAlert, IonToast } from '@ionic/angular/standalone';
import { Movie, MoviesListService } from '../services/movies-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
  standalone: true,
  imports: [IonToast, IonAlert, IonButton, IonInput, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonImg, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoviesListPage {

  search = ''
  movies: Movie[] = []
  message = ''

  moviesService = inject(MoviesListService)

  handleClick() {
    if (this.search != '') {
      this.getMovies()
    }
    else {
      this.movies = []
      this.message = 'The movie name is required'
    }
  }

  async getMovies() {
    const response = await this.moviesService.get(this.search)

    if (response.Search === undefined) {
      this.movies = []
      this.message = 'No movies found with this name'
    }
    else {
      this.movies = response.Search
      console.log(this.movies)
    }
  }


}
