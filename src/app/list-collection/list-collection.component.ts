import { Component, Input } from '@angular/core';
import { Comic } from '../model';
import { movie } from '../details-movie/details-movie.component';

@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.component.html',
  styleUrls: ['./list-collection.component.css']
})
export class ListCollectionComponent {
  @Input() inter:Comic[]=movie;
}
