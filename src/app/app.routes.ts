import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadComponent: () => import('./main/main.page').then(m => m.MainPage) },
  {
    path: 'movies-list',
    loadComponent: () => import('./movies-list/movies-list.page').then(m => m.MoviesListPage)
  },


];
