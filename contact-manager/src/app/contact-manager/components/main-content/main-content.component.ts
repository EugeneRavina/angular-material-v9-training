import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  constructor() { }

  events: string[] = [];
  opened: boolean; 
  value = 'Clear me';
  picker
  foods =  [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
