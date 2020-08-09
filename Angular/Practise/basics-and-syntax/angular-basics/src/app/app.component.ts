import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

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
        Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ru',),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  // @ts-ignore
    this.controls = this.form.get('skills').controls;
  }

  form: FormGroup;
  controls ;

  submit() {
    if (this.form.valid) {
      console.log('Form:', this.form)
      const formData = {...this.form.value}
      console.log("Form data:", formData)
    }
  }

  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      bu: 'Минск',
    }
    const cityKey = this.form.get('address').get('country').value
    const city = cityMap[cityKey]
    this.form.patchValue({
      address: {city}
    })
    console.log(city)
  }



  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push() <=> (this.form.get('skills') as FormArray).push()
    (this.form.get('skills') as FormArray).push(control)
  }
}
