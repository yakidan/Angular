import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent implements OnInit {

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required],),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(6)]),
    })
  }

  form: FormGroup


  submit() {
    if (this.form.valid) {
      console.log('Form:', this.form)
      const formData = {...this.form.value}
      console.log("Form data:", formData)
    }
  }
}
