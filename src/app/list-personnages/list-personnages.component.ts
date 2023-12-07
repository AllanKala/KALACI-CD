import { Component, Input } from '@angular/core';
import { Comic } from '../model';
import { movie } from '../details-movie/details-movie.component';

@Component({
  selector: 'app-list-personnages',
  templateUrl: './list-personnages.component.html',
  styleUrls: ['./list-personnages.component.css']
})
export class ListPersonnagesComponent {
  @Input() inter:Comic[]=movie;
}
