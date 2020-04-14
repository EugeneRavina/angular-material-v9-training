import { Component, OnInit,Inject } from '@angular/core';
import { ActivitymodalComponent } from '../activitymodal/activitymodal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {User} from '../activitymodal/activitymodal.component'
@Component({
  selector: 'app-activitydialog',
  templateUrl: './activitydialog.component.html',
  styleUrls: ['./activitydialog.component.scss']
})
export class ActivitydialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ActivitymodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
