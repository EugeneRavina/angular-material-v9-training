import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModelsComponent } from '../mat-dialog-models/mat-dialog-models.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogModelsComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });


    console.log(this.name)


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result.animal;
    });
  }

  

}
