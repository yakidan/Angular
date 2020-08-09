import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent implements OnInit {
  ngOnInit() {
    this.form = new FormGroup({})
  }

  form: FormGroup

  submit() {
    console.log('Form submitted', this.form)
  }
}
