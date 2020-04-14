import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { DialogActivityModalComponent } from '../dialog-activity-modal/dialog-activity-modal.component';

export interface DialogData {
  firstName: string;
  lastName: string;
  birthday: string;
  street: string;
  city: string;
  zip: number;
  country: string;
}

@Component({
  selector: 'app-dialog-activity',
  templateUrl: './dialog-activity.component.html',
  styleUrls: ['./dialog-activity.component.scss']
})
export class DialogActivityComponent implements OnInit {

  personalInfo:DialogData;
  firstName: string;
  lastName: string;
  birthday: string;
  street: string;
  city: string;
  zip: number;
  country: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogActivityModalComponent, {
      width: '250px',
      data: {
        firstName: this.firstName, 
        lastName: this.lastName, 
        birthday: this.birthday,
        street: this.street, 
        city: this.city, 
        zip: this.zip,
        country: this.country
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.personalInfo = result;
    });
  }

  ngOnInit(): void {
  }

}