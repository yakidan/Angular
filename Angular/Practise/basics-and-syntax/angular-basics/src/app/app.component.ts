import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  arr = [1, 1, 2, 3, 5, 8, 13]
  objs = [
    {
      title: 'Post 1', author: 'Daniil', comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Dan', text: 'lorem 2'},
      ]
    },
    {
      title: 'Post 2', author: 'Dina', comments: [
        {name: 'Step', text: 'lorem 1'},
        {name: 'Kira', text: 'lorem 2'},
      ]
    },
  ]

}
