import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-dialog-kanban-board-finals',
  templateUrl: './dialog-kanban-board-finals.component.html',
  styleUrls: ['./dialog-kanban-board-finals.component.scss']
})
export class DialogKanbanBoardFinalsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogKanbanBoardFinalsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ticket) {
    }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
