import { Component, OnInit, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/userDialog/services/users.service';
import { User } from '../../practice/models/user';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../userdialog/user-dialog.component';

@Component({
  selector: 'app-usercards',
  templateUrl: './usercards.component.html',
  styleUrls: ['./usercards.component.scss']
})
export class UsercardsComponent implements OnInit {
  // userService : UsersService
  users: User[];

  

  constructor(private userService: UsersService, public dialog: MatDialog) { }

  ngOnInit(): void {

  this.userService.getUser().subscribe((data:User[]) => {
    this.users = data
    console.log(data)
  })
    
  }

  userImage(id: number): string {
    return `https://randomuser.me/api/portraits/women/${id}.jpg`
 }

  getUser(user: User){
    this.openDialog(user);
    
  }


  openDialog(u:User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '375px',
      data: {
        name: u.name, 
        username: u.username, 
        email: u.email, 
        phone: u.phone,
        website: u.website
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });


  }


}
