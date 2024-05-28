import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadComponent: () => import('./components/main/main.page').then(m => m.MainPage) },
  {
    path: 'movies-list',
    loadComponent: () => import('./components/movies-list/movies-list.page').then(m => m.MoviesListPage)
  },


];
