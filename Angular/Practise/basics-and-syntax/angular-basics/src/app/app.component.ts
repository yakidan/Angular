import {Component} from '@angular/core';
import {Subscription, Subject} from 'rxjs'
import {AppCounterService} from "./services/app-counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private appCounterService: AppCounterService) {

  }
}
