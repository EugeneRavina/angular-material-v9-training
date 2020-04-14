import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../user.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
export interface Data {
  name: string;
  id : number;
  username: string;
  email: string;
  phone: string;
  website: string;
}
@Component({
  selector: 'app-user-dialogs',
  templateUrl: './user-dialogs.component.html',
  styleUrls: ['./user-dialogs.component.scss'],
})
export class UserDialogsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UserDialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
