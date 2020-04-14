import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SidenavComponent } from 'src/app/contact-manager/sidenav/sidenav.component';

@Component({
  selector: 'app-kanbandialog',
  templateUrl: './kanbandialog.component.html',
  styleUrls: ['./kanbandialog.component.scss']
})
export class KanbandialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SidenavComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}
    onNoClick(): void {
      this.dialogRef.close();
    }

}
