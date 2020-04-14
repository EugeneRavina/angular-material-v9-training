import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Ticket } from 'src/app/contact-manager/final/models/ticket';
import { todo, inDev, inTest, done } from 'src/app/contact-manager/final/models/data';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Priority } from '../models/priority';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {
  todo: Ticket[] = todo;
  inDev: Ticket[] = inDev;
  inTest: Ticket[] = inTest;
  done: Ticket[] = done

  constructor(public dialog: MatDialog) {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);  
    }
  }

  openDialog(item: Ticket)
  {console.log(item);
    const dialogRef = this.dialog.open(TicketDialogComponent, {
      width: '375px',
      data: {
        ticketId: item.ticketId,
        title: item.title, 
        issueType: { 
            id: item.issueType.id, 
            name: item.issueType.name, 
            icon: item.issueType.icon, 
            color: item.issueType.color},
        description: item.description, 
        priority: { 
            id: item.priority.id,
            name: item.priority.name,
            icon: item.priority.icon, 
            color: item.priority.color} 
          }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });


  }
}
