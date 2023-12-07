import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FeaturesComponent } from './features/features.component';
import { MovieComponent } from './movie/movie.component';
import { BannerComponent } from './banner/banner.component';
import { CinemaComponent } from './cinema/cinema.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { ImageFilmsComponent } from './image-films/image-films.component';
import { ListCollectionComponent } from './list-collection/list-collection.component';
import { ListAuteursComponent } from './list-auteurs/list-auteurs.component';
import { ListPersonnagesComponent } from './list-personnages/list-personnages.component';
import { ListStoriesComponent } from './list-stories/list-stories.component';
import { ListEvenementsComponent } from './list-evenements/list-evenements.component';
import { AProposComponent } from './apropos/apropos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    FeaturesComponent,
    MovieComponent,
    BannerComponent,
    CinemaComponent,
    DetailsMovieComponent,
    ImageFilmsComponent,
    ListCollectionComponent,
    ListAuteursComponent,
    ListPersonnagesComponent,
    ListStoriesComponent,
    ListEvenementsComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
