import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../modals/modals.component';

@Component({
  selector: 'app-dialog-activity-modal',
  templateUrl: './dialog-activity-modal.component.html',
  styleUrls: ['./dialog-activity-modal.component.scss']
})
export class DialogActivityModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogActivityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit(): void {
  }

}
