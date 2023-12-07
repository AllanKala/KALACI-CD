import { Component } from '@angular/core';
import { COMICS } from '../data'
import { Comic } from '../model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {

  // films:Comic[] = COMICS;
  // film:string[] = [];
  
  // remplissage ():string[] {
  //   for (let fl of this.films) {
  //     if (fl.images != null){
  //       this.film.push(fl.title);
  //     }
  //   }
  //   return this.film;
  // }
  // a:string[] = this.remplissage();
}
