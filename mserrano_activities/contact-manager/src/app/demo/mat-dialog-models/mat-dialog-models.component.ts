import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog-models',
  templateUrl: './mat-dialog-models.component.html',
  styleUrls: ['./mat-dialog-models.component.scss']
})
export class MatDialogModelsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MatDialogModelsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log(this.data)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
