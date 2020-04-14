import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogExampleComponent } from '../mat-dialog-example/mat-dialog-example.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-mat-modals',
  templateUrl: './mat-modals.component.html',
  styleUrls: ['./mat-modals.component.scss']
})
export class MatModalsComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogExampleComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe((result : DialogData) => {
      this.animal = result.animal;
      this.name = result.name;
      console.log('The dialog was closed');
      console.log(this.animal, this.name);
    });
  }
  
  ngOnInit(): void {
  }

}
