import { Component, Input } from '@angular/core';
import { Comic } from '../model';
import { movie } from '../details-movie/details-movie.component';

@Component({
  selector: 'app-list-evenements',
  templateUrl: './list-evenements.component.html',
  styleUrls: ['./list-evenements.component.css']
})
export class ListEvenementsComponent {
  @Input() inter:Comic[]=movie;
}
