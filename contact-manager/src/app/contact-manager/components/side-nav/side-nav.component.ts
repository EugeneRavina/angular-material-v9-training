import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  dir:string ="ltr";
  isDarkTheme:boolean = false;
  constructor() { 
  }

  ngOnInit(): void {
    this.dir;
    this.isDarkTheme;
  }
  printBook(receivedBook) {
    this.dir = receivedBook;
  }
  printTheme(theme) {
    this.isDarkTheme = theme;
    console.log(this.isDarkTheme);
  }
}
