import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  firstName: string;
  lastName: string;
  cpNo: number;
  birthDate: any;
  street: string;
  city: string;
  zip: number;
  country: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent  {
  cities =  [
    {value: 'mla-o', viewValue: 'Manila'},
    {value: 'mkt-1', viewValue: 'Makati'},
    {value: 'mndl-2', viewValue: 'Mandaluyong'}
  ];
  countries =  [
    {value: 'phili-0', viewValue: 'Philippines'},
    {value: 'usa-1', viewValue: 'USA'},
    {value: 'uk-2', viewValue: 'United Kingdom'}
  ];
  


  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
