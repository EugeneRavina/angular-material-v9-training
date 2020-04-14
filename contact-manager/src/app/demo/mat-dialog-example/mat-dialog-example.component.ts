import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../mat-modals/mat-modals.component';

@Component({
  selector: 'app-mat-dialog-example',
  templateUrl: './mat-dialog-example.component.html',
  styleUrls: ['./mat-dialog-example.component.scss']
})
export class MatDialogExampleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MatDialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
