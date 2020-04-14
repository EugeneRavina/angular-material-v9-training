import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { todo, done, inDev, inTest } from './data';
import { DialogKanbanBoardFinalsComponent } from '../dialog-kanban-board-finals/dialog-kanban-board-finals.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-kanban-board-finals',
  templateUrl: './kanban-board-finals.component.html',
  styleUrls: ['./kanban-board-finals.component.scss']
})
export class KanbanBoardFinalsComponent implements OnInit {
  todo:any = todo;
  inDev:any = inDev;
  inTest:any = inTest;
  done:any = done;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(item:any[]): void {
    console.log(item);
    const dialogRef = this.dialog.open(DialogKanbanBoardFinalsComponent, {
      width: '500px',
      height: '450px',
      data: item
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

    drop(event: CdkDragDrop<string[]>) {
      console.log(event);
      if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
