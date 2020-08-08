import {Pipe, PipeTransform} from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '',
            field: string = 'title'): Post[] {
    if (!search.trim()) {
      return posts
    }
    console.log("Field:",field)
    return posts.filter(post => {
      return post[field].includes(search)
    })
  }

}
