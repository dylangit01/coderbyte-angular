import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-reactive-form-challenge',
  templateUrl: './reactive-form-challenge.component.html',
  styleUrls: ['./reactive-form-challenge.component.scss']
})
export class ReactiveFormChallengeComponent implements OnInit {
  form: FormGroup;

    person = {
    firstname: 'Coder',
    age: 25,
    lastname: 'Byte',
    twitter: '@coderbyte'
  };
    personProps = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: '',
      age: '',
      lastname: '',
      twitter: ''
    });
  }

  processForm(){

  }

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataObj);
  }

}
