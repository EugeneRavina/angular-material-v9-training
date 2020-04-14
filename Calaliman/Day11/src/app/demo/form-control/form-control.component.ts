import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  value = 'Clear me';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
