import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogsComponent } from '../dialogs/dialogs.component';

export interface DialogData {
  firstName: string;
  lastName: string;
  birthday: string;
  street: string;
  city: string;
  zipcode: number;
  country: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  firstName: string;
  lastName: string;
  birthday: string;
  street: string;
  city: string;
  zipcode: number;
  country: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogsComponent, {
      width: '50%',
      data: {
        firstName: this.firstName,
        lastName: this.lastName,
        birthday: this.birthday,
        street : this.street,
        city : this.city,
        zipcode: this.zipcode,
        country : this.country
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.firstName = result.firstName;
      this.lastName = result.lastName;
      this.birthday = result.birthday;
      this.street = result.street;
      this.city = result.city;
      this.zipcode = result.zipcode;
      this.country = result.country;
    });
  }
}
