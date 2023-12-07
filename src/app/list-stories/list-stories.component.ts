import { Component, Input } from '@angular/core';
import { Comic } from '../model';
import { movie } from '../details-movie/details-movie.component';

@Component({
  selector: 'app-list-stories',
  templateUrl: './list-stories.component.html',
  styleUrls: ['./list-stories.component.css']
})
export class ListStoriesComponent {
  @Input() inter:Comic[]=movie;
}
