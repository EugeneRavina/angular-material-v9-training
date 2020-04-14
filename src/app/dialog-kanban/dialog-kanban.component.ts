import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-kanban',
  templateUrl: './dialog-kanban.component.html',
  styleUrls: ['./dialog-kanban.component.scss']
})

export class DialogKanbanComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    
  }

}
