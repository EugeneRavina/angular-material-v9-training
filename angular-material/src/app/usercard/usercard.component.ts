import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
import { MatDialog } from '@angular/material/dialog';
import { UserdialogComponent } from 'src/app/dialog/userdialog/userdialog.component';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {
  dir:string="ltr";
  isDarkTheme:boolean= false;
  userList:any[] = new Array();
  userImage:string[] = new Array();
  constructor(private userService:UserService, public dialog: MatDialog) { 
    this.GetUsers(10);
    this.GetImages(10);
    console.log(this.userList);
   }


  ngOnInit(): void {
  }
  GetUsers(count:number){
    for(let i=1;i<=count;i++)
      this.userService.GetUsers(i).subscribe(u=>this.userList.push(u))
    
  }
  
  GetImages(count:number){
    for(let i=0;i<=count;i++)
          this.userImage.push(this.userService.UserImage(i));
  }
  ChangeDir(){
    if(this.dir=="ltr")
      this.dir="rtl";
    else
      this.dir="ltr";
  }
  ChangeTheme(): void {
    if (this.isDarkTheme) {
       this.isDarkTheme = false;
    } else {
       this.isDarkTheme = true;
    }
 }
 openDialog(user): void {
  const dialogRef = this.dialog.open(UserdialogComponent, {
    width: '300px',
    data: user
  });
 }
}
