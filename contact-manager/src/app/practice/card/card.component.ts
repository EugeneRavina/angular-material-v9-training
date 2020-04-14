import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor() { }

  events: string[] = [];
  opened: boolean; 
  value = 'Clear me';
  picker;
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
