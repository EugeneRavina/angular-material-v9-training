import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogActivityComponent } from '../mat-dialog-activity/mat-dialog-activity.component';
import { DatePipe } from '@angular/common';

export interface personalData {
  fname: string,
  lname: string,
  bday: string,
  street: string,
  city: string,
  zip: number,
  country:string

}

@Component({
  selector: 'app-mat-modal-activity',
  templateUrl: './mat-modal-activity.component.html',
  styleUrls: ['./mat-modal-activity.component.scss']
})
export class MatModalActivityComponent implements OnInit {

  bday: string;
  fname: string;
  lname: string;
  street: string;
  city: string;
  zip: number;
  country:string;

  constructor(public dialog: MatDialog,private datePipe: DatePipe) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogActivityComponent, {
      width: '500px',height: '400px',
      data: {fname: this.fname, lname: this.lname,bday: this.bday, street: this.street,city: this.city, zip: this.zip,country: this.country}
    });

    dialogRef.afterClosed().subscribe((result : personalData) => {
      this.fname = result.fname;
      this.lname = result.lname;
      this.bday = result.bday;
      this.street = result.street;
      this.city = result.city;
      this.zip = result.zip;
      this.country = result.country;
      console.log('The dialog was closed');
      console.log(this.fname, this.lname,this.bday,this.street,this.city,this.zip,this.country);
    });
  }

  ngOnInit(): void {
  }

}
