import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-drag-drop-dialog',
  templateUrl: './drag-drop-dialog.component.html',
  styleUrls: ['./drag-drop-dialog.component.scss']
})
export class DragDropDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DragDropDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log(this.data)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
