import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  // events: string[] = [];
  // opened: boolean;

  users: User[];
  isDarktheme: boolean = false;
  dir: string = 'ltr';
  
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  toggleTheme(){
    this.isDarktheme = !this.isDarktheme;
  }

  toggleDir(){
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
  }

}
