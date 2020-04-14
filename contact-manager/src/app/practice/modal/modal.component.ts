import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  firstName: string;
  lastName: string;
  cpNo: number;
  birthDate: Date;
  street: string;
  city: string;
  zip: number;
  country: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {height:'500px',width:'700px',
      data: {firstName: this.firstName,
        lastName: this.lastName,
        cpNo: this.cpNo,
        birthDate: this.birthDate,
        street: this.street,
        city: this.city,
        zip: this.zip,
        country: this.country
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.firstName = result.firstName;
      this.lastName = result.lastName;
      this.cpNo = result.cpNo;
      this.birthDate = result.birthDate;
      this.street = result.street;
      this.city = result.city;
      this.zip = result.zip;
      this.country = result.country;
    });

  }
}
