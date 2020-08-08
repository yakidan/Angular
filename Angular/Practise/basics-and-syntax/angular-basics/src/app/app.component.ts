import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  e:number=Math.E;
}
