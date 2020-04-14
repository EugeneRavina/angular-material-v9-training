import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface City {
  value: string;
  viewValue: string;
}
interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  cities: City[] = [
    {value: 'Mandaluyong City', viewValue: 'Mandaluyong City'},
    {value: 'Pasig City', viewValue: 'Pasig City'},
    {value: 'San Juan City', viewValue: 'San Juan City'}
  ];
  countries: Country[] = [
    {value: 'PH', viewValue: 'Philippines'},
    {value: 'SG', viewValue: 'Singapore'},
    {value: 'US', viewValue: 'United States of America'}
  ];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
