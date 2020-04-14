import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from '../../core/models/ticket';

@Component({
  selector: 'app-kanban-modal',
  templateUrl: './kanban-modal.component.html',
  styleUrls: ['./kanban-modal.component.scss']
})
export class KanbanModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<KanbanModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ticket) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
