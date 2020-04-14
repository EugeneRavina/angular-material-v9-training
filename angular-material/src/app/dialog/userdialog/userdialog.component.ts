import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SidenavComponent } from 'src/app/contact-manager/sidenav/sidenav.component';

@Component({
  selector: 'app-userdialog',
  templateUrl: './userdialog.component.html',
  styleUrls: ['./userdialog.component.scss']
})
export class UserdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SidenavComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit(): void {
  }

}
