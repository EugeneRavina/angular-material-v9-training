import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface City {
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

  Cities: City[] = [
    {value: 'Las Pinas', viewValue: 'Las Pinas'},
    {value: 'Muntinlupa', viewValue: 'Muntinlupa'},
    {value: 'Pasay', viewValue: 'Pasay'}
  ];

  Countries: City[] = [
    {value: 'Philippines', viewValue: 'Philippines'},
    {value: 'Singapore', viewValue: 'Singapore'},
    {value: 'Malaysia', viewValue: 'Malaysia'}
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
