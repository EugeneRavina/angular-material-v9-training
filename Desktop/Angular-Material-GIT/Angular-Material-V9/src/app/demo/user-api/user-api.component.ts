import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Data {
  name:string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.scss']
})
export class UserApiComponent implements OnInit {

  constructor(public diaglogRef: MatDialogRef<UserApiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) { }


    onNoClick(): void {
      this.diaglogRef.close();
    }

  ngOnInit(): void {
   
  }

}
