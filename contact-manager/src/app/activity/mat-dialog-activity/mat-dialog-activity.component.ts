import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { personalData } from '../mat-modal-activity/mat-modal-activity.component';

interface Food {
  value: string;
  viewValue: string;
}

interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mat-dialog-activity',
  templateUrl: './mat-dialog-activity.component.html',
  styleUrls: ['./mat-dialog-activity.component.scss']
})
export class MatDialogActivityComponent implements OnInit {

  foods: Food[] = [
    {value: 'PH', viewValue: 'Philippines'},
    {value: 'USA', viewValue: 'United States of America'},
    {value: 'CHN', viewValue: 'China'}
  ];

  cities: City[] = [
    {value: 'Mandaluyong City', viewValue: 'Mandaluyong City'},
    {value: 'Pasig City', viewValue: 'Pasig City'},
    {value: 'Makati City', viewValue: 'Makati City'}
  ];

  constructor(
    public dialogRef: MatDialogRef<MatDialogActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: personalData) {}

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
