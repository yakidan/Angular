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

export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Angular component', text: 'I am learning component', id: 1},
    // {title: 'next block:', text: 'About pipes', id: 2},
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      this.posts[0] = {
        title: 'Changed!',
        text: 'Changed 2',
        id: 3
      }
    }, 5000)
  }

  updatePost(post: Post) {
    this.posts.unshift(post)
    //console.log('Post', post)
  }

  removePost(id: number) {
    console.log('Id to remove', id)
    this.posts = this.posts.filter(p => p.id !== id)
  }

}
