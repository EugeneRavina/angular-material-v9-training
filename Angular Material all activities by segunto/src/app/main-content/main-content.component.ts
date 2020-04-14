import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/User';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogsComponent } from '../user-dialogs/user-dialogs.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
users: User[]
  constructor(private userService : UserService , public dialog: MatDialog ) {
    this.getUsers();
   }
   sendInfo(names ,idd ,uname, emails, phonenum, web){
    const dialogRef = this.dialog.open(UserDialogsComponent, { 
      width : '50%',
      data: {
        name : names,
        id : idd,
        username : uname,
        email: emails,
        phone: phonenum,
        website : web,
      }
    });
   }
  ngOnInit(): void {
  }

  getUsers(){
    this.userService.getuser().subscribe((data : User[]) =>{
      this.users = data;
      console.log(this.users);
    })
  }

  userImage(id:number): string{
    return `http://randomuser.me/api/portraits/women/${id}.jpg`
  }

}
