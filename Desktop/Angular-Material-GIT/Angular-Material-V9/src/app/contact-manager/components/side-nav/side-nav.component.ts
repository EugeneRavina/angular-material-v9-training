import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';
import { User } from 'src/app/core/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  users: User[];
  events: string[] = [];
  isDarkTheme: boolean = false;
  dir:string = 'ltr';
  opened: boolean;
  
  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    this.userService.getuser().subscribe((data:User[])=>{
      this.users = data;
      console.log(data);
    });
  }

  userImage(id:number):string{ 
    return `https://randomuser.me/api/portraits/women/${id}.jpg`
  }

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir(){
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
  }


}
