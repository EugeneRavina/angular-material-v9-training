import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {users} from '../../final/models/contacts'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  isDarkTheme: boolean = false;
  contacts = users
  dir = 'ltr';
  constructor() { }

  userImage(id:number):string{
    return `https://randomuser.me/api/portraits/men/${id}.jpg`
  }

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir(){
    this.dir = this.dir =='ltr'? 'rtl' : 'ltr';
  }
  
}
