import { Component } from '@angular/core';
import { Comic,SimpleComic } from '../model';
import { COMICS } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  filmss:Comic[] = COMICS;
  COMICSAVECIMAGES:Comic[]=[];
  currentURL:string;
  img:string|any;
  newDescrition:string='';

  routereven(film:any){
    this.router.navigate(['/details-movie',film.id]);
  }
  constructor(private router:Router){
   
    this.currentURL=this.router.url;
    for (let index = 0; index < this.filmss.length; index++) {
      
        if (this.filmss[index].thumbnail.path!='image/image_not_available') {
          this.COMICSAVECIMAGES.push(this.filmss[index]);
        }
    }
   
  }
}
