import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Food {
  value : string;
  viewValue : string;
}
@Component({
  selector: 'app-forms-control',
  templateUrl: './forms-control.component.html',
  styleUrls: ['./forms-control.component.scss']
})


export class FormsControlComponent implements OnInit {
  value = 'Clear me';
  hide : boolean = true;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  constructor() { }

  ngOnInit() {
  }

}
