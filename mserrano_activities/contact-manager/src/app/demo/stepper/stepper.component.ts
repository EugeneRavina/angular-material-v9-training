import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface City {
  value : string;
  viewValue : string;
}

interface Country {
  value : string;
  viewValue : string;
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
    {value: 'lipa-0', viewValue: 'Lipa'},
    {value: 'tambo-1', viewValue: 'Tambo'},
    {value: 'tangway-2', viewValue: 'Tangway'}
  ];

  countries: Country[] = [
    {value: 'philippines-0', viewValue: 'Philippines'},
    {value: 'japan-1', viewValue: 'Japan'},
    {value: 'china-2', viewValue: 'China'}
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      zipCode: ['', Validators.required],
      street: ['', Validators.required]
    });
  }

}
