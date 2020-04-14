import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import { MatDialog } from '@angular/material/dialog';
import { UserdialogComponent } from 'src/app/dialog/userdialog/userdialog.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  dir:string="ltr";
  isDarkTheme:boolean= false;
  
   constructor(private userService:UserService, public dialog: MatDialog) { 
    
   }

  ngOnInit(): void {
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
 

}
