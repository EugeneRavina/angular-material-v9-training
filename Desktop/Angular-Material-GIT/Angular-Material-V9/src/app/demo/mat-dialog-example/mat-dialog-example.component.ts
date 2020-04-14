import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-mat-dialog-example',
  templateUrl: './mat-dialog-example.component.html',
  styleUrls: ['./mat-dialog-example.component.scss']
})
export class MatDialogExampleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MatDialogExampleComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  //constructor(){}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
