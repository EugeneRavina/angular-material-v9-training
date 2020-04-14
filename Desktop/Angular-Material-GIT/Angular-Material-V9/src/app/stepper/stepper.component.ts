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

  cities: City[] = [
    {value: 'paranaque', viewValue: 'Paranaque'},
    {value: 'pasay', viewValue: 'Pasay'},
    {value: 'manila', viewValue: 'Manila'}
  ];

  countries: Country[] = [
    {value: 'philippines', viewValue: 'Philippines'},
    {value: 'united states', viewValue: 'United States'},
    {value: 'japan', viewValue: 'Japan'}
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
