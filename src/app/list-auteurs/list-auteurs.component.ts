import { Component, Input } from '@angular/core';
import { Comic } from '../model';
import { movie } from '../details-movie/details-movie.component';

@Component({
  selector: 'app-list-auteurs',
  templateUrl: './list-auteurs.component.html',
  styleUrls: ['./list-auteurs.component.css']
})
export class ListAuteursComponent {
  @Input() inter:Comic[]=movie;
}
