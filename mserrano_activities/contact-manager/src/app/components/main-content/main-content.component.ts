import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModelsComponent } from 'src/app/demo/mat-dialog-models/mat-dialog-models.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  users: User[];
  
  constructor(private route: ActivatedRoute,
    private userService: UserService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.userService.getuser().subscribe((data: User[])=> {
      this.users = data;
      console.log(data);
    })
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(MatDialogModelsComponent, {
      width: '250px',
      data: {users: this.users[id-1]}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  userImage(id: number): string {
    return `https://randomuser.me/api/portraits/women/${id}.jpg`;
  }

}
