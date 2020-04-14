import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../dialog/dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogoverview',
  templateUrl: './dialogoverview.component.html',
  styleUrls: ['./dialogoverview.component.scss']
})
export class DialogoverviewComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogoverviewComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }

}
