import { Component, Input } from '@angular/core';
import { Comic } from '../model';
import { movie } from '../details-movie/details-movie.component';

@Component({
  selector: 'app-image-films',
  templateUrl: './image-films.component.html',
  styleUrls: ['./image-films.component.css']
})
export class ImageFilmsComponent {
  @Input() inter:Comic[]=movie;
}
