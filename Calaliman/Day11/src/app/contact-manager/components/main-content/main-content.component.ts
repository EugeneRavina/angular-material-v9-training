import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user.service';
import { User } from '../../../core/models/user'
import { MatDialog} from '@angular/material/dialog';
import { UserAPIModalComponent } from 'src/app/demo/user-apimodal/user-apimodal.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

   
  users: User[]

  constructor(private userService : UserService, public dialog: MatDialog) {
    this.getUser();
  }

  ngOnInit(): void {
  }

  getUser(){
    this.userService.getuser().subscribe((data: User[])=>{
      this.users = data;
      console.log(data);
    });
  }
 

  userImage(id: number): string {
    return `https://randomuser.me/api/portraits/women/${id}.jpg`
 }
 
 sendInfo(uname, emails,phonenum,web){
  const dialogRef = this.dialog.open(UserAPIModalComponent, {
    width: '250px',
    data: {
      username: uname,
      email: emails,
      phone: phonenum,
      website: web,
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
 }

}
