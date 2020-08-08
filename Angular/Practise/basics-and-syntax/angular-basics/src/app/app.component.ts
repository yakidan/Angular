import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  search = ''
  searchField: string = 'title'
  UseButtonTitle: boolean = true
  posts: Post[] = [
    {title: 'Bear', text: 'The best Bear'},
    {title: 'Animal', text: 'The best Animal'},
    {title: 'Js', text: 'Js is language'},
  ]

//change search params and class of button
  searchBy(event) {
    console.log(event.target.name)
    this.searchField = event.target.name
    this.UseButtonTitle = !this.UseButtonTitle
  }

  addPost() {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Daniil is student of the course '
    })
  }
}
