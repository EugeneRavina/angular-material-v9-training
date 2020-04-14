import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {NativeDateAdapter} from  '@angular/material/core'
// import {MatButton} from '@angular/material/button'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cotact-manager';
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
