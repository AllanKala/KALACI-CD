import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FeaturesComponent } from './features/features.component';
import { MovieComponent } from './movie/movie.component';
import { CinemaComponent } from './cinema/cinema.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { AProposComponent } from './apropos/apropos.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: 'movie',
    component: MovieComponent,
  },
  {
    path: 'details-movie/:id',
    component: DetailsMovieComponent,
  },
  {
    path: 'cinema',
    component: CinemaComponent,
  },
  {
    path: 'apropos',
    component: AProposComponent,
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
