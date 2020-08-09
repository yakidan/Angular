import {Component} from '@angular/core';
import {Subscription, Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  sub: Subscription

  constructor() {
    const stream$ = new Observable(observer => {
      setTimeout(() => {
        observer.next(1)
      }, 1500)

      setTimeout(() => {
        observer.complete()
      }, 2100)
      setTimeout(() => {
        observer.error('Some error')
      }, 1900)
      setTimeout(() => {
        observer.next(2)
      }, 2500)
    })
    this.sub = stream$.subscribe(
      value => console.log('Next:', value),
      error => console.log('Error', error),
      ()=>console.log('Complete')
    )
  }

  stop() {
    this.sub.unsubscribe()
  }
}
