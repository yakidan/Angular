import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor() {

  }

  inputValue = " ";

  title = 'Dynamic title';
  arr = [1, 2, 3];
  obj = { a: 2 };
  img = 'https://c7.hotpng.com/preview/933/638/374/react-components-javascript-redux-mobile-app-react-js.jpg';

  onInput(event: KeyboardEvent) {
    console.log('Event')
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onBlur(str: string) {
    this.inputValue = str
  }

  onClick() {
    console.log('Click')
  }
}
