import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
  cities: City[] = [
    {value: 'batangas', viewValue: 'Batangas'},
    {value: 'pasig', viewValue: 'Pasig'},
    {value: 'manila', viewValue: 'Manila'}
  ];

  countries: Country[] = [
    {value: 'philippines', viewValue: 'Philippines'},
    {value: 'sokor', viewValue: 'South Korea'},
    {value: 'japan', viewValue: 'Japan'}
  ];
  selectedValue: string; 
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear = false;
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
