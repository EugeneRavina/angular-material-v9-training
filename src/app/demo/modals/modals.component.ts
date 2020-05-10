import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogExampleComponent } from '../mat-dialog-example/mat-dialog-example.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})

export class ModalsComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() : void {
    const dialogRef = this.dialog.open(MatDialogExampleComponent, {
      width: '250px',

      data: {name: this.name, animal: this.animal}
    });

    console.log(this.name);

    dialogRef.afterClosed().subscribe( (result : DialogData)  => {
      console.log('The dialog was closed');
      this.animal = result.animal;
      console.log(this.animal);
    });
  }


}
