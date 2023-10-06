import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  imports: [
    HomeComponent
  ],
  standalone: true,
  styleUrls: ['./app.component.css'],
  template: `

  <app-home></app-home>
  `
})
export class AppComponent {
 

}
