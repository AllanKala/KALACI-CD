import { Component } from '@angular/core';
import { Comic } from '../model';
import { COMICS } from '../data';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  film:Comic[] = COMICS;
}
