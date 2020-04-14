import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

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
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
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
    const dialogRef = this.dialog.open(DialogExampleComponent, {
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


