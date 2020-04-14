import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { DialogsActivityModalComponent } from '../dialogs-activity-modal/dialogs-activity-modal.component';

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
  selector: 'app-dialogs-activity',
  templateUrl: './dialogs-activity.component.html',
  styleUrls: ['./dialogs-activity.component.scss']
})
export class DialogsActivityComponent implements OnInit {

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
    const dialogRef = this.dialog.open(DialogsActivityModalComponent, {
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
