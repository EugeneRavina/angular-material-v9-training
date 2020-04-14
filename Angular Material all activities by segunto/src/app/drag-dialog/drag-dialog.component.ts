import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-drag-dialog',
  templateUrl: './drag-dialog.component.html',
  styleUrls: ['./drag-dialog.component.scss'],
})
export class DragDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DragDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ticket
  ) {}
  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
