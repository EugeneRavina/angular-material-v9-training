import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/core/models/users';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogExampleComponent } from 'src/app/demo/dialog-example/dialog-example.component';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  users: User[];
  constructor(private userService: UsersService, private route: ActivatedRoute,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.userService.getuser().subscribe((data: User[])=> {
      this.users = data;
      console.log(data);
    })
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '250px',
      data: {users: this.users[id-1]}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  userImage(id: number): string {
 
    return `https://randomuser.me/api/portraits/women/${id}.jpg`
 }

}
