import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogActivityComponent } from '../dialog-activity/dialog-activity.component';


export interface DialogPersonData {
  lastName: string;
  firstName: string;
  bday: string;
  zip: string;
  street: string;
  city: string;
  country: string;
}
@Component({
  selector: 'app-model-activity',
  templateUrl: './model-activity.component.html',
  styleUrls: ['./model-activity.component.scss']
})
export class ModelActivityComponent implements OnInit {
  lastName: string;
  firstName: string;
  bday: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogActivityComponent, {
      width: '250px',
      data: {
        lastName: this.lastName,
        firstName: this.firstName,
        bday: this.bday,
        zip: this.zip,
        street: this.street,
        city: this.city,
        country: this.country
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.lastName = result.lastName;
      this.firstName = result.firstName;
      this.bday = result.bday;
      this.zip = result.zip;
      this.street = result.street;
      this.city = result.city;
      this.country = result.country;
      
    });
  }

}
