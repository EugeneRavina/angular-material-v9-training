import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Data {
  username: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-user-apimodal',
  templateUrl: './user-apimodal.component.html',
  styleUrls: ['./user-apimodal.component.scss']
})
export class UserAPIModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserAPIModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
