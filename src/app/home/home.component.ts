import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],

  template: `
    <div [ngClass]="'klasa1'">
      Jan Kowalski
    </div>
   
    <div [ngClass]="z > 10 ? 'red' : 'yellow'">{{z}}</div>

     <div [ngStyle]="{backgroundColor: 'red'}"> 
     Jan Kowalski
     </div>

    <p [ngClass]="'first'">1</p>
    <p [ngClass]="['first','second']">2</p>
    <p [ngClass]="{first: false, second: true}">3</p>
  
    <p ngClass="{{x+x}}">tekst</p>

     <p *ngIf="porownanie" [ngClass]="'kolor1'">> {{zmienna}}</p>

     <p *ngIf="!porownanie" [ngClass]="'kolor2'"> {{zmienna}}</p>


  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x = "10"
  z = 15
  kolor1 = "klasa"

  zmienna: string;
  porownanie: boolean;

  constructor() {
    this.porownanie = true;
    if (this.porownanie) {
      this.zmienna = "Tematem tego paragrafu jest ngIf"
    }
    else {
      this.zmienna = "Tematem tego paragrafu nie jest ngIf"
    }
  }
  ngOnInit() {}
 

}
