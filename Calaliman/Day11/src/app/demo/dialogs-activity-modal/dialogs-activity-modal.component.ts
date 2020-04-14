import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../dialogs-activity/dialogs-activity.component'

@Component({
  selector: 'app-dialogs-activity-modal',
  templateUrl: './dialogs-activity-modal.component.html',
  styleUrls: ['./dialogs-activity-modal.component.scss']
})
export class DialogsActivityModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogsActivityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
