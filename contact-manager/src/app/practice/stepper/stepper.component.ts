import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  cities = [ 
    {value: 'manila-0', viewValue: 'Manila'},
    {value: 'makati-1', viewValue: 'Makati'},
    {value: 'mandaluyong-2', viewValue: 'Mandaluyong'}
    ]
  zipCodes = [ 
    {value: 'phili-0', viewValue: 'Philippines'},
    {value: 'USA-1', viewValue: 'USA'},
    {value: 'Eng-2', viewValue: 'England'}
    ]
    



  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      street: ['', Validators.required],
      zip: ['', Validators.maxLength]
    });
  }

}
