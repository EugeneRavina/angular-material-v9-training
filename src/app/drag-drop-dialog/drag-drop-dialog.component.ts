import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Ticket } from '../drag-drop-models/ticket';

@Component({
  selector: 'app-drag-drop-dialog',
  templateUrl: './drag-drop-dialog.component.html',
  styleUrls: ['./drag-drop-dialog.component.scss']
})
export class DragDropDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DragDropDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ticket) { }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}