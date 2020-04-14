import { Component } from '@angular/core';
import { ActivitydialogComponent } from '../activitydialog/activitydialog.component';
import { MatDialog } from '@angular/material/dialog';

export interface User{
    firstName:string,
    lastName:string,
    birthday:string,
    street:string,
    city:string,
    zipCode:number,
    country:string

}
@Component({
  selector: 'app-activitymodal',
  templateUrl: './activitymodal.component.html',
  styleUrls: ['./activitymodal.component.scss']
})
export class ActivitymodalComponent {

  user:User;
  firstName;
  lastName;
  birthday;
  street;
  city;
  zipCode;
  country;

  constructor(public dialog: MatDialog) { 

    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ActivitydialogComponent, {
      width: '250px',
      data: {
        firstName: this.firstName, lastName: this.lastName,
        birthday:this.birthday,street:this.street,city:this.city,
        zipCode:this.zipCode,country:this.country
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.firstName = result.firstName;
      this.lastName = result.lastName;
      this.birthday = result.birthday;
      this.street= result.street;
      this.city=result.city;
      this.zipCode=result.zipCode;
      this.country=result.country;
     
    });
  }

}
