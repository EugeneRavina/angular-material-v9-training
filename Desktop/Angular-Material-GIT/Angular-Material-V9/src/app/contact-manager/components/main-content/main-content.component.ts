import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/user';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UserApiComponent } from 'src/app/demo/user-api/user-api.component';


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
      const dialogRef = this.dialog.open(UserApiComponent, { 
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