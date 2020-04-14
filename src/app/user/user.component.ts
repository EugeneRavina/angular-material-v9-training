import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
users: any;

  constructor(private userService: UserService) 
  {
    this.getUsers();
   }

  ngOnInit(): void {
  }
  getUsers(){
    this.userService.getuser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }
  userImage(id:number):string{
    return `http://randomuser.me/api/portraits/women/${id}.jpg`
  }

}
