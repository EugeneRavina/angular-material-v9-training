import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Ticket } from '../models/ticket';
import { DragDialogComponent } from '../drag-dialog/drag-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
})
export class DragDropComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(public dialog: MatDialog) {}
  openDialog(items) {
    const dialogRef = this.dialog.open(DragDialogComponent, {
      width: '20%',
      data: items
    });
  }

  todo: Ticket[] = [
    {
      ticketId: 'KNBAN-0001',
      title: 'Setup Server',
      issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
    {
      ticketId: 'KNBAN-0002',
      title: 'Database Setup',
      issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
    {
      ticketId: 'KNBAN-0003',
      title: 'Repository Setup',
      issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
  ];

  inDev = [
    {
      ticketId: 'KNBAN-0004',
      title: 'Login Design Module',
      issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
    {
      ticketId: 'KNBAN-0005',
      title: 'Support NEHO-00123',
      issueType: { id: 1, name: 'Task', icon: 'bug_report', color: 'warn' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
    {
      ticketId: 'KNBAN-0006',
      title: 'File Repository',
      issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
  ];

  inTest = [
    {
      ticketId: 'KNBAN-00010',
      title: 'Signup Design Module',
      issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
    {
      ticketId: 'KNBAN-00011',
      title: 'Refund Planning',
      issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
    {
      ticketId: 'KNBAN-00012',
      title: 'Regression Testing',
      issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
    {
      ticketId: 'KNBAN-00013',
      title: 'Support NEHO-0015',
      issueType: { id: 1, name: 'Task', icon: 'bug_report', color: 'warn' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
  ];

  done = [
    {
      ticketId: 'KNBAN-0007',
      title: 'Setup Server',
      issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
    {
      ticketId: 'KNBAN-0008',
      title: 'Database Setup',
      issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
    {
      ticketId: 'KNBAN-0009',
      title: 'Repository Setup',
      issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary' },
      description: 'Write a description',
      priority: { id: 1, name: 'High', icon: 'arrow_upward', color: 'warn' },
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
